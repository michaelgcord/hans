import { Link } from 'react-router-dom'
import Collage from './Collage'
import photo from '../../assets/images/4.png'

const Homepage = () => {
    //todo, add a space after jajabooboo

    const quotes = [
        "Like a drake and josh theme song... I found a way. ",
        "Bad bitches love Hans. ",
        "Jajabooboo.",
    ]

    return (
        <>
        <div className="homepage-overlay">
            <div className="homepage-title unselectable">
                <span className="title">
                {quotes.map((element) => {
                    return (
                        <span className='pre'>{element}</span>
                    )
                })}
                </span>
                <span className="title">
                {quotes.map((element, index) => {
                    return (
                        <span key={index} className='pre'>{element}</span>
                    )
                })}
                </span>                
            </div>
            <div className='homepage-filler'></div>
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
                    <Link to="/events">EVENTS</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/misc-blog">MISC/BLOG</Link>
                </div>
            </div>
        </div>   
        <Collage/>
        </>
    )
}

export default Homepage