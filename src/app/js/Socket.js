export class WebSocketClient {

    constructor() {
        this.url = 'ws://192.168.1.2:8484';
        this.websocket;
    }

    SocketConnection() {
        this.websocket = new WebSocket(this.url)
    }
    
    SocketMessage(i) {
        if (!this.websocket || this.websocket.readyState != this.websocket.OPEN) {
            this.SocketConnection();
            setTimeout(() => {
                    console.log("Delayed for 1 second.");
                    SocketMessage(i)
            }, "1000");
        } else {
            console.log("Connnected");
            this.websocket.send(i);
            console.log("Messaggio inviato: ", i);
        }

    }
}