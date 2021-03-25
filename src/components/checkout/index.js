import React, {Component} from "react";
import './checkout.css'
//import iphone from "../../assets/images/phoneX-spacegray.jpeg"
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {createOrder} from "../store/actions/createOrder";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.cart
        }
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.location.pathname !== prevProps.location.pathname
        ) {
            window.scrollTo(0, 0);
        }
    }

    handleClick = () => {
        this.props.createOrder(this.state.cart)
    }

    render() {
        const {cart} = this.state
        console.log("cart", cart)

        const cartList = cart.length ? <div className="cart_component container">
            <div>

            </div>
            <div className="items">
                {cart.map((item, index) => {
                    console.log("item", item)
                    item.total_amount = item.selling_price * item.quantity
                    return (
                        <div key={index} className="item">
                            <div className="item_image">
                                <img src={item.product_image} alt="iphone x"/>
                            </div>
                            <div className="item_detail">
                                <h4>{item.name}</h4>
                                <div>
                                    red
                                    <br/>
                                    <br/>
                                    Quantity: x {item.quantity}
                                </div>
                            </div>
                            <div className="price_view_detail">
                                <div className="cart_price">

                                    Price Kshs: {item.total_amount}
                                </div>
                                <Link to={{
                                    pathname: '/details/' + item.name,
                                    state: {
                                        product: item
                                    }
                                }} key={item.pk}>
                                    <div className="view_details ">
                                        view details>>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    )
                })}

            </div>
            <div className="continue_shopping">
                <Link to='/Shop' className="btn btn-outline-info">
                    <p>Continue Shopping</p>
                </Link>
            </div>
            <div className="order_summary">
                <h5>Order Summary</h5>
                <p>Sub Total: KShs. {cart.reduce((totalCart, product) => totalCart + product.total_amount, 0)}/-</p>
                <p>Shipping: KShs. {cart.reduce((totalCart, product) => totalCart + product.shipping.price, 0)}/-</p>
            </div>
            <div className="total">
                Total Kshs: {cart.reduce((totalCart, product) => totalCart + product.total_amount + product.shipping.price, 0)}/-
            </div>

            <div className="to_checkout">
                <Link to='/CheckOut/form' onClick={this.handleClick}>
                    <p className="button">
                        Proceed To Check Out
                    </p>
                </Link>
            </div>
        </div> : <div className="non_in_cart">
            <p>You have not added anything to the cart</p>

            <Link to='/Shop'>
                <p className="button">Back to Shop</p>
            </Link>
        </div>;
        return (
            <React.Fragment>
                {cartList}
            </React.Fragment>
        )
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        createOrder: (order) => dispatch(createOrder(order))
    }
}

export default connect(null, mapDispatchProps)(Cart)