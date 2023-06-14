import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSpecieFieldToCatEntity1686760387134 implements MigrationInterface {
    name = 'AddSpecieFieldToCatEntity1686760387134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat_entity" ADD "specie" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat_entity" DROP COLUMN "specie"`);
    }

}
