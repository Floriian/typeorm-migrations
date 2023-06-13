import { Response } from "express";

export class BaseException extends Error {
  body: string;
  code: number;

  constructor(code: number, body: string) {
    super();
    this.code = code;
    this.body = body;
  }
}
