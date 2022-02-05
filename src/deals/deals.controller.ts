import { Controller, Get } from '@nestjs/common';
import { Deal } from 'src/schemas/deal.schema';
import { DealsService } from './deals.service';

@Controller('deals')
export class DealsController {

    constructor(private service: DealsService) {};

    @Get()
    async getDeals(): Promise<Deal[]> {
        return this.service.getDeals();
    }

}
