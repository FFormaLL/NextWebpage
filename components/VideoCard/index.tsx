import Wrapper from './Wrapper'

interface VideoProps {
  name: string
  desc: string
  url: string
}

export default function VideoCard(props: VideoProps) {
  return (
    <Wrapper>
      <div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        {
          props.url.includes("youtube.com") // checks if url passed is youtube link
            ? (
              <iframe
                className="youtube"
                src={props.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            )
            : (
              <video className="imgur" width="320" height="240" controls>
                <source src={props.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
        }
      </div>
    </Wrapper>
  );
}

