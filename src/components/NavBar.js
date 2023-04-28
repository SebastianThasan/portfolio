import "../Styles/NavBarStyles.css"
import "../Styles/Styles.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import resume from ".././InternshipResume.pdf"

const NavBar = () => {
    return (
        <nav className="nav">
            <text>Sebastian Thasan</text>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/AboutMe">About Me</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/SebastianThasan" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sebastian-thasan/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar