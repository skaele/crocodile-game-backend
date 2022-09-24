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

    async addPoints(addDotsInput: AddPointsInput) {
        console.log(addDotsInput.coords)

        const coords = addDotsInput.coords.map((c) => ({ ...c, game: { id: addDotsInput.gameId } }))
        console.log(coords)

        return await this.repository.save(coords)
    }
}
