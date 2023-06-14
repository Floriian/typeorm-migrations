import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { dataSource } from "../config/Datasource";

@Entity()
export class CatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  catName: string;

  @Column()
  specie: string;
}
