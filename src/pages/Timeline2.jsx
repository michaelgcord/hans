// import { useState, useEffect, useRef } from "react"

// const Timeline = () => {
//     /**
//      * 5. Reintroduce dots and milestones
//      */
//     const [isDragging, setIsDragging] = useState(false)
//     const [startX, setStartX] = useState(0)
//     const [scrollLeft, setScrollLeft] = useState(0)
//     const scrollRef = useRef(null)
//     const things = [1, 2, 3, 4, 5]

//     useEffect(() => {
//         const trackMouse = (e) => {
//             if (!isDragging) {return}
//             const x = e.pageX - scrollRef.current.offsetLeft
//             const scroll = x - startX
//             scrollRef.current.scrollLeft = scrollLeft - scroll
//             console.log(scrollRef.current.scrollLeft)
//         }

//         window.addEventListener('mousemove', trackMouse)
//         return () => {
//             window.removeEventListener('mousemove', trackMouse)
//         }
//     }, [isDragging])  

//     useEffect(() => {
//         const mouseup = () => {
//             setIsDragging(false)
//         }
//         window.addEventListener('mouseup', mouseup)
//         return () => { 
//             window.removeEventListener('mouseup', mouseup)
//         }        
//     }, [])

//     const handleMouseDown = (e) => {
//         setIsDragging(true)
//         setStartX(e.pageX - scrollRef.current.offsetLeft)
//         setScrollLeft(scrollRef.current.scrollLeft)
//     }

//     return (
//         <div className="timeline-container">
//             <div className="timeline-title">HISTORY of HANS</div>
//             <div ref={scrollRef} className="timeline-box">
//                 <div className="timeline-line-container">
//                     <div className="timeline-line">
//                         <div className="timeline-card-container unselectable">
//                             <div className="timeline-dot"/>
//                             <div className="timeline-card down"></div>
//                         </div>
//                         <div className="timeline-card-container unselectable">
//                             <div className="timeline-dot"/>
//                             <div className="timeline-card up"></div>
//                         </div>
//                         <div className="timeline-card-container unselectable">
//                             <div className="timeline-dot"/>
//                             <div className="timeline-card down"></div>
//                         </div>
//                         <div className="timeline-card-container unselectable">
//                             <div className="timeline-dot"/>
//                             <div className="timeline-card up"></div>
//                         </div>
//                         <div className="timeline-card-container unselectable">
//                             <div className="timeline-dot"/>
//                             <div className="timeline-card down"></div>
//                         </div>                                                                                            
//                     </div>
//                 </div>
//             </div>
//             <div
//                 className="timeline-drag" 
//                 onMouseDown={handleMouseDown} 
//             />
//         </div>
//     )
// }

// export default Timeline