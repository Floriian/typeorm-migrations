import { DataSource, type DataSourceOptions } from "typeorm";
import { CatEntity } from "../entities/Cat.entity";

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "database",
  port: 5432,
  username: "user",
  password: "password",
  database: "typeorm_migrations",
  entities: [CatEntity],
  migrations: ["dist/migrations/*.js"],
};
export default dataSourceOptions;
export const dataSource = new DataSource(dataSourceOptions);
