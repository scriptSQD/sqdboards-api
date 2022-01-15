import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OrderDoc = Order & Document;

@Schema({collection: "orders"})
export class Order {
    @Prop({required: true})
    _id: string;
    @Prop({required: true})
    specs: string;
    @Prop()
    modifications: string;
    @Prop({required: true})
    state: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
