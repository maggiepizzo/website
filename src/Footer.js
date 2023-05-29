import './App.css';
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <p className='footerText'>Contact Me</p>
             <a 
                className='footerIcon'
                href='https://www.linkedin.com/in/maggie-pizzo/' 
                target="_blank"
                rel="noreferrer">
                   {<FaLinkedin/>}
            </a>
            <a 
                className='footerIcon'
                href='https://github.com/maggiepizzo' 
                target="_blank"
                rel="noreferrer">
                   {<FaGithub/>}
            </a>
            <a 
                className='footerIcon'
                href='mailto:maggie.pizzo@gmail.com' 
                target="_blank"
                rel="noreferrer">
                   {<HiOutlineMail/>}
            </a>
        </div>
    )
}

export default Footer