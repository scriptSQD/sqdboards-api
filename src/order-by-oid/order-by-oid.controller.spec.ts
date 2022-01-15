import { Test, TestingModule } from '@nestjs/testing';
import { OrderByOidController } from './order-by-oid.controller';

describe('OrderByOidController', () => {
  let controller: OrderByOidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderByOidController],
    }).compile();

    controller = module.get<OrderByOidController>(OrderByOidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
