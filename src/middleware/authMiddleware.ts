import { NextFunction, Request, Response } from "express";
import { firebaseAdmin } from "..";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;

  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await firebaseAdmin
      .auth()
      .createSessionCookie(token?.toString() ?? "", { expiresIn });
    const options = { maxage: expiresIn, httpOnly: true };
    res.cookie("session", sessionCookie, options);
    next();
  } catch (err) {
    res.status(401).send({ status: 401, message: "Unauthorized Request." });
  }
};
