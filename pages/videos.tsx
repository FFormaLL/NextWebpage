import Page from '~/components/Page'
import VideoCard from '~/components/VideoCard'


const Videos = () => {
    const videos = [
        {
            name: `My first youtube video`,
            desc: `Double boom! Rocket league classic`,
            id: `LaUQTVwXOnU`
        },
        {
            name: `Currently trying to learn this skill!`,
            desc: `Learn how to flip reset musty flick!`,
            id: `wfRd18xWiz4`
        }
    ]
    return (
        <Page title="RL CLips">
            <div> {
                videos.map(video => (
                    <VideoCard
                        name={video.name}
                        desc={video.desc}
                        id={video.id}
                    />
                ))
            }
            </div>
        </Page>
    )
}

Videos.getInitialProps = async () => {
    return {}
}

export default Videos;
