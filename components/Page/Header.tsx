import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { GlobalState } from '~/store'
import { ThemeProps } from '~/styles/theme'
import ThemeSwitch from '../ThemeSwitch'

const HeaderWrapper = styled.header(({ theme }: ThemeProps) => `
  padding: 10px;
  position: relative;

  h1 {
    display: inline-block;
  }

  .brand-logo {
    display: inline-block;
    width: 32px;
    border-radius: 0%;
    border: 1px solid ${theme.colors.white};
  }
  .brand-name {
    text-align: center;
    display: inline-block;
    font-size: 30px;
    font-family: serif;
    letter-spacing: 5px;
    padding: 0 10px;
    animation: colorRotate 3s linear 0s infinite;
  }
  @keyframes colorRotate {
    from {
        color: #ff6666;}10% {color: #ff00bf;}20% {color: #7300ff;}30% {color: #0800ff;}40% {color: #0073ff;}50% {color: #00bbff;}60% {color: #00ff7b;}70% {color: #00ff22;}80% {color: #6dff33;}90% {color: #ffff00;}100% {color: #ff8c66;}
}
  .brand-name, .theme-switch {
    position: relative;
    top: -40px;
  }
  .theme-switch {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  nav {
    position: absolute;
    top: 20%;
    right: 40px;
    transform: translate(0, -50%);
    padding: 32px;
  }


`)

const Divider = styled.span`
  padding: 16px;
  ::before {
    content: "|";
  }
`

const GuestAccountNav = () => {
  return (
    <>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Divider />
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </>
  )
}

const UserAccountNav = ({ username }) => {
  return (
    <>
      <Link href="/me">
        <a>{username}</a>
      </Link>
      <Divider />
      <Link href="/logout">
        <a>Logout</a>
      </Link>
    </>
  )
}

const Header = () => {
  const user = useSelector((s: GlobalState) => s.authenticatedUser)
  return (
    <HeaderWrapper>
      <h1>
        <Link href="/">
          <a>
            <Image className="brand-logo" width="100" height="100" src="/icons/formal.png" alt="Brand Logo" />
            <span className="brand-name">FormaL</span>
          </a>
        </Link>
      </h1>
      <span className="theme-switch">
        <ThemeSwitch />
      </span>
      <nav>
        {
          !user
            ? <GuestAccountNav />
            : <UserAccountNav username={user.username} />
        }
      </nav>
    </HeaderWrapper>
  )
}

export default Header
