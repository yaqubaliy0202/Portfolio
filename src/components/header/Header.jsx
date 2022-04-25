import React from "react";
import "./header.css"
import CTA from "./CTA.jsx"
import Me from "../../assets/Me2.png"
import HeaderSocials from "./HeaderSocials.jsx";

const Header = () => {
    return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>YaqubAliy Majamolov</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
                <img src={Me} alt="me"/>
            </div>
            <a href="#contact" className={"scroll__down"}>Scroll Down</a>
        </div>
    </header>
    )
}
export default Header;