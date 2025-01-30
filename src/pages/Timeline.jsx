import Card from "./timeline/Card"

const Timeline = () => {
    return (
        <div className="timeline-container">
            <div className="timeline-title">History of Hans</div>
            <div>
                <div className="timeline-line">
                    <Card direction={'left'}/>
                    <Card direction={'right'}/>
                    <Card direction={'left'}/>
                    <Card direction={'right'}/>
                </div>
            </div>
        </div>
    )
}

export default Timeline