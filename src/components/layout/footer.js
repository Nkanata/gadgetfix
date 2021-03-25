import React from "react";
import './footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faPinterest, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
//import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import home from '../../assets/images/home.png'
import about from '../../assets/images/about.png'
import contact from '../../assets/images/contact.png'
import repair from '../../assets/images/wrench.png'
import shop from '../../assets/images/store.png'

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer>
            <div className="bottom_nav">
                <div>

                    <nav className="navbar navbar-dark bg-dark">
                        <ul className="bottom_nav_links">
                            <li><Link to="/"><img src={home} alt="Home"/><span>Home</span></Link></li>
                            <li><Link to="/Shop"><img src={shop} alt="Shop"/><span>Shop</span></Link></li>
                            <li><Link to="/Repairs"><img src={repair} alt="Repairs"/><span>Repairs</span></Link></li>
                            <li><Link to='/Contact'><img src={contact} alt="Contact"/><span>Contact</span></Link></li>
                            <li><Link to='/About'><img src={about} alt="About"/><span>About</span></Link></li>
                        </ul>

                    </nav>
                </div>
            </div>

            <div className="container ">
                <div className="footer_title">
                    <h3>Gadget Fix Kenya</h3>
                </div>

                <div className="contact_details">
                    <div>

                        <div className="call_us">Talk to Us:
                            <p> +254 711 106 949.</p>

                            <div>Mail us:</div>
                            <p>thegadgetfix@co.ke</p>
                        </div>
                    </div>

                    <div className="find_us">
                        <h3>Find Us</h3>
                        <p>Junction Mall, Ngong Rd</p>
                        <p>Nairobi, Kenya.</p>
                    </div>
                </div>

                <div className="social_list">
                    <ul>
                        <li><Link to="#"><i aria-hidden="true"><FontAwesomeIcon
                            icon={faInstagram}/></i></Link></li>
                        <li><Link to="#"><i aria-hidden="true"><FontAwesomeIcon
                            icon={faFacebook}/></i></Link></li>
                        <li><Link to="#"><i aria-hidden="true"><FontAwesomeIcon
                            icon={faPinterest}/></i></Link></li>
                        <li><Link to="#"><i aria-hidden="true"><FontAwesomeIcon
                            icon={faWhatsapp}/></i></Link></li>
                        <li><Link to="#"><i aria-hidden="true"><FontAwesomeIcon icon={faTwitter}/></i></Link>
                        </li>
                    </ul>
                </div>

                <div className="copyright">
                    <div>&copy; Gadget Shop kenya</div>
                    <div>All Rights Reserved {date}.</div>
                </div>

            </div>
        </footer>)
};

export default Footer;