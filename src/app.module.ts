import { Module } from '@nestjs/common'
import { DrawsModule } from './draws/draws.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GamesModule } from './games/games.module'
import { Game } from './games/entities/game.entity'
import postgresConnection from './core/configs/postgres-connection'
import { InProgressPoint } from './draws/entities/in-progress-point.entity'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...postgresConnection,
            entities: [Game, InProgressPoint],
        }),
        DrawsModule,
        GamesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
