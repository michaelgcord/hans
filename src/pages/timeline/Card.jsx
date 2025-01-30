import { useState } from "react"

const Card = ({direction}) => {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }

    return (
    <div className="card-item ">
        <div onClick={toggle} className="card-dot"/>
        <div className="card-line" style={{
            left: direction === 'left'
                ? "13%"
                : "52%"
        }}/>
        <div className="card-content" style={{
            left: direction === 'left'
                ? "-223%"
                : "87%"
        }}/>
        <div className="card-cover" style={{
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