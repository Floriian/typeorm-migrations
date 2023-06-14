import { dataSource } from "../config/Datasource";
import { CatEntity } from "../entities/Cat.entity";
import { faker } from "@faker-js/faker";

async function main() {
  const catRepository = dataSource.getRepository(CatEntity);
  for (let i = 0; i <= 10; i++) {
    const cat = new CatEntity();
    cat.catName = faker.animal.cat();
    cat.specie = faker.lorem.sentence({ min: 1, max: 1 });
    await catRepository.save(cat);
    console.log(`SEED: Cat created with ${cat.id}.`);
  }
}

main();
