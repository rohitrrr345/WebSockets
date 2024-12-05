import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
   wss.on("connection",  (socket)=> {
    console.log("User connected");
    setInterval(() => {
        socket.send("hello")
    }, 500);
    socket.on("message")
     })