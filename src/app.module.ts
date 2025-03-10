import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { dbConfig } from '../data.source';
import { EntriesModule } from './entries/entries.module';
import { AuthModule } from './authentication/auth.module';
import { UsersService } from './users/users.service';


@Module({
 imports: [
   ConfigModule.forRoot({ isGlobal: true }),
   TypeOrmModule.forRoot(dbConfig),
 CategoriesModule,
 EntriesModule,
 AuthModule],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}



