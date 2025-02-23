import Card from "./timeline/Card"

const Timeline = () => {
    const spotify = <iframe src="https://open.spotify.com/embed/track/7CgGaeMSlcsZGimw32JAOC?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    const soundcloud =  <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339756151&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

    return (
        <div className="timeline-container">
            <div className="timeline-title">History of Hans</div>
            <div>
                <div className="timeline-line">
                    <Card direction={'left'} content={spotify}/>
                    <Card direction={'right'} content={soundcloud}/>
                    <Card direction={'left'}/>
                    <Card direction={'right'}/>
                </div>
            </div>
        </div>
    )
}

export default Timeline