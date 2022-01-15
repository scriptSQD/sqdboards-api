import { Test, TestingModule } from '@nestjs/testing';
import { OrdersByUidController } from './orders-by-uid.controller';

describe('OrdersByUidController', () => {
  let controller: OrdersByUidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersByUidController],
    }).compile();

    controller = module.get<OrdersByUidController>(OrdersByUidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
