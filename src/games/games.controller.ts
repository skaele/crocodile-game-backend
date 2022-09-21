import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { GamesService } from './games.service'
import { CreateGameDto } from './dto/create-game.dto'
import { UpdateGameDto } from './dto/update-game.dto'
import PaginationParams from 'src/core/types/pagination-params'

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Post()
    async create(@Body() createGameDto: CreateGameDto) {
        return await this.gamesService.create(createGameDto)
    }

    @Get()
    async findAll() {
        return await this.gamesService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.gamesService.findOne(id)
    }

    @Patch()
    async update(@Body() updateGameDto: UpdateGameDto) {
        return await this.gamesService.update(updateGameDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.gamesService.remove(id)
    }
}
