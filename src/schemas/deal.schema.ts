import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DealDoc = Deal & Document;

@Schema({collection: "deals"})
export class Deal {
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    desc: string;
    @Prop()
    toDeal: string;
    @Prop({required: true})
    illustr: string;
}

export const DealSchema = SchemaFactory.createForClass(Deal);