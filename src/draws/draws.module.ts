import { Module } from '@nestjs/common'
import { DrawsService } from './draws.service'
import { DrawsGateway } from './draws.gateway'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InProgressPoint } from './entities/in-progress-point.entity'

@Module({
    imports: [TypeOrmModule.forFeature([InProgressPoint])],
    providers: [DrawsGateway, DrawsService],
})
export class DrawsModule {}
