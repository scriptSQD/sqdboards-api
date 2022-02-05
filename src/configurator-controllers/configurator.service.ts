import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pcb, PcbDoc } from 'src/schemas/configurator/pcb.schema';

@Injectable()
export class ConfiguratorService {

    constructor(@InjectModel(Pcb.name) private pcbDb: Model<PcbDoc>) {};

    async getPcbs(): Promise<Pcb[]> {
        return this.pcbDb.find().exec();
    }

}
