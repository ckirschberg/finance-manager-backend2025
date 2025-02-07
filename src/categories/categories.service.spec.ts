import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
      CategoriesService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  


  describe('isAdult', () => {
    it('should return true if age is at least 18', () => {
      expect(service.isAdult(18)).toBe(true);
    })
    it('should return false when age is 17', () => {
      expect(service.isAdult(17)).toBe(false);
    })
    it('should return false when age is 17.9', () => {
      expect(service.isAdult(17.9)).toBe(false);
    });
    it('should throw exception when age is negative', () => {
      expect(() => service.isAdult(-1)).toThrow();
    })
  })
});
