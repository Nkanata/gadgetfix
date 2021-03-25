import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, withRouter, NavLink, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

//import {withRouter} from "react-router-dom"
import {faSearch, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Home from "./components";
import Footer from "./components/layout/footer";
import Shop from "./components/shop";
import Repairs from "./components/repairs";
import About from "./components/about";
import Contact from "./components/contact";
import Cart from "./components/checkout";
import Account from "./components/account";
import Search from "./components/search";
import Product_detail from "./components/shop/product_detail";
import PhoneRepairs from "./components/repairs/PhoneRepairs";
import CheckOut from "./components/checkout/CheckOut";
import {get_product_categories, getProducts} from "./components/store/actions/getProducts";

class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            products: props.products,
            cart: []
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleClearCart = this.handleClearCart.bind(this);
        this.handleLink = this.handleLink.bind(this)
    }

    componentDidMount() {
        this.props.get_product_categories();
        this.props.getProducts();
        console.log("app component", this.props);
    }

    handleAddToCart(product) {
        console.log("added to cart", product);
        const cartItem = this.state.cart.find(item => item.pk === product.pk);
        //&& product.inStock > 0
        !cartItem && this.setState({cart: [...this.state.cart, product]})
        console.log("cart state", this.state.cart)
    }

    handleClearCart = () => {
        this.setState({
            cart: []
        })
    };


    handleLink = (e) => {
        //e.preventDefault();
        console.log("clicked")
        return (
            <Redirect to='/Cart'/>
        )
    }

    render() {
        console.log('props', this.props)
        const ProductDetailHoc = withRouter(Product_detail);
        const CartHoc = withRouter(Cart);
        const CheckOutHoc = withRouter(CheckOut);
        return (
            <>

                <BrowserRouter>
                    <div className="App">


                        <header className="App-header">
                            <h1>The Gadget Fix</h1>
                        </header>
                        <div className="sticky-top">
                            <nav className="navbar navbar-light navbar-expand-lg bg-light ">
                                <div className="app_nav ">
                                    <ul className="links">
                                        <li><NavLink className=" nav-link active" to="/"
                                        >Home <span
                                            className="sr-only">(current)</span></NavLink></li>
                                        <li><NavLink className=" nav-link" to="/Shop"
                                        >Shop</NavLink></li>
                                        <li><NavLink className=" nav-link" to="/Repairs"
                                        >Repairs</NavLink></li>
                                        <li><NavLink className=" nav-link" to="/About">About
                                            Us</NavLink></li>
                                        <li><NavLink className=" nav-link" to="/Contact Us"
                                                     tabIndex="-1">Contact Us</NavLink></li>
                                    </ul>

                                    <div className="search">
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                                   aria-label="Search"/>
                                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                                <FontAwesomeIcon icon={faSearch}/></button>
                                        </form>
                                    </div>

                                    <div className="icons">
                                        <NavLink to='/Cart'>
                                            <button className="btn cart"><FontAwesomeIcon icon={faShoppingCart}/><span
                                                className="badge badge-dark">{this.state.cart.length}</span></button>
                                        </NavLink>

                                        <NavLink to='/Account/SignUp'>
                                        <button className="btn user"><FontAwesomeIcon icon={faUser}/></button>
                                        </NavLink>
                                    </div>

                                </div>
                            </nav>
                        </div>

                        <div>

                            <Switch>
                                <Route exact path="/"><Home/></Route>
                                <Route path="/Shop" component={Shop}/>
                                <Route path="/Repairs" component={Repairs}/>
                                <Route path="/About" component={About}/>
                                <Route path="/Contact Us" component={Contact}/>
                                <Route path="/Cart" render={() => <CartHoc cart={this.state.cart}/>}/>
                                <Route path="/Account" component={Account}/>
                                <Route path="/Search" component={Search}/>
                                <Route path="/Shop" component={Shop}/>
                                <Route path="/details/:id"
                                       render={() => <ProductDetailHoc handleAddToCart={this.handleAddToCart}/>}/>
                                <Route path="/PhoneRepairs" component={PhoneRepairs}/>
                                <Route path="/CheckOut" render={() => <CheckOutHoc cart={this.state.cart}/>}/>

                            </Switch>

                        </div>

                        <div>
                            <Footer/>
                        </div>
                    </div>
                </BrowserRouter>
            </>
        );
    }

}

export default connect(null, {get_product_categories, getProducts})(App);
