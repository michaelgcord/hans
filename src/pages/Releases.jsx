import NavMenu from "./components/NavMenu";

const Releases = () => {
    return (
        <div className="releases-container">
            <NavMenu></NavMenu>
            <div className="releases-main-title">Discography</div>
            <div className="releases-content">
                <div className="releases-item">
                    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EFHfs6M9G6RmO?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="releases-item">
                    <iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1975364548&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Releases