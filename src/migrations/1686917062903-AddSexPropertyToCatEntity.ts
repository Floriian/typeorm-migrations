import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSexPropertyToCatEntity1686917062903 implements MigrationInterface {
    name = 'AddSexPropertyToCatEntity1686917062903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cats" ADD "sex" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "sex"`);
    }

}
