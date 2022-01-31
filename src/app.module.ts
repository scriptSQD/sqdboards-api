import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Deal, DealSchema } from './schemas/deal.schema';
import { Order, OrderSchema } from './schemas/order.schema';
import { OrdersByUidController } from './orders-by-uid/orders-by-uid.controller';
import { DealsController } from './deals/deals.controller';
import { OrderByOidController } from './order-by-oid/order-by-oid.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://userapi:1111@cluster0.v4qgc.mongodb.net/SQDBoardsDeals?retryWrites=true&w=majority', {
      connectionName: 'deals'
    }),
    MongooseModule.forRoot('mongodb+srv://userapi:1111@cluster0.v4qgc.mongodb.net/SQDBoardsConfigurator?retryWrites=true&w=majority', {
      connectionName: 'configurator'
    }),
    MongooseModule.forRoot('mongodb+srv://userapi:1111@cluster0.v4qgc.mongodb.net/SQDBoardsOrders?retryWrites=true&w=majority', {
      connectionName: 'orders'
    }),
    MongooseModule.forFeature([{name: Deal.name, schema: DealSchema}], 'deals'),
    MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}], 'orders')
  ],
  controllers: [AppController, OrdersByUidController, DealsController, OrderByOidController],
  providers: [AppService],
})
export class AppModule {}
