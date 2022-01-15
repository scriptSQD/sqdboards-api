import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Order } from 'src/schemas/order.schema';

@Controller('orderByOid')
export class OrderByOidController {

    constructor(private service: AppService) {};

    @Get(':oid')
    async getOrderByOid(@Param() params): Promise<Order> {
        return this.service.getOrderByOid(params.oid);
    }

}
