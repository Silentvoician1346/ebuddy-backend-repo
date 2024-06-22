import { Response } from "express";

class ApiError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }

  static handle(err: ApiError, res: Response) {
    const { status, message } = err;
    res.status(status).json({
      error: {
        message,
        status,
      },
    });
  }
}

export default ApiError;
