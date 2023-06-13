import express, { Request, type Express, Response } from "express";
import cors from "cors";
import { join } from "path";
import { dataSource } from "./config/Datasource";
import { CatEntity } from "./entities/Cat.entity";

const app: Express = express();

app.use(cors());

dataSource
  .initialize()
  .then(() => console.log("✅: Database connected"))
  .catch((e) => {
    console.log("❌: Cannot connect to database.");
    throw new Error(e);
  });

app.get("/", async (req: Request, res: Response) => {
  return res.json(await dataSource.getRepository(CatEntity).find());
});

app.listen(3000, () => {
  console.log("✅: App is listening on port 3000");
});
