import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Deal } from 'src/schemas/deal.schema';

@Controller('deals')
export class DealsController {

    constructor(private service: AppService) {};

    @Get()
    async getDeals(): Promise<Deal[]> {
        return this.service.getDeals();
    }

}
