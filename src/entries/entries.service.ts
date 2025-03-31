import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from './entities/entry.entity';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class EntriesService {
  constructor(@InjectRepository(Entry) private entriesRepository: Repository<Entry>,
  private readonly httpService: HttpService) {}
  
  async saveImage(base64EncodedImage: string): Promise<string> {
    const formData = new FormData();
      formData.append('image', base64EncodedImage);
      const { data: imageData } = await firstValueFrom(
        this.httpService
          .post(
            `https://freeimage.host/api/1/upload?key=${process.env.IMG_API_KEY}`,
            formData,
          )
          .pipe(
            catchError((error: AxiosError) => {
              console.log("error!!!!!");
              throw error;
            }),
          ),
      );
      return imageData.image.display_url;
  }


  create(createEntryDto: CreateEntryDto) {
    return this.entriesRepository.save(createEntryDto);
  }

  findAll() {
    return this.entriesRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} entry`;
  }

  update(id: number, updateEntryDto: UpdateEntryDto) {
    return `This action updates a #${id} entry`;
  }

  remove(id: number) {
    return `This action removes a #${id} entry`;
  }
}
