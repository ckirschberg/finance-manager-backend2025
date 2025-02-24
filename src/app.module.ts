import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { dbConfig } from '../data.source';
import { EntriesModule } from './entries/entries.module';


@Module({
 imports: [
   ConfigModule.forRoot({ isGlobal: true }),
   TypeOrmModule.forRoot(dbConfig),
 CategoriesModule,
 EntriesModule],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}



