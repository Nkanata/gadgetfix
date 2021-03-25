import React, {Component} from "react";

import './index.css'

import s20 from "../assets/images/galaxy-s20_models_art.jpg"
import iphoneX1 from "../assets/images/apple_card__eta2gejb8rgy_large.jpg"
import oppo from "../assets/images/Banner PC.jpg"
import shop from "../assets/images/galaxy-s20_highlights_battery.jpg"
import repair from "../assets/images/repair.jpg"
import {Link} from "react-router-dom";


class Home extends Component {
    render() {

        return(
            <div className="container caro">
                <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"/>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Galaxy S20</h5>
                                <p className="first_car">Our Shop Got The Latest and The Best Deals</p>
                            </div>
                            <img src={s20} className="d-block w-100" alt="..."/>

                        </div>
                        <div className="carousel-item">
                            <img src={iphoneX1}   className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="second_car">Apple</h5>
                                    <p className="second_car">Iphones, Ipads, MacBooks....You Name It</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={oppo} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Oppo</h5>
                                    <p className="third_car">Latest Oppo Series.</p>
                                </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className=" container latest">
                    <div className="context_wrapper">
                        <div className="card-title shopTitle">

                            <h2>Best Gadget Shop</h2>
                        </div>

                        <div className="desci">
                        <p>
                            Lots to Love
                            <br/>
                            Less to Spend</p>

                        <Link to="/Shop" className="button">Buy</Link>
                        </div>
                    </div>

                    <div className="image">
                        <img src={shop} alt="Shop"/>
                    </div>

                </div>

                <div className="repair_sector container">
                    <div className="repair_image">
                        <img src={repair} alt="Repair Shop"/>
                    </div>

                    <div className="repairTitle card-title">
                        <h3>Repair Shop</h3>

                        <div className="rep_desci">
                        <p>Highly experienced & The Best Engineers
                        <br/>
                        At your Service.
                        </p>

                        <Link to="/Repairs" className="button">Go</Link>
                        </div>
                    </div>

                </div>

                <div className="map">
                    <div className="mapTitle">
                        <h3>Visit Us</h3>
                    </div>
                    <div className="map-box">
                        <iframe
                            title="Google map to our physical location"
    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1021332.0693280459!2d36.656973980781096!3d-0.6283484864300785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f1128f644b8b1%3A0xf8d0f14ff7f6ecef!2sThe%20Gadget%20Shop%20Kenya%2C%20Junction%20Mall%2C%20Ngong%20Rd%2C%20Nairobi!3m2!1d-1.3082292!2d36.7330592!5e0!3m2!1sen!2ske!4v1593098104454!5m2!1sen!2ske"
    width="600px" height="450px" frameBorder="0" style={{border: 0}} allowFullScreen=""
    aria-hidden="false" tabIndex="0"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;