import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Order } from 'src/schemas/order.schema';

@Controller('ordersByUid')
export class OrdersByUidController {
  
    constructor(private service: AppService) {};

    @Get(':uid')
    async getOrdersByUserId(@Param() params): Promise<Order[]> {
        return this.service.getOrdersByUid(params.uid);
    }

}
