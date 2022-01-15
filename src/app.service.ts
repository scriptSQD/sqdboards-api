import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deal, DealDoc } from './schemas/deal.schema';
import { Order, OrderDoc } from './schemas/order.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Deal.name) private dealsDb: Model<DealDoc>,
              @InjectModel(Order.name) private ordersDb: Model<OrderDoc>) {};

  async getDeals(): Promise<Deal[]> {
    return this.dealsDb.find().exec();
  }

  async getOrdersByUid(uid: string): Promise<Order[]> {
    return this.ordersDb.aggregate([
      {
        "$search": {
          "index": "orderByUserId",
          "text": {
            "query": uid,
            "path": "byUser"
          }
        }
      }
    ]);
  }

  async getOrderByOid(oid: string): Promise<Order> {
    return this.ordersDb.findOne({id: oid}).exec();
  }

}
