import { dataSource } from "../config/Datasource";
import { CatEntity } from "../entities/Cat.entity";
import { faker } from "@faker-js/faker";

function main() {
  dataSource
    .initialize()
    .then(async () => {
      const catRepository = dataSource.getRepository(CatEntity);
      for (let i = 0; i <= 10; i++) {
        const cat = new CatEntity();
        cat.catName = faker.animal.cat();
        cat.specie = faker.lorem.sentence({ min: 1, max: 1 });
        cat.age = faker.number.int({ min: 1, max: 10 });
        cat.sex = faker.person.sex() ? "FEMALE" : "MALE";
        await catRepository.save(cat);
        console.log(`SEED: Cat created with ${cat.id}.`);
      }
    })
    .then(() => process.exit(0));
}

main();
