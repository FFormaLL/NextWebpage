import Page from '~/components/Page'
import Button from '~/components/Buttons/Button'
import axios from 'axios'
import { useState } from 'react';
import styled from 'styled-components'
import { API_HOST } from '~/config';

const GuestWrapper = styled.div`
    width: 320px;
    margin: 0 auto;

    h3 {
        font-size: 32px;
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
        height: 400px;
        li {
            text-align: center;
            font-size: 32px;
            color: #72DB24;
            font-family: Brush Script MT, cursive;
        }
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



    return (
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
