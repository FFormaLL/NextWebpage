import styled from 'styled-components'

const Wrapper = styled.div`

border-radius: 10px;
border: 1px solid black;
margin: 0 auto 30px;
width: 75vw;
max-width: 750px;
text-align: center;
background: #111;
box-shadow: rgba(50, 50, 93, 0-.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

p {
  margin: 0 auto 20px;
}

h2 {
  margin: 20px auto 0;
  font-size: 1.5em;
  font-weight: bold;
}

.youtube, .imgur {
  height: 42vw;
  width: 100%;
  max-height: 420px;
  border-radius: 0 0 10px 10px;
}

.imgur {
  margin-top: -30px;
}
`
const WrapperParent = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default WrapperParent;
