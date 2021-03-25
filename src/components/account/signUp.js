import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form'
import "./accounts.css"
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function SignUp() {


    const {register, handleSubmit, errors} = useForm();
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState(faEye)
    const [hide, setHide] = useState(true)

    const onSubmit = (data) => {
        console.log(data)
    }
    const handlePasswordToggle = () => {
        if (hide) {
            setHide(false)
            setType("text")
            setIcon(faEyeSlash)
        } else {
            setHide(true)
            setType("password")
            setIcon(faEye)
        }
    }

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const validatePassword = () => {

    }
    const validateUsername = async (value) => {
        await sleep(1000);
        console.log("validated", value)
        return value === 'boo';
    }


    return (
        <>
            <div className="sign_up">
                <div className="up_head">
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="up_username">UserName</label>
                            <input id="up_username" className="form-control" type="text"
                                   ref={register({required: true, minLength: 3, validate: validateUsername})}
                                   name="username"
                                   placeholder="UserName"/>
                            <div>
                                <div>
                                    {errors.username && errors.username.type === "required" && (
                                        <p>This is required</p>)}
                                    {errors.username && errors.username.type === "minLength" && (
                                        <p>This is field requires a minimum of 3 characters</p>)}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="up_password">Password</label>
                            <div>
                                <div className="password0">
                                    <div className="password0">
                                        <input className="form-control" id="up_password" type={type}
                                               ref={register({required: true, minLength: 5, validate: validatePassword})}
                                               name="password"
                                               placeholder="Password"/>
                                        <button onClick={handlePasswordToggle} className="btn btn-light">
                                            <i><FontAwesomeIcon icon={icon}/></i>
                                        </button>
                                    </div>
                                </div>
                                {errors.password && errors.password.type === "required" && (
                                    <p>This is required</p>)}
                                {errors.password && errors.password.type === "minLength" && (
                                    <p>This is field requires a minimum of 5 characters</p>)}
                            </div>

                            <div className="form-group">
                                <label htmlFor="con_password">Confirm Password</label>
                                <div>
                                    <div className="password0">
                                        <input id="con_password" type={type}
                                               placeholder="password"
                                               ref={register({required: true, minLength: 5, validate: validatePassword})}
                                               name="confirm_password"
                                               className="form-control"/>
                                        <button onClick={handlePasswordToggle} className="btn btn-light">
                                            <i><FontAwesomeIcon icon={icon}/></i>
                                        </button>
                                    </div>
                                </div>
                                {errors.confirm_password && errors.confirm_password.type === "required" && (
                                    <p>This is required</p>)}
                                {errors.confirm_password && errors.confirm_password.type === "minLength" && (
                                    <p>This is field requires a minimum of 5 characters</p>)}
                            </div>

                        </div>

                        <div>
                            <span>Already Have an <Link to="/Account/SignIn">Account ?</Link></span>
                        </div>

                        <br/>

                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )


}

export default SignUp