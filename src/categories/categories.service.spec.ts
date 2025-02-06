import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let repository: jest.Mocked<Partial<Repository<Category>>>;

  beforeEach(async () => {
    repository = {
      find: jest.fn().mockResolvedValue([{ id: 1, title: 'Food' }, { id: 2, title: 'Clothing' }]), // Mocked data
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: getRepositoryToken(Category),
        useValue: repository,
      },
      CategoriesService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  it('should return an array of categories', async () => {
    const result = await service.findAll();
    expect(result).toEqual([{ id: 1, title: 'Food' }, { id: 2, title: 'Clothing' }]);
    expect(repository.find).toHaveBeenCalledTimes(1);
    expect(repository.find).not.toHaveBeenCalledWith(expect.objectContaining({ where: expect.anything() })); // Ensure no where clause
  });


  it('should not be true if age is less than 18', () => {
    expect(service.isAdult(17)).toBe(false);
  });
  it('should be true if age is 18 or greater than 18', () => {
    expect(service.isAdult(18)).toBe(true);
  })
});
