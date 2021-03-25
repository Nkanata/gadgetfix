import React, {Component} from "react";
import './checkout.css'
import RecipientForm from "./customerdetailform";
import Summary from "./summary";
import Payment from "./payment";
import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import Thanks from "./thankyou";


class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.cart,
            details: {},
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    /* handleSubmit = (e) => {
         e.preventDefault();
         //console.log(this.state)
         //this.props.createProject(this.state)
         this.props.history.push('/CheckOut/summary')
     };**/

    render() {
        const Recipient = withRouter(RecipientForm)
        return (
            <>
                <div className="container checkout">

                        <div className="checkout_heading"><h2>Place The Order</h2></div>
                        <div>

                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page"><NavLink
                                        to="/CheckOut/form">Details</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to="/CheckOut/summary">Summary</NavLink>
                                    </li>
                                    <li className="breadcrumb-item"><NavLink to='/CheckOut/payment'>Payment</NavLink>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="orders">
                            <Switch>
                                <Route path="/CheckOut/form" render={() => <Recipient handleChange={this.handleChange}
                                                                                      handleSubmit={this.handleSubmit}/>}/>
                                <Route path="/CheckOut/summary" component={Summary}/>
                                <Route path="/CheckOut/payment" component={Payment}/>
                                <Route path="/CheckOut/thanks" component={Thanks}/>
                            </Switch>
                        </div>

                </div>
            </>
        )
    }
}

export default CheckOut