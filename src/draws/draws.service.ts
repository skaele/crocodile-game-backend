import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AddPointsInput } from './dto/add-points.input'
import { InProgressPoint } from './entities/in-progress-point.entity'

@Injectable()
export class DrawsService {
    constructor(
        @InjectRepository(InProgressPoint)
        private repository: Repository<InProgressPoint>,
    ) {}

    addPoints(addDotsInput: AddPointsInput) {
        this.repository.save(addDotsInput.coords.map((c) => ({ ...c, game: { id: addDotsInput.gameId } })))
    }
}
