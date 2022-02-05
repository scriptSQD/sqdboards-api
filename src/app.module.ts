import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Deal, DealSchema } from './schemas/deal.schema';
import { Order, OrderSchema } from './schemas/order.schema';
import { Pcb, PcbSchema } from './schemas/configurator/pcb.schema';

import { DealsController } from './deals/deals.controller';
import { OrdersByUidController } from './order-controllers/orders-by-uid/orders-by-uid.controller';
import { OrderByOidController } from './order-controllers/order-by-oid/order-by-oid.controller';
import { OrderControllersService } from './order-controllers/order-controllers.service';
import { DealsService } from './deals/deals.service';
import { PcbsController } from './configurator-controllers/pcbs/pcbs.controller';
import { ConfiguratorService } from './configurator-controllers/configurator.service';

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
    MongooseModule.forFeature([{ name: Deal.name, schema: DealSchema }], 'deals'),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }], 'orders'),
    MongooseModule.forFeature([
      { name: Pcb.name, schema: PcbSchema }
    ], 'configurator')
  ],
  controllers: [AppController, OrdersByUidController, DealsController, OrderByOidController, PcbsController],
  providers: [AppService, OrderControllersService, DealsService, ConfiguratorService],
})
export class AppModule {}
