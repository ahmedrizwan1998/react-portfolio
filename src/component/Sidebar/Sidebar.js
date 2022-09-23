import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import logoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logoS} alt='logo'/>
                <p>Slade</p>
            </Link>
            <div className='nav-link-div'>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink className="about-link" exact="true" activeclassname="active" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink className="contact-link" exact="true" activeclassname="active" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </div>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/ahmedrizwan1998' >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/ahmedrizwan1998' >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' 
                    href='https://www.youtube.com/watch?v=bmpI252DmiI&ab_channel=freeCodeCamp.org' >
                        <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' 
                    href='https://www.youtube.com/watch?v=bmpI252DmiI&ab_channel=freeCodeCamp.org' >
                        <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;