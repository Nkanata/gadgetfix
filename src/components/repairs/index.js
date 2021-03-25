import React, {Component} from "react";
import maintenance from '../../assets/images/maintenance.png'
import mobile_repair from '../../assets/images/mobile-phone-2510529_960_720.jpg'
import comp_repair from '../../assets/images/imac-338988_960_720.jpg'
import './repairs.css'
import PhoneRepairs from "./PhoneRepairs";
import {Link} from "react-router-dom";

class Repairs extends Component {
    componentDidUpdate(prevProps) {
        if (
            this.props.location.pathname !== prevProps.location.pathname
        ) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="intro_image">
                        <img src={maintenance} alt="Maintenance"/>
                    </div>

                    <div className="phone_repairs">
                        <div className="phone_repair_details ">
                            <div className="phone_title">
                                <h2>Phone Repairs</h2>
                            </div>
                            <div className="repair_detail">
                                <br/>
                                We do Smartphone Repairs,
                                <br/>
                                Screen Replacements,
                                <br/>
                                Phone Motherboard Replacements,
                                <br/>


                            </div>
                            <div className="phone_repair_link"><Link to="/PhoneRepairs" className="button"> Go </Link>
                            </div>
                        </div>
                        <div className="phone_repair_image">
                            <img src={mobile_repair} alt="Mobile Phone Repairs"/>
                        </div>

                    </div>

                    <div className="comp_repairs">
                        <div className="comp_repair_image">
                            <img src={comp_repair} alt="Computer Repairs"/>
                        </div>

                        <div className="comp_repair_details">
                            <div className="comp_title">
                                <h2>Computer Repairs</h2>
                            </div>
                            <div className="comp_details">
                                We also do computer repairs.
                                <br/>
                                Hard disk replacement
                                <br/>
                                Computer MotherBoards Replacements
                                <br/>
                                R.A.M replacement
                                <br/>
                                Windows and Operating System Issues
                                <br/>
                                I.T support
                                <br/>
                            </div>
                        </div>

                    </div>

                    <div className="call">
                        <p>Call us Or Visit Our Shop.</p>
                    </div>

                </div>
            </>
        )
    }
}

export default Repairs