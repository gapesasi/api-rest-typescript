import { Response } from "express";
import NotFoundError from "./not-found-error";
import ValidationError from "./validation-error";
import { HttpStatusCode } from "../../controllers/protocols";

export default function handleError(error: Error, res: Response) {
  if (error instanceof NotFoundError) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ message: error.message });
  } else if (error instanceof ValidationError) {
    return res
      .status(HttpStatusCode.UNPROCESSABLE_ENTITY)
      .json({ message: error.message });
  } else {
    return res
      .status(HttpStatusCode.SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}
