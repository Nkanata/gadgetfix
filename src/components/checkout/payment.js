import React, {Component} from "react";
import mPesa from '../../assets/images/M-Pesa-01(1)/M-Pesa-01.jpg'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Payment extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push('/CheckOut/thanks')
    }

    render() {
        const recipient = this.props.recipient
        const order = this.props.order
        if (order.length === 0) return <Redirect to="/Shop"/>;
        if (recipient.length === 0) return <Redirect to='/CheckOut/form'/>;
        return (
            <React.Fragment>
                <div className="payment">
                    <div>
                        <h3>Payment Methods</h3>
                    </div>
                    <div className="mpesa_title">
                        <h5>Pay Using M-Pesa</h5>
                        <div className="mPesa_logo">
                            <img src={mPesa} alt="Pay using mpesa"/>
                        </div>
                    </div>
                    <div>
                        Enter your phone number
                        <form onSubmit={this.handleSubmit}>
                            <input type="tel" placeholder="+254" required={true}/>
                            <br/>
                            <button type="submit" className="btn btn-primary payConfirm">Confirm</button>
                        </form>


                    </div>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        recipient: state.recipient.recipient,
        order: state.order.order
    }
}

export default connect(mapStateToProps)(Payment)