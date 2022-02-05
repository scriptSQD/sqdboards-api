import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose'
import { pcbFeatures } from "src/models/configurator/pcb-features";

export type PcbDoc = Pcb & Document;

@Schema()
export class Pcb {
    @Prop({required: true, type: mongoose.Schema.Types.ObjectId})
    _id: string;
    @Prop({required: true})
    features: pcbFeatures;
    @Prop({required: true})
    images: string[];
    @Prop({required: true})
    size: string;
    @Prop({required: true})
    title: string;
}

export const PcbSchema = SchemaFactory.createForClass(Pcb);
