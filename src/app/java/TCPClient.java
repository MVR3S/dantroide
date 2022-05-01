import java.net.*;
import java.io.*;
import java.util.*;

class TCPClient {
    public static void main(String[] args) {
        // Porta server
        int port = 2000;

        // Indirizzo server TCP
        InetAddress serveAddress;

        // Oggetto da utilizzare per la comunicazione
        Socket connection;

        // Stream per gestire il flusso in output
        OutputStream outSocket;
        PrintWriter streamOut;

        try {
            // Uso getLocalHost() perché il server é sulla stessa macchina del client, altrimenti uso l'indirizzo ip del server
            serveAddress = InetAddress.getLocalHost();
            System.out.println("Indirizzo del server trovato");
            connection = new Socket(serveAddress, port);
            System.out.println("Connessione aperta");
            outSocket = connection.getOutputStream();
            streamOut = new PrintWriter(outSocket);
            streamOut.print("MESSAGGIO");
            streamOut.close();
            System.out.println("Messaggio inviato");
        } catch(IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
}