const { io } = require("socket.io-client");

const socket = io("http://localhost:8080");

socket.on("connect", () => {
    console.log("Connected to Socket.io:", socket.id);
});

socket.on("welcome", (data) => {
    console.log("Welcome message:", data.message);
    socket.disconnect();
});

socket.on("connect_error", (error) => {
    console.error("Socket.io connection error:", error.message);
});