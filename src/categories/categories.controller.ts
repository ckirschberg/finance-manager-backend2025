import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}


  // @UseGuards(JwtAuthGuard)
  @Post() // getting access to the 
  create(/*@Req() req,*/ @Body() createCategoryDto: CreateCategoryDto) {
    // console.log(req.user);
    
    return this.categoriesService.create(createCategoryDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    //return this.categoriesService.findAll(req.user.id);
    console.log("get all");
    
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
