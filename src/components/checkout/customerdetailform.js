import React, {Component} from "react";
import {connect} from 'react-redux'
import {CreateRecipient} from "../store/actions/recipientsOrders";
import {Redirect} from "react-router-dom";

class RecipientForm extends Component {
    state = {
        first_name: '',
        surname: '',
        last_name: '',
        phone: '',
        email: '',
        address: '',
        zipcode: '',
        city: '',
        county: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createRecipient(this.state)
        this.props.history.push('/CheckOut/summary')
    }

    render() {
        console.log('form props', this.props)
        const order = this.props.order
        if (order.length === 0) return <Redirect to='/Cart'/>

        return (
            <React.Fragment>
                <div><h3>Recipients Details</h3></div>
                <div className="checkout_form">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="first_name">First Name <span> *</span></label>
                        <input id="first_name" type="text"
                               placeholder= "First Name"
                               value={this.state.first_name ? this.state.first_name : this.props.recipient.first_name}
                               onChange={this.handleChange} required={true}/>

                        <label htmlFor="surname">Surname <span> *</span></label>
                        <input id="surname" type="text"
                               placeholder="Surname"
                               value={this.state.surname ? this.state.surname : this.props.recipient.surname}
                               onChange={this.handleChange} required={true}/>

                        <label htmlFor="last_name">Last Name</label>
                        <input id="last_name" type="text"
                               placeholder="Last Name"
                               value={this.state.last_name ? this.state.last_name : this.props.recipient.last_name}
                               onChange={this.handleChange}/>

                        <label htmlFor="phone">Phone Number <span> *</span></label>
                        <input id="phone" type="tel"
                               placeholder="Phone Number"
                               value={this.state.phone ? this.state.phone : this.props.recipient.phone}
                               onChange={this.handleChange} required={true}/>

                        <label htmlFor="email">Email <span> *</span></label>
                        <input id="email" type="text"
                               placeholder="Email"
                               value={this.state.email ? this.state.email : this.props.recipient.email}
                               onChange={this.handleChange} required={true}/>

                        <label htmlFor="address">Address <span> *</span></label>
                        <input id="address" type="text"
                               placeholder="Address"
                               value={this.state.address ? this.state.address : this.props.recipient.address}
                               onChange={this.handleChange}
                               required={true}/>

                        <label htmlFor="zipcode">Zip Code <span> *</span></label>
                        <input id="zipcode" type="text"
                               placeholder="Zip Code"
                               value={this.state.zipcode ? this.state.zipcode : this.props.recipient.zipcode}
                               onChange={this.handleChange}
                               required={true}/>

                        <label htmlFor="city">City <span> *</span></label>
                        <input id="city" type="text"
                               placeholder="City"
                               value={this.state.city ? this.state.city : this.props.recipient.city}
                               onChange={this.handleChange} required={true}/>

                        <label htmlFor="county">County <span> *</span></label>
                        <input id="county" type="text"
                               placeholder="County"
                               value={this.state.county ? this.state.county : this.props.recipient.county}
                               onChange={this.handleChange}
                               required={true}/>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRecipient: (recipient) => dispatch(CreateRecipient(recipient))
    }
}

const mapStateToProps = (state) => {
    return {
        recipient: state.recipient.recipient,
        order: state.order.order
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipientForm)