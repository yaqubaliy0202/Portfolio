import React from "react";
import "./about.css"
import ME from "../../assets/Me3.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
    return (
        <section id={"about"}>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about__image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className={"about__icon"}/>
                            <h5>Experience</h5>
                            <small> 9+ Month  Study</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className={"about__icon"}/>
                            <h5>Friends</h5>
                            <small>20+ Friends</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className={"about__icon"}/>
                            <h5>Project</h5>
                            <small>None</small>
                        </article>
                    </div>
                    <p>
                        Knowing the word count of a text can be important. For example, if an author has to write a
                        minimum or maximum amount of words for an article, essay, report, story, book, paper, you name
                        it. WordCounter will help to make sure its word count reaches a specific requirement or stays
                        within a certain limit.
                    </p>
                    <a href="#contact" className={"btn btn-primary"}> Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About;