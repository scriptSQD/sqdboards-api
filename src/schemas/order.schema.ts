import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose'
import { OrderModifications } from "src/models/order-modifications";
import { OrderSpecs } from "src/models/order-specs";

export type OrderDoc = Order & Document;

@Schema({collection: "orders"})
export class Order {
    @Prop({required: true, type: mongoose.Schema.Types.ObjectId})
    _id: string;
    @Prop({required: true})
    byUser: string;
    @Prop({required: true})
    specs: OrderSpecs;
    @Prop({required: true})
    modifications: OrderModifications;
    @Prop({required: true})
    state: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
