import styled from 'styled-components'

const Wrapper = styled.div`
.gpuRTX {
    border-radius: 0 0 10px 10px;
}

.gpuRTX h2 {
    padding: 0 5px 0 5px;
    text-align: center;
}

.gpuRTX p {
    padding: 0 10px 0 10px;
    text-align: center;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    background: #000;
    text-align: right;
}


@media screen and (min-width: 800px) {
    .gpuRTX {
        width: 700px;
        height: 500px;

    }

    .gpuRTX iframe {
        height: 75%;
    }
}
`
const WrapperParent = ({ children }) => (
  <Wrapper>
    <div className="gpuRTX">{children}</div>
  </Wrapper>
)

export default WrapperParent;
