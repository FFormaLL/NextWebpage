import styled from 'styled-components'
import { ThemeProps } from '~/styles/theme'

const Button = styled.button(({ theme }:ThemeProps) => `
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
  text-align: center;
`)

export default Button;