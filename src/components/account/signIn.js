import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import "./accounts.css"

function SignIn() {

    const [hide, setHide] = useState(true)
    const [icon, setIcon] = useState(faEye)
    const [type, setType] = useState("password")

    const {register, handleSubmit, errors} = useForm()

    const handlePasswordToggle = () => {
        if (hide) {
            setHide(false)
            setIcon(faEyeSlash)
            setType("text")
        }else{
            setHide(true)
            setIcon(faEye)
            setType("password")
        }
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className="sign_in">
                <div className="in_head">
                    <h1>Sign In</h1>
                </div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="username">UserName</label>
                        <input className="form-control" id="username"
                               name="username"
                               ref={register}
                               placeholder="UserName"
                               type="text"
                               required={true}/>

                    </div>
                    {errors.username && errors.username.type === "required" && (
                        <p>This is required</p>)}
                    {errors.username && errors.username.type === "minLength" && (
                        <p>This is field requires a minimum of 3 characters</p>)}

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div>
                            <div className="password0">
                                <input className="form-control"
                                       id="password"
                                       type={type}
                                       name="password"
                                       ref={register}
                                       placeholder="Password"/>
                                <button onClick={handlePasswordToggle} className="btn btn-light">
                                    <i><FontAwesomeIcon icon={icon}/></i>
                                </button>
                            </div>



                        </div>

                    </div>

                    <div>
                        <span>Create an <Link to="/Account/SignUp">Account ?</Link></span>
                    </div>
                    <br/>

                    <button className="btn btn-primary">Sign In</button>
                </form>
            </div>
        </>

    )

}

export default SignIn