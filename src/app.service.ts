import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deal, DealDoc } from './schemas/deal.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Deal.name) private db: Model<DealDoc>) {};

  async getDeals(): Promise<Deal[]> {
    return this.db.find().exec();
  }
}
