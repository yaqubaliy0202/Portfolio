import React from "react";
import "./portfolio.css"
import NETFLIX from "../../assets/Netflix.png"
import MAXWAY from "../../assets/Maxway.png"
import LINKEDIN from "../../assets/Linkedin1.png"
import YOUTUBE from "../../assets/youtube.png"

const data=[
    {
        id:1,
        image:NETFLIX,
        title:"Clone Netflix",
        github:"https://github.com/yaqubaliy0202/Clone_Project",
        demo:"https://clonee-netflix.netlify.app"
    },
    {
        id:2,
        image:MAXWAY,
        title:"Fast food Maxway",
        github:"https://github.com/yaqubaliy0202/React_Project",
        demo:"https://maxway02.netlify.app"
    },
    {
        id:3,
        image:YOUTUBE,
        title:"Clone Youtube",
        github:"https://github.com/yaqubaliy0202/Clone_Youtube",
        demo:"https://clone-youtube02.netlify.app"
    },
    {
        id:4,
        image:LINKEDIN,
        title:"Clone Linkedin",
        github:"https://github.com",
        demo:"https://clone-linkedin02.netlify.app"
    },
    // {
    //     id:5,
    //     image:LINKEDIN,
    //     title:"Javascript o'yinlari ",
    //     github:"https://github.com",
    //     demo:"https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
    // },
    // {
    //     id:6,
    //     // image:IMG6,
    //     title:"Crypto Currency Dashboard & Financial Visualization",
    //     github:"https://github.com",
    //     demo:"https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
    // },
]


const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id,image,title, github,demo})=> {
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className={"btn"} target={"_blank"}>Github</a>
                                    <a href={demo}className={"btn btn-primary"} target={"_blank"}>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Portfolio;