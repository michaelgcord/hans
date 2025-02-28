import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Card = ({direction, embed, title, date, height, description="", check}) => {
    const [show, setShow] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const toggle = () => {
        setShow(!show)
    }
    const coverHeight = height + 30

    useEffect(() => {
        if (check) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [check])

    // console.log(description)

    return (
    <div className="card-item ">
        <div onClick={toggle} className="card-dot"/>
        <div className="card-line" style={{
            left: direction === 'left'
                ? "13%"
                : "52%"
        }}/>
        <div className="card-content" style={{
            height: height,
            left: direction === 'left'
                ? "-223%"
                : "87%"
        }}>
            <div>{embed}</div>
            <strong className="card-title">{title}</strong>
            <div className="card-date">{date}</div>
            <div className="card-description">{description}</div>
            <div style={{
                display: 'flex',
                width: '100%'
            }}>
                <div className="card-spacer"></div>
                <Link to="/releases" 
                    onMouseEnter={() => {setIsHovering(true)}} 
                    onMouseLeave={() => {setIsHovering(false)}} 
                    className="card-content-dot">
                    {isHovering ? 
                        <div className="card-hover">
                            Releases
                        </div>
                        : <></>
                    }
                </Link>
            </div>
        </div>
        <div className="card-cover" style={{
            height: coverHeight,
            left: direction === 'left'
                ? show
                    ? "-497%"
                    : "-225%"
                : show
                    ? "324%"
                    : "52%"
        }}/>
    </div>
    )
}

export default Card