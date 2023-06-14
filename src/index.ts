import express, {
  Request,
  type Express,
  Response,
  NextFunction,
} from "express";
import cors from "cors";
import { dataSource } from "./config/Datasource";
import { CatEntity } from "./entities/Cat.entity";
import { NotFoundException } from "./exceptions/NotFoundException";
import { errorMiddleware } from "./middlewares/error.middleware";
import { BaseException } from "./exceptions/BaseException";

const app: Express = express();

dataSource
  .initialize()
  .then(() => console.log("✅: Database connected"))
  .catch((e) => {
    console.log("❌: Cannot connect to database.");
    throw new Error(e);
  });

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cats = await dataSource.getRepository(CatEntity).find();
    if (!cats.length) throw new NotFoundException();
    res.status(200).json({ cats });
  } catch (e) {
    next(e);
  }
});

app.use(cors());
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("✅: App is listening on port 3000");
});
