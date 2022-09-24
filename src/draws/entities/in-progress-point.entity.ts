import { Game } from 'src/games/entities/game.entity'
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { PaintCoord } from '../dto/paint-coords'

@Entity('InProgressPoint')
export class InProgressPoint {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Game, (game) => game.inProgressPoints)
    game: Game

    @Column({
        nullable: false,
        type: 'integer',
    })
    offsetX: number

    @Column({
        nullable: false,
        type: 'integer',
    })
    offsetY: number

    @Column({
        nullable: false,
        type: 'integer',
    })
    movementX: number

    @Column({
        nullable: false,
        type: 'integer',
    })
    movementY: number
}
