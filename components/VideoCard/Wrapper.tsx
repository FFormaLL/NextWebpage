import styled from 'styled-components'

const Wrapper = styled.div`

    border-radius: 0 0 10px 10px;

h2 {

    text-align: center;
}

p {

    text-align: center;
}


    



@media screen and (min-width: 800px) {

        width: 700px;
        height: 500px;


iframe {
        height: 100%;
    }
}
`
const WrapperParent = ({ children }) => (
  <Wrapper>
    <div className="gpuRTX">{children}</div>
  </Wrapper>
)

export default WrapperParent;
