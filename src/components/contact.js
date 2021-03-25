import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="contact_form">
                    <h2>Send Us A Message</h2>

                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name"/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name"/>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control" placeholder="Phone Number"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Contact