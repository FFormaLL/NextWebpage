import Page from '~/components/Page'
import Button from '~/components/Buttons/Button'
import styled from 'styled-components'
import { Main } from '~/styles/global'
import { useState, useEffect } from 'react';
import { io } from "socket.io-client";


const GuestWrapper = styled.div`
    width: 430px;
    margin: 0 auto;
    border: 1px solid black;
    padding: 18px;
    border-radius: 10px;

    h3 {
        font-size: 16px;
        width: 100%;
        text-align: center;
    }

    button[type="submit"] {
        margin: 0 auto;
        display: block;
        cursor: pointer;
    }

    input {
        width: 100%;
        color: black;
        display: block;
        padding: 18px;
        border-radius: 10px;
        border: 1px solid black;
        margin: 20px auto;
    }

    #messages {
        height: 300px;
        overflow-y: scroll;
        padding: 10px;
        background-color: #f1f1f1;
      }
      
      #message-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #fff;
        border-top: 1px solid #ccc;
      }
`
const socket = io("http://localhost:4000", {
    transports: ["websocket", "polling"]
});

const ChatRoom = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("")


    useEffect(() => {
        setUsername(window.prompt('Enter your username:'))
    }, []);

    useEffect(() => {
        socket.on("connect", () => {
            socket.emit("username", username);
        });
    }, []);

    const submitMessage = () => {
        socket.on("send", () => {
            socket.emit("message", input);
        })
        console.log('The message is' + input)
    }

    // This function will be called when the form is submitted
  function handleSubmit(e) {
    // Prevent the form from refreshing the page
    e.preventDefault();
    // Add the message to the list of messages
    setMessages([...messages, input]);
  }

    return (
        <Main>
            <Page title="Chatroom">
                <GuestWrapper>
                    <>
                        <div>
                            {username && <p>Your username is: {username}</p>}
                        </div>
                        <div id="chatroom">
                            <div id="messages">
                            </div>
                            <form 
                            id="message-form"
                            onSubmit={handleSubmit}
                            />
                        </div>
                        <input
                            type="text"
                            id="message-input"
                            placeholder="Enter your message here"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <Button onClick={submitMessage}>Submit</Button>
                    </>
                </GuestWrapper>
            </Page>
        </Main>
    )
}

export default ChatRoom;
