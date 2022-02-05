import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deal, DealDoc } from 'src/schemas/deal.schema';

@Injectable()
export class DealsService {

    constructor(@InjectModel(Deal.name) private dealsDb: Model<DealDoc>) {};
    
    async getDeals(): Promise<Deal[]> {
        return this.dealsDb.find().exec();
    }

}
