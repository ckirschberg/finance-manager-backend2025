import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { PremiumUserGuard } from '../authentication/premium-user.guard';

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  async create(@Body() createEntryDto: CreateEntryDto) {
    const display_url = await this.entriesService.saveImage(createEntryDto.photo.base64);
    createEntryDto.photo = display_url; //just save the url to the image in our database.

    return this.entriesService.create(createEntryDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, PremiumUserGuard)
  findAll(@Req() req) {
    console.log("req.user", req.user);
    return this.entriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntryDto: UpdateEntryDto) {
    return this.entriesService.update(+id, updateEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entriesService.remove(+id);
  }
}
