import { NextFunction, Request, Response } from "express";
import { dataSource } from "../config/Datasource";
import { CatEntity } from "../entities/Cat.entity";
import { NotFoundException } from "../exceptions";

export async function getAllCats(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const catRepository = dataSource.getRepository(CatEntity);
    const cats = await catRepository.find();
    if (!cats.length) throw new NotFoundException();
    res.status(200).json({ cats });
  } catch (e) {
    next(e);
  }
}
