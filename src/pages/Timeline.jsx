import { useState } from "react";
import Card from "./timeline/Card"
import { Switch } from "@radix-ui/themes";
import NavMenu from "./components/NavMenu";

// blue: #015bef - experiences
// orange: #f97700 - syncs/ads

const Timeline = () => {
    const red = "#ff000"     // releases
    const blue = "#015bef"   // experiences
    const orange = "#f97700" // syncs/ads

    const routeReleases = "/releases"
    const nameReleases = "releases"

    const routeExperiences = "/experiences"
    const nameExperiences = "experiences"

    const routeSyncs = "/syncs"
    const nameSyncs = "syncs"


    const data = [
        {
            title: "AACI: Youth In Technology Animated Spots",
            date: "Feb 1, 2022",
            embed: <iframe src="https://player.vimeo.com/video/672501008?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Youth in Technology Animated Spots"></iframe>,
            direction: 'left',
            height: 220,
            dots: [
                {
                    route: '/releases',
                    name: 'releases',
                    color: red
                }
            ]
        },
        {
            title: "RepairPal",
            date: "2021-2023",
            embed: <iframe src="https://player.vimeo.com/video/601989108?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Meet the new RepairPal Estimator"></iframe>,
            direction: 'right',
            height: 220
        },
        {
            title: "whatsitgonnabe",
            date: "November 25, 2018",
            embed: <iframe width="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535492533&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            direction: 'left',
            height: 220
        },
        {
            title: "Porsche - Drive2Extremes: Behind the Scenes #2 - The Driving Force",
            date: "June 18, 2021",
            embed: <iframe width="100%" src="https://www.youtube.com/embed/KqB4dVfbJFs?si=FjCyOAOsQCqvXgh_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
            direction: 'right',
            height: 234
        },
        {
            title: "JEMS!, Elujay & J.Robb - STORMBLUS",
            date: "September 20, 2024",
            embed: <iframe src="https://open.spotify.com/embed/track/45CzTjXCs6MtH5oEFNAu2e?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 220
        },
        {
            title: "Siaira Shawn - Different",
            date: "October 11, 2024",
            embed: <iframe src="https://open.spotify.com/embed/track/6p9vIo0rUf8P6ZDVsn5B0A?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Siaira Shawn - Sleep Better",
            date: "October 11, 2024",
            embed: <iframe src="https://open.spotify.com/embed/track/2lpffYbr7naUYD68eQBilf?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Bazzi - Somewhere In Between",
            date: "May 24, 2024",
            embed: <iframe src="https://open.spotify.com/embed/track/7LBq9YOFtOoSeGFtlrxHEN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Adanna Duru - Ur A Bitch",
            date: "Feb 2, 2023",
            embed: <iframe src="https://open.spotify.com/embed/track/4aZu2npZvVghVTnPxD2uWe?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Cautious Clay - Fishtown",
            date: "August 18, 2023",
            embed: <iframe src="https://open.spotify.com/embed/track/3wi4hGGGZZYvkC0SRTU8cq?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Cautious Clay - Burning Up Slow",
            date: "September 28, 2022",
            embed: <iframe src="https://open.spotify.com/embed/track/7FKt5TmdwOaeBGJcejChUw?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Elujay & HXNS - 1080P",
            date: "August 27, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/2HauR0k2KEwPHKE5HTXQKY?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 233,
            description: "Featured in Hulu’s Reasonable Doubt & Starz’s Run the World",
        },
        {
            title: "Phabo - The Phabo Show (feat. Alex Vaughn)",
            date: "July 16, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/75y79gETt48VW0kz8Jxorg?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Cautious Clay - Karma & Friends",
            date: "April 15, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/1ugvFLfVoBSIyLam35yATm?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Cautious Clay - High Risk Travel",
            date: "June 25, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/7amF28uDwTmWvTovscM5hH?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Cautious Clay & Saba - Strange Love",
            date: "June 1, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/0dgehlr08kKoyl2nG7Dhv4?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Cautious Clay - Why Is Your Clay So Cautious?",
            date: "June 25, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/2QokcoxHFBjJ5WYBzlHUcP?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Salem Ilese - Romeo & Juliet",
            date: "May 21, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/4MJ7iAgcQPrLPto0dePe0R?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Har - Take Off (feat. HXNS)",
            date: "March 11, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/6r0Za4t5XhD7TNCDHz9XDy?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Healy - Everything’s Fine",
            date: "January 13, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/1hQM22L8FSThJB5drLpfQs?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "SIR HANS - LIANA",
            date: "December 19, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/6IEOdEbUDQHuEnFa1igq7P?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Elujay & J.Robb - Lady (feat. Kyle Dion)",
            date: "December 3, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/05jASrXO0rxvbhI1CJRtEz?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Siaira Shawn & HXNS - Islands (HXNS Remix)",
            date: "October 28, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/04uJPwa8HTztqFbR8DPBtb?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Ruel - say it over (feat. Cautious Clay)",
            date: "October 1, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/4jSE5cAaa5rwTyhDSXfwQN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "HXNS & Lucid Monday - okaywegetit",
            date: "September 28, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/2cBQwDBcQjk2m49wzfeFZH?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "LLusion, Cautious Clay & HXNS - Sad4good",
            date: "August 21, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/6iQffhfYAtLKvgyr2flNK7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "James Vincent McMorrow - Headlights",
            date: "May 15, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/30ip6JBD07Pf1eBfHqXosG?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Cautious Clay, Remi Wolf & Sophie Meiers - Cheesin’ (feat. Still Woozy, Claud, Melanie Faye & HXNS)",
            date: "April 22, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/6lIRYe72fn1pf7TNqfI0ul?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 265,
            description: "Charity track with 100% of net proceeds going to The Recording Academy’s MusiCares COVID & LA Fire Relief Funds"
        },
        {
            title: "Cautious Clay, Raedio & Alex Isley - Reaching",
            date: "April 10, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/4eLhCEYdlCTfSUXqUWsYoT?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 233,
            description: "Featured in HBO’s Insecure"
        },
        {
            title: "Kyle Dion - Time Heals, Just Not Quick Enough",
            date: "February 28, 2020",
            embed: <iframe src="https://open.spotify.com/embed/track/6SX6R1LaIIGquncM8UZYS0?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Sophie Meiers - come ovr",
            date: "November 14, 2019",
            embed: <iframe src="https://open.spotify.com/embed/track/01PN1v5FRjaIZsjzK0c6DV?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Berel - Before You Go",
            date: "October 15, 2019",
            embed: <iframe src="https://open.spotify.com/embed/track/1lZwzcyn8sTPnI0Wk5Xh4t?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Sophie Meiers - x-ray vision",
            date: "August 28, 2019",
            embed: <iframe src="https://open.spotify.com/embed/track/10zrF631IEJn7uKmVqGqjB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "E SENS - BOBOS MOTEL",
            date: "July 22, 2019",
            embed: <iframe src="https://open.spotify.com/embed/track/37bA7S1fgKIiplXcmaSKmG?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Jarami - Post Mates (feat. Cautious Clay)",
            date: "July 16, 2019",
            embed: <iframe src="https://open.spotify.com/embed/track/2zMaLos1Y3SF5kkODAG8QW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Elujay - Champagne Galore",
            date: "February 1, 2019",
            embed: <iframe src="https://open.spotify.com/embed/track/4m86x5hD8IHUYsuxiUPbsz?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
        {
            title: "Elujay - Starchild",
            date: "May 11, 2018",
            embed: <iframe src="https://open.spotify.com/embed/track/4Ku4jFPD4J7UxdjG0xpjPf?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 247,
            description: "Featured in Peacock’s Bel Air, Netflix’s Dear White People & USA Network’s Queen of the South"
        },
        {
            title: "Cautious Clay - Blood Type (HXNS Remix)",
            date: "November 16, 2017",
            embed: <iframe src="https://open.spotify.com/embed/track/7CgGaeMSlcsZGimw32JAOC?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 230,
            description: "Featured in Paramount Pictures’ Spontaneous"
        },
        {
            title: "Cautious Clay - Silos (HXNS Remix)",
            date: "November 16, 2017",
            embed: <iframe src="https://open.spotify.com/embed/track/5TAkI1vR0Zatnz0N0hoYpx?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'left',
            height: 218
        },
        {
            title: "Abhi The Nomad & goodboy noah - Terminal",
            date: "December 17, 2021",
            embed: <iframe src="https://open.spotify.com/embed/track/1SbqsL5hQ9oIAM3W0JVLbb?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            direction: 'right',
            height: 218
        },
    ]

    const [check, setCheck] = useState(false)

    const toggleCheck = () => {
        setCheck(!check)
    }

    return (
        <div className="timeline-container">
            <NavMenu></NavMenu>
            <div className="timeline-title">History of Hans</div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Switch size="1" onCheckedChange={toggleCheck} />
                <div style={{paddingLeft: '13px', fontSize: '14px'}}>Gimme everything</div>
            </div>
            <div>
                <div className="timeline-line">
                    {data.map((item) => {
                        return (
                            <Card 
                                direction={item.direction} 
                                embed={item.embed} 
                                title={item.title} 
                                date={item.date}
                                height={item.height}
                                description={item.description}
                                check={check}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline