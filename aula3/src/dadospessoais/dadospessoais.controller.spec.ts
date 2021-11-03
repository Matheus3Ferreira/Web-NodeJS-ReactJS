import { Test, TestingModule } from '@nestjs/testing';
import { DadospessoaisController } from './dadospessoais.controller';

describe('DadospessoaisController', () => {
  let controller: DadospessoaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DadospessoaisController],
    }).compile();

    controller = module.get<DadospessoaisController>(DadospessoaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
