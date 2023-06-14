import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAgeToCatEntity1686777167210 implements MigrationInterface {
    name = 'AddAgeToCatEntity1686777167210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cats" ("id" SERIAL NOT NULL, "catName" character varying NOT NULL, "specie" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_611e3c0a930b4ddc1541422864c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cats"`);
    }

}
