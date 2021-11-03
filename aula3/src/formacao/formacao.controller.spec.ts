import { Test, TestingModule } from '@nestjs/testing';
import { FormacaoController } from './formacao.controller';

describe('FormacaoController', () => {
  let controller: FormacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormacaoController],
    }).compile();

    controller = module.get<FormacaoController>(FormacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
