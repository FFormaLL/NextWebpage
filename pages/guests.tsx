import Page from '~/components/Page'
import Button from '~/components/Buttons/Button'
import axios from 'axios'
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { API_HOST } from '~/config';
import { Main } from '~/styles/global'

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

    button {
        margin: 0 auto;
        display: block;
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

    ol, ul {
        width: 100%;
        height: auto;
        line-height: 1.5em;
        margin: 0px auto;
        padding: 0;
        li {
            font-size: 20px;
            font-family: Garamond;
            list-style: none;
            position: relative;
            padding: 0 0px 10px 15px;
        }
        li:not(:last-child) {
            margin-bottom: 15px;
        }
    }
    
    li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 6px;
        height: 5px;
        width: 5px;
        border: 1px solid #f9dd94;
        border-width: 2px 2px 0 0;
        transform: translate(0px, 3px) rotate(45deg);
  }
`

const GuestList = ({ guestList }) => {
    const [guests, setGuests] = useState(guestList)
    const [input, setInput] = useState("")
    const submitGuest = async () => {
        try {
            if (!input.trim().length) return
            const response = await axios.post(`${API_HOST}/guests`, { name: input })
            setGuests(response.data)
            setInput("")
        } catch (e) { setGuests(null) }
    }

    useEffect(() => {
        setTimeout(async () => {
            try {
                const response = await axios.get(`${API_HOST}/guests`)
                setGuests(response.data)
            } catch (e) { setGuests(null) }
        }, 1000)
    }, [guests])

    return (
        <Main>
            <Page title="Guests">
                <GuestWrapper>
                    {
                        !guests
                            ? <h3>Connection to API cannot be obtained</h3>
                            : !guests.length
                                ? <h3>{`No guests :(`}</h3>
                                : <ol>{guests.map(guest => <li key={guest._id}>{guest.name}</li>)}</ol>
                    }
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <Button onClick={submitGuest}>Submit</Button>
                </GuestWrapper>
            </Page>
        </Main>
    )
}


GuestList.getInitialProps = async () => {
    try {
        const response = await axios.get(`${API_HOST}/guests`)
        return { guestList: response.data }
    } catch (e) {
        return { guestList: [] }
    }
}


export default GuestList;
