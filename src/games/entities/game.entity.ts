import { InProgressPoint } from 'src/draws/entities/in-progress-point.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

// TODO: Add result image, don't use points, table gonna be so massive 
@Entity('Game')
export class Game {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(() => InProgressPoint, (point) => point.game)
    inProgressPoints: InProgressPoint[]
}
