import { BaseException } from "./BaseException";

export class NotFoundException extends BaseException {
  constructor(body?: string) {
    super(404, body ? body : "Not found");
  }
}
