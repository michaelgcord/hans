import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-title unselectable">HXNS</div>
            <div className="homepage-collage-container">
                <div className="homepage-center-piece"/>
                <div className="homepage-photo-1">1</div>
                <div className="homepage-photo-2">2</div>
                <div className="homepage-photo-3">3</div>
                <div className="homepage-photo-4">4</div>
                <div className="homepage-photo-5">5</div>
                <div className="homepage-photo-6">6</div>
                <div className="homepage-photo-7">7</div>
                <div className="homepage-photo-8">8</div>
                <div className="homepage-photo-9">9</div>
                <div className="homepage-photo-10">10</div>
                <div className="homepage-photo-11">11</div>
                <div className="homepage-photo-12">12</div>
                <div className="homepage-photo-13">13</div>
            </div>
            <div className="homepage-sub-header">
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/timeline">TIMELINE</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/releases">RELEASES</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/events-special">EVENTS/SPECIAL</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/misc-blog">MISC/BLOG</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage