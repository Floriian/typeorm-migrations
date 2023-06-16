import express, { type Express } from "express";
import cors from "cors";
import { dataSource } from "./config/Datasource";
import { errorMiddleware } from "./middlewares/error.middleware";
import { catRouter } from "./routes/cat.router";

const app: Express = express();

dataSource
  .initialize()
  .then(() => console.log("✅: Database connected"))
  .catch((e) => {
    console.log("❌: Cannot connect to database.");
    throw new Error(e);
  });

app.use("/cats", catRouter);

app.use(cors());
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("✅: App is listening on port 3000");
});
