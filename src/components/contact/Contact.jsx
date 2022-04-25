import React, {useRef, UseRef} from "react";
import "./contact.css";
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {AiOutlinePhone} from "react-icons/ai"
import emailjs from "emailjs-com"
import {FaTelegram} from "react-icons/fa"

const Contact=()=> {

    const form=useRef()

    const sendEmail=(e)=> {
        e.preventDefault();
        emailjs.sendForm("service_03tsyvp", "template_ifdkk21", form.current, "HG_MGUgyixglWZdQh");
        e.target.reset()
    }


    return(
    <section id={"contact"}>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineMail className={"contact__option-icon"}/>
                    <h4>Email</h4>
                    <h5>yaqubaliy02@gmail.com</h5>
                    <a href="mailto:yaqubaliy02@gmail.com" target={"_blank"}>Send a message</a>
                </article>

                <article className="contact__option">
                    <FaTelegram className={"contact__option-icon"}/>
                    <h4>Messenger</h4>
                    <h5>yaqubaliy02@gmail.com</h5>
                    <a href="@Yaqub007" target={"_blank"}>Send a message</a>
                </article>

                <article className="contact__option">
                    <AiOutlinePhone className={"contact__option-icon"}/>
                    <h4>Contact me</h4>
                    <h5>+998 93 958 57 56</h5>
                    <a href="tel:+998939585756"  target={"_blank"}>Send a message</a>
                </article>
            </div>
        {/*    END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name={"name"} placeholder={"Your Full Name"} required={true}/>
                <input type="email" name={"email"} placeholder={"Your Email"} required={true}/>
                <textarea name="message" rows="7" placeholder={"Your Message"} required={true}></textarea>
                <button type={"submit"} className={"btn btn-primary"}>Send Message</button>
            </form>
        </div>
    </section>
    )
}
export default Contact;