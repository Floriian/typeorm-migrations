import { DataSource, type DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "database",
  port: 5432,
  username: "user",
  password: "password",
  database: "typeorm_migrations",
  entities: ["../entities/*.ts"],
  migrations: ["../dist/migrations/*.js"],
};
export const dataSource = new DataSource(dataSourceOptions);
