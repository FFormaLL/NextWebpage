import Page from '~/components/Page'
import VideoCard from '~/components/VideoCard'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Videos = () => {
    const ytvideos = [
        {
            name: `My first youtube video`,
            desc: `Double boom! Rocket league classic`,
            url: `https://www.youtube.com/embed/LaUQTVwXOnU`
        },
        {
            name: `Currently trying to learn this skill!`,
            desc: `Learn how to flip reset musty flick!`,
            url: `https://www.youtube.com/embed/wfRd18xWiz4`
        },
        {
            name:`Freestyle`,
            desc:`Flip Reset Musty aka something Dan cant do`,
            url:`https://i.imgur.com/XiGX9Iq.mp4`
        }
]

    return (
        <Page title="RL CLips">
            <Wrapper>
                {
                    ytvideos.map(video => (
                        <VideoCard
                            name={video.name}
                            desc={video.desc}
                            url={video.url}
                        />
                    ))
                }
            </Wrapper>
        </Page>
    )
}

Videos.getInitialProps = async () => {
    return {}
}

export default Videos;
