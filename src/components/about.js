import React, {Component} from "react";
import thumbs_up from '../assets/images/like-2195024_960_720.png'
import engineering from '../assets/images/key-3314304_960_720.png'

class About extends Component {
    render() {
        return (
            <div className="container about_us">
                <div className="quality">
                    <div className="quality_img">
                    <img src={thumbs_up} alt="Thumbs Up"/>
                    </div>
                    <p>We are dedicated to offer Quality services and Products at affordable prices.</p>
                </div>
                <div className="engineering">
                    <div className="engineering_img">
                        <img src={engineering} alt="Great Engineers"/>
                    </div>
                    <p>We got a well trained Engineering Team, and we do phone repairs and laptop repairs too.</p>

                </div>
                <div className="service">
                    Our customer service is excellent according to reviews posted by satisfied customers,
                    take a look:

                </div>
                <div className="reviews">
                    <div className="review">
                        <div className="card">
                            <div className="card-header">

                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                                        Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="card">
                            <div className="card-header">

                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                                        Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="card">
                            <div className="card-header">

                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                                        Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="about-map-box ">

                </div>
            </div>
        )
    }
}

export default About