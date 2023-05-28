const Video = ({src}) => {
    return (
        <video width controls style={{width: '100%'}}>
            <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>
    )
}

export default Video