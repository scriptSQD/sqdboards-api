import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Deal, DealSchema } from './schemas/deal.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sqd:CrB99rI5ZU1WQUZE@cluster0.v4qgc.mongodb.net/SQDBoardsDB?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: Deal.name, schema: DealSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
