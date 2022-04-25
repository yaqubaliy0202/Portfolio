import React from "react";
import "./footer.css"
import {AiFillLinkedin} from "react-icons/ai"
import {SiUpwork} from "react-icons/si"
import {GrInstagram} from "react-icons/gr"


const Footer = () => {
    return (
        <footer>
            <a href="#" className={"footer__logo"}>Yaqub_Aliy</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/yaqub-aliy-b7338b232/" target={"_blank"}><AiFillLinkedin/></a>
                <a href="https://www.upwork.com/freelancers/~018e69565081fbe3d6?qpn-profile-completeness=photo"
                   target={"_blank"}><SiUpwork/></a>
                <a href=""><GrInstagram/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; YaqubAliy Majamolov Masaitzoda </small>
            </div>
        </footer>
    )
}
export default Footer;