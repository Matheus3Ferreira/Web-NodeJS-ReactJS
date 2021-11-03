import { Test, TestingModule } from '@nestjs/testing';
import { ExperienciaController } from './experiencia.controller';

describe('ExperienciaController', () => {
  let controller: ExperienciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienciaController],
    }).compile();

    controller = module.get<ExperienciaController>(ExperienciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
