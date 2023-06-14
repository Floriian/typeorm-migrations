import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCatTable1686764206911 implements MigrationInterface {
    name = 'CreateCatTable1686764206911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cat_entity" ("id" SERIAL NOT NULL, "catName" character varying NOT NULL, "specie" character varying NOT NULL, CONSTRAINT "PK_676cf6dbf9d1d7d216ecd87c4f3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cat_entity"`);
    }

}
