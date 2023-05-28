import './App.css';
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";

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
                href='mailto:maggie.pizzo@gmail.com' 
                target="_blank"
                rel="noreferrer">
                   {<TfiEmail/>}
            </a>
        </div>
    )
}

export default Footer