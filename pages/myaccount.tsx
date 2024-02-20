import Page from '~/components/Page'


try {
    // if you get to this line, you are loaded in the browser
    // do stuff here...
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    if (!accessToken) {
        (document.getElementById('login').style.display = 'block');
    }

    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })
        .then(result => result.json())
        .then(response => {
            const { username, discriminator, avatar, id } = response;
            document.getElementById('info').innerText += ` ${username}#${discriminator}`;

            //set the avatar image by constructing a url to access discord's cdn
            document.getElementById("avatar").src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`;
        })
        .catch(console.error);
} catch (e) { }




const template = () => {
    return (
        <Page title="template title">
            <>
                <div id="info">Hoi!</div>
                <img src='' id="avatar" />
                <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=1048062091669553182&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmyaccount&response_type=token&scope=identify">Identify Yourself</a>
            </>
        </Page>
    )
}



export default template;