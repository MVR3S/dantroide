export class WebSocketClient {

    constructor() {
        this.url = "wss://192.168.1.197:443";
        this.websocket;
    }

    SocketConnection() {
        this.websocket = new WebSocket(this.url);
        console.log("Connesso");
    }
    
    SocketMessage(i) {
        this.websocket.send(i);
        console.log("Messaggio inviato: ", i);
    }
}