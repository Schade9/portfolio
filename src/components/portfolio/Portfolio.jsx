import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
import IMG3 from '../../assets/Fyyur.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT US THE IMAGES IN PRODUCTION

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'E-commerce website with Django',
        github: 'https://github.com',
        demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Glovo clone app with Flutter and Dart',
        github: 'https://github.com',
        demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Fyyur: Artist Booking site with Flask',
        github: 'https://github.com/Schade9/Fyyur',
        demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: 'Maintaining tasks and tracking progress',
    //     github: 'https://github.com',
    //     demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    // },
    // {
    //     id: 5,
    //     image: IMG5,
    //     title: 'Charts templates & infographics in Figma',
    //     github: 'https://github.com',
    //     demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    // },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: 'Charts templates & infographics in Figma',
    //     github: 'https://github.com',
    //     demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        {/* <h5>My Recent Work</h5> */}
        <br></br>
        <br />
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {/* loop through the data */}
            {
                data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio
