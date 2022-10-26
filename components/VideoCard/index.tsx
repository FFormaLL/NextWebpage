import styled from 'styled-components'
import Wrapper from './Wrapper'


export default function VideoCard(props) {
  return (
    <Wrapper>
      <div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <iframe
          src={`https://www.youtube.com/embed/${props.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </Wrapper>
  );
}

