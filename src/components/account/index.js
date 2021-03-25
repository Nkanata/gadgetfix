import React, {Component} from "react";
import './accounts.css'
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import SignUp from "./signUp";
import SignIn from "./signIn";

class Account extends Component {
    render() {
        return (
            <>
                <BrowserRouter>

                    <div className="accounts">
                        <div className="acc_head">
                            <h1 className="in_link">
                                <NavLink activeClassName="nav_active" to="/Account/SignUp">Register </NavLink>
                            </h1>
                            <h1>|</h1>
                            <h1 className="up_link">
                                <NavLink activeClassName="nav_active" to="/Account/SignIn"> Log In </NavLink>
                            </h1>
                        </div>
                        <div className="container card-body">
                            <div className="login-card">
                                <Switch>
                                    <Route path="/Account/SignUp" component={SignUp}/>
                                    <Route path="/Account/SignIn" component={SignIn}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </>

        )
    }
}

export default Account