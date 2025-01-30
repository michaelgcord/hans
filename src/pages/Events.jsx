const Events = () => {
    const content = [
        {
            title: 'Debut DJ Set at F8',
            date: 'Dec 10, 2016',
            img: 'an image',
            txt: 'After building a fan base through regular SoundCloud releases and being featured on Soulection Radio, I was invited to open for Flamingosis at San Francisco’s F8. One million thank you’s to Roe and Jackson who taught me the basics of DJing a week before the show. I would not be here without them.'
        },
        {
            title: 'Music Director and DJ for TOMBOGO @ NYFW 2024',
            date: 'Sep 9, 2024',
            img: 'an image',
            txt: 'TOMBOGO invited me to direct the music and DJ for their 2024 New York Fashion Week runway show at NeueHouse Madison Square. With theme of the SS25 collection being titled “Reverse Engineering”, I worked closely with the brand’s lead designer and creative director in addition to the show’s production team to ensure that the soundscapes during the show aligned with TOMBOGO’s themes of futurism and modularity. I brought on my long-time collaborator and friend Elujay to work on a pre-show drone sound that played while attendees were arriving to the venue. The music during the show was heavily influenced by my recent obsession with techno which I developed while planning a trip to Berlin. I wanted to reflect the themes of the show by keeping music production sharp and in-your-face, yet minimal.'
        },
        {
            title: 'Opening DJ Set for Elujay',
            date: 'Feb 8, 2019',
            img: 'an image',
            txt: 'I played the opening set for the “Elujay & Friends” Show at The New Parish, a Bay Area institution.'
        },
        {
            title: 'title',
            date: 'date',
            img: 'an image',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },        
    ]

    return (
        <div className="events-container">
            <div className="events-main-title">Events </div>
            <div className="events-content-container">
                {content.map((element) => {
                    return (
                        <div className="events-card">
                            <div className="events-image">

                            </div>
                            <div className="events-description">
                                <div className="events-title">{element.title}</div>
                                <div className="events-date">{element.date}</div>
                                <div className="events-txt">{element.txt}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Events