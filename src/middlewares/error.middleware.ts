import { NextFunction, Request, Response } from "express";
import { BaseException } from "../exceptions/BaseException";

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof BaseException) {
    const { code, body } = error;
    res.status(error.code).json({ code, body });
  } else {
    res.status(500).json({ body: "Internal Server Error." });
  }
}
