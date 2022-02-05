import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDoc } from 'src/schemas/order.schema';

@Injectable()
export class OrderControllersService {

    constructor(@InjectModel(Order.name) private ordersDb: Model<OrderDoc>) {};
    
    async getOrdersByUid(uid: string): Promise<Order[]> {
        return this.ordersDb.aggregate([
            {
                "$search": {
                    "index": "ordersByUserId",
                    "text": {
                        "query": uid,
                        "path": "byUser"
                    }
                }
            }
        ]);
    }
        
    async getOrderByOid(oid: string): Promise<Order> {
        return this.ordersDb.findById(oid);
    }

}
