export class WebSocketClient {

    constructor() {
        this.url = 'wss://192.168.188.140:8484';
        this.websocket;
    }

    SocketConnection() {
        this.websocket = new WebSocket(this.url, {
            protocolVersion: 8,
            origin: 'https://192.168.188.140:8484',
            rejectUnauthorized: false
            });
            
        console.log("Connesso");
    }
    
    SocketMessage(i) {
        this.websocket.send(i);
        console.log("Messaggio inviato: ", i);
    }
}