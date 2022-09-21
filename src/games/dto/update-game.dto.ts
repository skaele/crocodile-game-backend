import { PartialType } from '@nestjs/mapped-types'
import { CreateGameDto } from './create-game.dto'
import { IsUUID } from 'class-validator'

export class UpdateGameDto extends PartialType(CreateGameDto) {
    @IsUUID()
    id: string
}
