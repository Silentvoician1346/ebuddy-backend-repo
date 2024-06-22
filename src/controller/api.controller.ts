import { Request, Response } from "express";
import { fetchUser, updateUser } from "../repository/userCollection";
import ApiError from "../entities/apiError";

export const handleGetListUsers = async (req: Request, res: Response) => {
  try {
    const response = await fetchUser();
    res.status(200).send({ status: 200, data: response });
  } catch (error) {
    throw new ApiError(500, "Internal Server Error");
  }
};

export const handleUpdateUser = async (req: Request, res: Response) => {
  try {
    await updateUser(req.body);
    res.status(200).send({ status: 200 });
  } catch (error) {
    throw new ApiError(500, "Internal Server Error");
  }
};
