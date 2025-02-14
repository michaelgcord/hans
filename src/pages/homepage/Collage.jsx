// This is gonna look like ass
import photo1 from '../../assets/images/1.png'
import photo2 from '../../assets/images/2.png'
import photo3 from '../../assets/images/3.png'
import photo4 from '../../assets/images/4.png'
import photo5 from '../../assets/images/5.png'
import photo6 from '../../assets/images/6.png'
import photo7 from '../../assets/images/7.png'
import photo8 from '../../assets/images/8.png'
import photo9 from '../../assets/images/9.png'
import photo10 from '../../assets/images/10.png'
import photo11 from '../../assets/images/11.png'
import photo12 from '../../assets/images/12.png'
import photo13 from '../../assets/images/13.png'
import photo14 from '../../assets/images/14.png'
import photo15 from '../../assets/images/15.png'
import photo16 from '../../assets/images/16.png'
import photo17 from '../../assets/images/17.png'
import photo18 from '../../assets/images/18.png'
import photo19 from '../../assets/images/19.png'
import photo20 from '../../assets/images/20.png'
import photo21 from '../../assets/images/21.png'
import photo22 from '../../assets/images/22.png'
import photo23 from '../../assets/images/23.png'
import photo24 from '../../assets/images/24.png'
import photo25 from '../../assets/images/25.png'
import photo26 from '../../assets/images/26.png'
import { useEffect } from 'react'

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }


const selectRandomPhoto = () => {
    const photos = [photo1, photo2, photo3, photo4, photo5,
        photo6, photo7, photo8, photo9, photo10, photo11,
        photo12, photo13, photo14, photo15, photo16,
        photo17, photo18, photo19, photo20, photo21,
        photo22, photo23, photo24, photo25, photo26
    ]
    const number = getRandomInt(0, 26)
    return photos[number]
}

const Collage = () => {
    const photo = selectRandomPhoto()

    useEffect(() => {
        scrollTo(20, 500)
    }, [])

    return (
        <div className='homepage-collage'>
            <div className='collage-main'>
                <img src={photo} height={600}  alt="main" />
            </div>
        </div>            
    )
}

export default Collage