import React, {Component} from "react";
//import iphone from "../../assets/images/phoneX-spacegray.jpeg"
import './shop.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import LocationBtn from "./locationBtn";


class Product_detail extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getStyle = this.getStyle.bind(this)
        if (this.props.location.state) {
            const {product} = this.props.location.state
            this.state = {
                quantity: product.quantity,
                prevClick: -1,
                clicked: false,
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleClick(product) {
        if (product.shipping)
            this.props.handleAddToCart(product);
        else
            alert("select shipping information")
    }


    handleQtyIncrease = (product) => {
        //console.log('quantity', cartItem);
        this.setState({quantity: this.state.quantity + 1});
        //this.setState({products: [...this.state.products]});
        product.quantity += 1
        console.log('prod', product)

    };
    handleQtyDecrease = (product) => {
        if (product.quantity > 1) {
            product.quantity -= 1
            console.log('prod', product)
            this.setState({quantity: this.state.quantity - 1});
        }
    };


    handleClearCart = () => {
        this.props.handleClearCart();
        this.setState({
            products: []
        })
    };

    handleCheckOut = () => {
        //this.props.create_order(this.state);
        this.props.history.push('/checkout')
    };
    getStyle = (id) => {
        return this.state.prevClick === id;
    }


    handleShippingClick = (id) => {
        const {shipping} = this.props;
        const {product} = this.props.location.state
        console.log("shipping", shipping)


        // id.currentTarget.style= activeStyle
        if (this.state.prevClick !== id) {
            this.setState({...this.state, prevClick: id,})
            //product.shipping = {}
            product.shipping = shipping[id]
            console.log("clicked", id)
            console.log("added", product)
        } else {
            this.setState({
                ...this.state, prevClick: -1,
            })
            console.log("product shipping", product.shipping)
            product.shipping = {}
        }
        console.log('click event', id)

    }


    render() {
        const {products} = this.props;
        const {shipping} = this.props;

        if (this.props.location.state) {
            const {product} = this.props.location.state
            console.log(this.props)
            console.log("products", products);
            console.log("product", product)
            // console.log("state" )
            const quantity = this.state.quantity;
            return (
                <>
                    <div className="details container">
                        <div className="details_description_wrapper">
                            <div className="detail_image">
                                <img src={product.product_image} alt={product.name}/>

                                <div className="thumbnails">
                                    {product.other_images && product.other_images.map((image, index) => {
                                        return (
                                            <div key={index} className="thumbnail">
                                                <img src={image.image} alt={product.name} className="img-thumbnail"/>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>

                            <div className="detail_description">
                                <div><h1>{product.name}</h1></div>

                                <div className="rating"></div>

                                <div className="detail">
                                    <ul>
                                        {product.features && product.features.map((feature, index) => {
                                            return (
                                                <li key={index}>{feature.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="price">
                                    KShs: {product.selling_price}
                                </div>

                                <div className="item_quantity">
                                    <div className="qty">Quantity:</div>
                                    <div className="change_quantity">
                                        <div className="">
                                            <button className="QtyButton QtyMinus"
                                                    onClick={this.handleQtyDecrease.bind(this, product)}>
                                                <FontAwesomeIcon icon={faMinus}/>
                                            </button>
                                            <span className="Qty">{quantity}</span>
                                            <button className="QtyButton QtyPlus"
                                                    onClick={this.handleQtyIncrease.bind(this, product)}>
                                                <FontAwesomeIcon icon={faPlus}/>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                                <div className="shipping">
                                    <button className="btn btn-outline-info" data-toggle="modal"
                                            data-target="#shippingmodal">
                                        Ships to: <FontAwesomeIcon icon={faCaretDown}/>
                                    </button>

                                    <div className="modal fade" id="shippingmodal" tabIndex="-1" role="dialog"
                                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLongTitle">
                                                        Shipping Destinations & Prices
                                                    </h5>
                                                    <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="price_list list-group">
                                                        {shipping && shipping.map((destination, index) => {
                                                            return (
                                                                <div className="destination_" key={index}>
                                                                    <LocationBtn id={index}
                                                                                 clicked={this.state.clicked}
                                                                                 destination={destination}
                                                                                 handleShippingClick={this.handleShippingClick}
                                                                                 getStyle={this.getStyle.bind(this)}
                                                                    />

                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="modal-footer">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chosen">
                                        {product.shipping ?

                                            <div>
                                                <span className="destination">{product.shipping.destination}</span>
                                                <span
                                                    className="via">{product.shipping.courier}</span>
                                                <span
                                                    className="shipping_price">KShs. {product.shipping.price}</span>
                                            </div>


                                            : <div/>}

                                    </div>

                                </div>
                                <br/>

                                <div className="add_to_cart ">
                                    <button className=" btn btn-dark" onClick={this.handleClick.bind(this, product)}>Add
                                        to
                                        Cart
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="box-item">
                            <h4>Items in the Box</h4>
                            <div>
                                <ul>
                                    {product.box_item && product.box_item.map((item, index) => {
                                        return (
                                            <li key={index}>{item.name}</li>
                                        )
                                    })}
                                </ul>

                            </div>
                        </div>

                        <div className="">

                            <div className="lower_title" id="accordion">
                                <div className="card">
                                    <div className="headings">
                                        <div className="card-header" id="description_heading">
                                            <div data-toggle="collapse" data-target="#collapse_description"
                                                 aria-expanded="false"
                                                 aria-controls="collapse_description">
                                                <Link to='#'><h3>Full Description.</h3></Link>
                                            </div>
                                        </div>

                                        <div className="card-header" id="review_heading">
                                            <div data-toggle="collapse" data-target="#collapse_review"
                                                 aria-expanded="false"
                                                 aria-controls="collapse_review">
                                                <Link to='#'><h3>Reviews</h3></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapse_description" className="collapse"
                                         aria-labelledby="description_heading"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            description
                                        </div>
                                    </div>

                                    <div id="collapse_review" className="collapse" aria-labelledby="review_heading"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            reviews
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Redirect to='/Shop'/>
                </>
            )
        }

    }
}

const MapStateToProps = (state) => {
    return {
        products: state.products.products,
        shipping: state.shipping.shipping
    }
}

export default connect(MapStateToProps)(Product_detail)