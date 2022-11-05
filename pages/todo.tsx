import Page from '~/components/Page'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const Wrapper = styled.div`
color: white;
font-size: 25px;
padding-bottom: 30px;
body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

main {
    width: 320px;
    margin: 10vh auto;
}

h1 {
    font-size: 32px;
    text-align: center;
}

input {
    color: black;
    padding: 8px;
    font-size: 16px;
    width: calc(100% - 51px);
    border-radius: 6px;
    border: 1px solid #333;
}

button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-size: 37px;
    cursor: pointer;
    position: relative;
    bottom: -8px;
}

#list-container {
    color: black;
    background: white;
    height: 360px;
    border: 1px solid #333;
    border-radius: 6px;
    overflow-y: scroll;
}

#list-container h3 {
    text-align: center;
}
`

const ToDoList = () => {
    const [input, setInput] = useState("")
    const [items, setItems] = useState([])
    enterKey: (event:any) => {
        if (event.keyCode === 13 || event.which === 13) {
            setItems([...items,input])
            setInput("")
        }
    }
    
    return (
        <Page>
            <Wrapper>
                <main>
                    <h1>Get shit done!</h1>
                    <div id="list-container">
                        {
                            !items.length
                            ? <h3>No items yet...</h3>
                            : <ol>{ items.map(item => <li>{item}</li>) } </ol>
                        }
                    </div>
                    <input value={input} onChange={(e:any) => setInput(e.target.value)} type="text" placeholder="Enter a new item..." />
                    <button onClick={() => {
                        setItems([...items,input])
                        setInput("")
                    }}>✅</button>
                </main>
            </Wrapper>
        </Page>
    )
}



export default ToDoList;
