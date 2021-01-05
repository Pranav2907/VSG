const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
	debug: true,
});
<<<<<<< HEAD

app.get('/', (req, res) => {
    res.render('index');
});

   
const { v4: uuidv4 } = require('uuid');
app.use('/peerjs',peerServer);
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
=======
app.get("/", (req, res) => {
	res.render("index");
>>>>>>> 897a6816935e223b2f319d8000259f8f655b4c50
});

const { v4: uuidv4 } = require("uuid");
app.use("/peerjs", peerServer);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/room/new", (req, res) => {
	res.redirect(`/${uuidv4()}`);
});

<<<<<<< HEAD


  
io.on('connection', socket => {
    socket.on('join-room' ,( roomId , userId) => {
       socket.join(roomId);
       socket.to(roomId).broadcast.emit('user-connected',userId );
       socket.on('message', message => {
           io.to(roomId).emit('createMessage', message)
       });
       

    });
=======
app.get("/:room", (req, res) => {
	res.render("room", { roomId: req.params.room });
>>>>>>> 897a6816935e223b2f319d8000259f8f655b4c50
});

io.on("connection", (socket) => {
	socket.on("join-room", (roomId, userId) => {
		socket.join(roomId);
		socket.to(roomId).broadcast.emit("user-connected", userId);
		socket.on("message", (message) => {
			io.to(roomId).emit("createMessage", message);
		});
	});
});

<<<<<<< HEAD

  server.listen(process.env.PORT||3030);
=======
server.listen(process.env.PORT || 3030);
>>>>>>> 897a6816935e223b2f319d8000259f8f655b4c50
