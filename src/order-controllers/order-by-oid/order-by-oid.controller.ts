import { Controller, Get, Param } from '@nestjs/common';
import { Order } from 'src/schemas/order.schema';
import { OrderControllersService } from '../order-controllers.service';
import { oid } from './orderId.param';

@Controller('orderByOid')
export class OrderByOidController {

    constructor(private service: OrderControllersService) {};

    @Get(':oid')
    async getOrderByOid(@Param() params: oid): Promise<Order> {
        return this.service.getOrderByOid(params.oid);
    }

}
