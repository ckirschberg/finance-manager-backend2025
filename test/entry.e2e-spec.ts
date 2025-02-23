import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CategoriesService } from '../src/categories/categories.service';
import { Repository } from 'typeorm';
import { Entry } from '../src/entries/entities/entry.entity';
import { EntriesService } from '../src/entries/entries.service';

describe('EntryController (e2e)', () => {
  let app: INestApplication;
  let categoriesService: CategoriesService;
  let entryRepository: Repository<Entry>
  let entryService: EntriesService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .compile();

    app = moduleFixture.createNestApplication();
    categoriesService = moduleFixture.get(CategoriesService);
    entryService = moduleFixture.get(EntriesService);
    entryRepository = moduleFixture.get(getRepositoryToken(Entry))
    entryRepository.query("DELETE FROM entry")

    app.useGlobalPipes(new ValidationPipe())
    await app.init();
  });

});