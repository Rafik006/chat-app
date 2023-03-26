import React, { useEffect, useReducer, useState } from 'react'

const Chat = ({username,socket,room}) => {
    const [message,setMessage]=useState("")
    const sendMessage= async()=>{
            if(message!==""){
                const messageData={
                    author:username,
                    room:room,
                    message:message
                }
                await socket.emit("send_message",messageData)
            }
    }
    useEffect(()=>{
            socket.on("recive_message",(data)=>{
                console.log(data)
            })
    },[socket])
  return (
    <div>
     <input type="text" placeholder='hey ..'onChange={(e)=>setMessage(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&& sendMessage()}/> 
     <button>send</button>
    </div>
  )
}

export default Chat
