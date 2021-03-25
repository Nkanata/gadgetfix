import React, {Component} from "react";
import './shop.css'
import Product from "./product";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: props.categories,
            products: props.products,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const {products} = this.props;
        console.log("the request", products)
        console.log('state', this.state)
        console.log('props', this.props)
        return (
            <>
                <div className="shop container ">
                    <div className="phone">
                        <div className="title"><h1>Phones</h1></div>
                        <div className="products">
                            {products && products.map(product => {
                                    console.log(product, 'the product')
                                    return (
                                        <div key={product.pk} className="product">
                                            <div className="card" style={{width: "18rem"}}>
                                                <Link to={{
                                                    pathname: '/details/' + product.name,
                                                    state: {
                                                        product: product
                                                    }
                                                }} key={product.pk}>
                                                    <img src={product.product_image} alt="iphone" className="card-img-top"/>
                                                </Link>
                                                <div className="card-body">
                                                    <p className="card-text">{product.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>

                    </div>
                    <div className="accessories">
                        <div className="title"><h1>Accessories</h1></div>
                        <div className="products">
                            <div className="product"><Product/></div>
                            <div className="product"><Product/></div>
                            <div className="product"><Product/></div>
                            <div className="product"><Product/></div>
                            <div className="product"><Product/></div>
                            <div className="product"><Product/></div>


                        </div>
                    </div>
                </div>
            </>


        )
    }
}

const MapStateToProps = (state) => {
    return {
        categories: state.products.categories,
        products: state.products.products,
        cart: state.products.cart

    }
}
export default connect(MapStateToProps)(Shop)