import React, {Component} from "react";
import {connect} from 'react-redux'
import Iphone from '../../assets/images/iphone.jpg'
import {Redirect} from "react-router-dom";
import {sendOrder} from "../store/actions/sendOrder";

class Summary extends Component {
    componentDidMount() {
        window.scroll(0 , 0)
    }

    handleClick = (order, recipient) => {
        this.props.sendOrder(order, recipient)
        this.props.history.push('/CheckOut/payment')
    }

    render() {
        const recipient = this.props.recipient
        const order = this.props.order
        console.log("recipient", recipient)
        console.log("order", order)
        if (order.length === 0) return <Redirect to="/Shop"/>;
        if (recipient.length === 0) return <Redirect to='/CheckOut/form'/>;
        return (
            <React.Fragment>
                <div className="summary">
                    <div className="header">
                        <h3>Summary</h3>
                        <h3 className="review_head">Review Order.</h3>
                    </div>

                    <div className="summaryContainer container">
                        <div className="summary_details">
                            <p>Full Names: {recipient.first_name} {recipient.last_name}</p>
                            <p>Email: {recipient.email}</p>
                            <p>Address: {recipient.address}</p>
                            <p>Zip code: {recipient.zipcode}</p>
                            <p>{recipient.city}, {recipient.county}</p>
                        </div>
                        <div className="orderee">
                            <div className="orderee_header"><h4>Review Order</h4></div>

                            <div className="">
                                {order && order.map((item, index) => {
                                    return (
                                        <div key={index} className="summary_item">
                                            <div className="order_image">
                                                <img src={item.product_image} alt={item.name}/>
                                            </div>
                                            <div className="items_detail">
                                                <div className="item_name">
                                                    {item.name}
                                                </div>
                                                <div className="item_prices">
                                                    <div className="item_price">
                                                        Price KShs: {item.selling_price}/-
                                                    </div>
                                                    <div className="item_shipping_price">
                                                        Shipping KShs: {item.shipping_price}500/-
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className="total_price">
                                    Total: KShs: {order.reduce((total, product) => total + product.total_amount, 0)}/-
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="payButton">
                        <button onClick={this.handleClick.bind(this, order, recipient)} className="btn btn-primary">
                            Pay
                        </button>
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
const mapDispatchToProps = (dispatch) =>{
    return {
        sendOrder: (order, recipient)=> dispatch(sendOrder(order, recipient))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Summary)