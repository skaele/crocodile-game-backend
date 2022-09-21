import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets'
import { Socket } from 'socket.io'
import { DrawsService } from './draws.service'
import { AddPointsInput } from './dto/add-points.input'

@WebSocketGateway({ cors: true })
export class DrawsGateway {
    constructor(private readonly drawsService: DrawsService) {}

    @SubscribeMessage('draw')
    draw(@ConnectedSocket() socket: Socket, @MessageBody() addPointsInput: AddPointsInput) {
        // this.drawsService.addPoints(addPointsInput)

        return socket.to(addPointsInput.gameId).emit('update-draw', addPointsInput.coords)
    }

    @SubscribeMessage('join-room')
    async onRoomJoin(@ConnectedSocket() socket: Socket, @MessageBody() roomId: string) {
        console.log(roomId)

        socket.join(roomId)

        // Send last messages to the connected user
        socket.emit('new-user-connected', 'user-id')
    }
}
