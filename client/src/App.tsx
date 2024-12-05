import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const[socket,setSocket]=useState();
  const inputref=useRef();
  function sendMessage() {
    if (!socket)  {
      return;
    }
    const message=inputref.current.value;
    //@ts-ignore
    socket.send(message)
  }
  useEffect(() => {
    const ws=new WebSocket("ws://localhost:8080");
    setSocket(ws)
   ws.onmessage=(ev)=>{
    alert(ev.data)
   }
   
  }, [])
  


  return (
    <div>
<input type="text" placeholder='message write here' />
<button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App