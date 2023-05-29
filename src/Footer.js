import './App.css';
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const FooterIcon = ({url, icon}) => {
    return (
        <a 
            className='footerIcon'
            href={url}
            target="_blank"
            rel="noreferrer">
            {icon}
        </a>
    )
}

const Footer = () => {
    return (
        <div className='footer'>
            <p className='footerText'>Contact Me</p>
            <FooterIcon url='https://www.linkedin.com/in/maggie-pizzo/' icon={<FaLinkedin/>}/>
            <FooterIcon url='https://github.com/maggiepizzo' icon={<FaGithub/>} />
            <FooterIcon url='mailto:maggie.pizzo@gmail.com' icon={<HiOutlineMail/>}/>
        </div>
    )
}

export default Footer