const express = require('express');
const app = express();
const _socket_io = require('socket.io');
const {manageRoutes}=require('./_sockets/socketRoutes');
const {connectToDb} = require('./services/services');
const router = require('./routes/routes');
const path = require('path');


const PORT = process.env.PORT;
// connects to mongoDb
connectToDb();

app.use(express.static(path.join(__dirname,'_public')));



app.use('/',router);



const io = _socket_io(app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 😎`);
}),{
    cors: {
        origin: "*", // allow to server to accept request from different origin
    },
});

io.on("connection",manageRoutes);



