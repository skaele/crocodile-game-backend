import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateGameDto } from './dto/create-game.dto'
import { UpdateGameDto } from './dto/update-game.dto'
import { Game } from './entities/game.entity'
import PaginationParams from '../core/types/pagination-params'

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Game)
        private repository: Repository<Game>,
    ) {}

    async create(createGameDto: CreateGameDto) {
        return await this.repository.save(createGameDto)
    }

    async findAll(paginationParams?: PaginationParams) {
        return await this.repository.findAndCount()
    }

    async findOne(id: string) {
        return await this.repository.findOne({ where: { id },relations: ['inProgressPoints'] })
    }

    async update(updateGameDto: UpdateGameDto) {
        await this.repository.createQueryBuilder().update().set(updateGameDto).where('id = :id', { id: 1 }).execute()
    }

    async remove(id: string) {
        await this.repository.createQueryBuilder().delete().where('id = :id', { id: 1 }).execute()
    }
}
