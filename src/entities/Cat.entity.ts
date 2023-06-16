import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "public", name: "cats" })
export class CatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  catName: string;

  @Column()
  specie: string;

  @Column()
  age: number;

  @Column()
  sex: "FEMALE" | "MALE";
}
