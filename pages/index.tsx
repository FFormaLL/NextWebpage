import Link from 'next/link'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatcher, useMedia } from '~/hooks'
import { ColorScheme, GlobalState } from '~/store'
import { ThemeProps } from '~/styles/theme'
import Page from '~/components/Page'
import Clock from '~/components/Clock'

const WrapperWelcome = styled.div`
  position: relative;
  text-align: center;
  padding: 0px 62px;
  height: 80vh;

  h1 {
    font-size: 64px;
    margin-bottom: 20px;
  }
`

const Card = styled.div(({ theme }:ThemeProps) => `
  cursor: pointer;
  font-size: 15px;
  display: inline-block;
  width: 15%;
  min-width: 180px;
  margin: 0.5em;
  height: 40px;
  line-height: 40px;
  border: 1px solid ${theme.colors.fgLight};
  border-radius: 0.5em;
  background: rgba(0, 0, 0, 0.30);
`)

const IndexPage = () => {
  const { isMobile, isTablet } = useMedia()
  const globalState = useSelector((s:GlobalState) => s)
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
      <WrapperWelcome>
        <h1>Welcome! 👋</h1>
        <h3>
          <Clock />
        </h3>
        <Card onClick={toggleUserSim}>
          Log {globalState.authenticatedUser ? 'out' : 'in'}
        </Card>
        <Card onClick={switchColorScheme}>
          {globalState.colorScheme === ColorScheme.Dark ? 'Light' : 'Dark'} 
        </Card>
        <Card>
           {
            isMobile ? 'Mobile'
              : isTablet ? 'tablet' : 'Desktop'
          } 
        </Card>
        <Link href="videos">
          <Card>
            Clips
          </Card>
        </Link>
      </WrapperWelcome>
    </Page>
  )
}

export default IndexPage
