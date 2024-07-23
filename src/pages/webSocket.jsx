import { useState, useEffect, useRef } from 'react'
import io from "socket.io-client";

const WebSockets = () => {
    const endPoint = "http://localhost:4000";
    const [message, setMessage] = useState('');
    const [receivedMessages, setReceivedMessages] = useState([]);

    const socket = useRef();

    //Emit: Used to send messages in the socket connection
    //On: Used to listen to messages in the socket connection

    useEffect(() => {
        socket.current = io(endPoint)
        console.log(socket.current);
    }, [])

    function sendMessage() {
        socket.current.emit("message", message)
    }

    function receiveMessage() {
        if (receivedMessages) {
            socket.current.on('broadcast', (message) => {
                setReceivedMessages([...receivedMessages, message])
            })
        }
    }

    useEffect(()=>{
        receiveMessage();
    }, [receivedMessages])
    return (
        <>
            <div className='mx-auto w-100 container shadow-lg border border-black p-5'>
                <input type="text" onChange={(e)=>setMessage(e.target.value)} className='form-control'/>
                <button onClick={sendMessage} className='btn btn-dark'>Send message</button>
            </div>

            <div className='mx-auto w-100 container shadow-lg border border-black p-5'>
                {
                    receivedMessages.map((item, index)=>(
                        <p key={index}>{item}</p>
                    ))
                }
            </div>
        </>
    )
}

export default WebSockets