import Link from 'next/link'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatcher, useMedia } from '~/hooks'
import { ColorScheme, GlobalState } from '~/store'
import Page from '~/components/Page'
import Clock from '~/components/Clock'
import Button from '~/components/Buttons/Button'
import axios from 'axios'
import Stars from '~/components/Stars/star'


const WrapperWelcome = styled.div`
  position: relative;
  text-align: center;
  padding: 0px 62px;
  height: 80vh;
`

const IndexPage = ({ price }) => {
  console.log(price)
  const globalState = useSelector((s: GlobalState) => s)
  const { setJwt, setUser, switchColorScheme } = useDispatcher()
  const toggleUserSim = () => {
    if (globalState.authenticatedUser) {
      setJwt(null)
      setUser(null)
    } else {
      setJwt('<jwt>')
      setUser({
        email: 'dev@example.com',
        username: 'JustAnotherDev'
      })
    }
  }
  return (
    <Page title="Home">
      <>
        <Stars>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </Stars>
        <WrapperWelcome>
          <h1>Welcome! 👋</h1>
          <h3>
            <Clock />
            💲{price.toFixed(4) || 1}
          </h3>
          <Button onClick={toggleUserSim}>
            Log {globalState.authenticatedUser ? 'out' : 'in'}
          </Button>
          <Button onClick={switchColorScheme}>
            {globalState.colorScheme === ColorScheme.Dark ? 'Light' : 'Dark'}
          </Button>
          <Link href="clips">
            <Button>
              Clips
            </Button>
          </Link>
          <Link href="guests">
            <Button>
              Sign my website here!
            </Button>
          </Link>
          <Link href="chatroom">
            <Button>
              Chatroom *WIP*
            </Button>
          </Link>
          <Link href="todo">
            <Button>
              Todo *WIP*
            </Button>
          </Link>
        </WrapperWelcome>
      </>
    </Page>
  )
}

IndexPage.getInitialProps = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/dextools")
    return { price: data }
  } catch (e) {
    return { price: -1 }
  }
}

export default IndexPage
