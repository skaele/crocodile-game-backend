import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets'
import { Socket } from 'socket.io'
import { DrawsService } from './draws.service'
import { AddPointsInput } from './dto/add-points.input'

@WebSocketGateway({ cors: true })
export class DrawsGateway {
    constructor(private readonly drawsService: DrawsService) {}

    @SubscribeMessage('draw')
    async draw(@ConnectedSocket() socket: Socket, @MessageBody() addPointsInput: AddPointsInput) {
        const result = await this.drawsService.addPoints(addPointsInput)

        return socket.to(addPointsInput.gameId).emit('update-draw', result)
    }

    @SubscribeMessage('join-draw-room')
    async onRoomJoin(@ConnectedSocket() socket: Socket, @MessageBody() { gameId }: { gameId: string }) {
        socket.join(gameId)

        console.log(gameId)
        // Send last messages to the connected user
        socket.emit('new-user-connected', 'user-id')
    }
}
