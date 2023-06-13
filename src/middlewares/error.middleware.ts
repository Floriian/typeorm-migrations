import { NextFunction, Request, Response } from "express";
import { BaseException } from "../exceptions/BaseException";

export function errorMiddleware(
  error: BaseException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { code, body } = error;
  res.status(code).json({ code, body });
}
