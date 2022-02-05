import { Controller, Get } from '@nestjs/common';
import { Pcb } from 'src/schemas/configurator/pcb.schema';
import { ConfiguratorService } from '../configurator.service';

@Controller('pcbs')
export class PcbsController {

    constructor(private configuratorService: ConfiguratorService) {};

    @Get()
    async getPcbs(): Promise<Pcb[]> {
        return this.configuratorService.getPcbs();
    }

}
