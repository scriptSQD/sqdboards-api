import { Controller, Get } from '@nestjs/common';
import { mongo, Mongoose } from 'mongoose';
import { AppService } from './app.service';
import { Deal } from './schemas/deal.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getDeals')
  async getDeals(): Promise<Deal[]> {
    return this.appService.getDeals();
  }
}
