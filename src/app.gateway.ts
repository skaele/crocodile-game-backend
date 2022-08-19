import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { Socket } from 'socket.io'

interface PaintCoords {
    offsetX: number
    offsetY: number
    movementX: number
    movementY: number
}

@WebSocketGateway({ cors: true })
export class AppGateway {
    @SubscribeMessage('draw')
    listenForDraw(@MessageBody() coords: PaintCoords, @ConnectedSocket() socket: Socket) {
        console.log(coords)
        socket.broadcast.emit('paint', coords)
    }

    handleConnection(socket: Socket) {
        // console.log(socket)
    }
}
