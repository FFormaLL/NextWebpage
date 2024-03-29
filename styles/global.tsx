import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProps } from './theme'

const GlobalStyle = createGlobalStyle(({ theme }: ThemeProps) => `
  html {
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    color: ${theme.colors.fgPrimary};
    font-family: ${theme.fonts.roboto};
  }
  h1 {
    font-size: 64px;
    margin-bottom: 20px;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    line-height: inherit;
  }
`)

const PreventBodyScrollStyles = createGlobalStyle`
  html, body {
    height: 100%;
    overflow: hidden;
  }
`

const Main = styled.main`
  height: 100%;
  min-height: calc(100vh - 150px);
`

export { Main, GlobalStyle, PreventBodyScrollStyles }
