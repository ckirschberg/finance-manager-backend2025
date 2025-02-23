import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { EntriesModule } from './entries/entries.module';
import dbConfig from '../data.source';


@Module({
 imports: [
   ConfigModule.forRoot({ isGlobal: true }),
   TypeOrmModule.forRoot(dbConfig.options), //.options, new compared to slides
   CategoriesModule, EntriesModule],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}



