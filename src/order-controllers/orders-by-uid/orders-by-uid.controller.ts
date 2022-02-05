import { Controller, Get, Param } from '@nestjs/common';
import { Order } from 'src/schemas/order.schema';
import { OrderControllersService } from '../order-controllers.service';

@Controller('ordersByUid')
export class OrdersByUidController {
  
    constructor(private service: OrderControllersService) {};

    @Get(':uid')
    async getOrdersByUserId(@Param() params): Promise<Order[]> {
        return this.service.getOrdersByUid(params.uid);
    }

}
