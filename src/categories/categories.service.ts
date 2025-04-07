import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../authentication/entities/user.entity';

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  create(createCategoryDto: CreateCategoryDto, user: UserEntity) {
    createCategoryDto.user = user;
    return this.categoryRepository.save(createCategoryDto);
  }

  isAdult(age: number): boolean {
    // if(age < 0) {
    //   throw new Error('Age cannot be negative')
    // }
    return age > 18
  }


  findAll(userId) {
    return this.categoryRepository.find({ where: { user: { id: userId } } });
  }


  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
