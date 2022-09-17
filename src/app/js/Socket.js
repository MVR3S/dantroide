export class WebSocketClient {

    constructor() {
        this.url = 'ws://192.168.1.2:8484';
        this.websocket;
    }

    SocketConnection() {
        this.websocket = new WebSocket(this.url)
            
        console.log("Connesso");
    }
    
    SocketMessage(i) {
        this.websocket.send(i);
        console.log("Messaggio inviato: ", i);
    }
}