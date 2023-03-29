import { Request, Response, NextFunction } from "express";

export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  next();
}
