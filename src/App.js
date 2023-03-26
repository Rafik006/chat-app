import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
const socket = io.connect("http://localhost:3001");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const joinChat=()=>{
    if(username!=="" && room!==""){
      socket.emit("join_chat",room)
    }
  }
  return (
    <div>
      <div>join a chat</div>
      <div>
        <input
          type="text"
          placeholder="John.."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text" placeholder="Room ID.." 
        onChange={(e) => setRoom(e.target.value)}/>
        <button onClick={joinChat}>join chat</button>
      </div>
      <Chat socket={socket} username={username} room={room}/> 
    </div>
  );
};

export default App;
