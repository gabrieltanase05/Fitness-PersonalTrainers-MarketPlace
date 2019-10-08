import React from 'react'
import axios from 'axios'
import {setInStorage} from "../utils/storage";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    //Submit the Registration and send Data to Mongo.db
    submitRegister = (event)=>{
        const dataPost = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:8080/api/login', {
            dataPost
        }).then(json=>{
            if(json.data.succes) {
                //Set in localStorage the Token
                setInStorage('the_main_app',JSON.stringify({token: json.data.token}));
                this.props.tokenChange(json.data.token);
            }
            });

    };

    //Change value of inputs
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <form className="login" >
                <div className="container">
                    <h1>Login on your account!</h1>
                    <hr/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>

                    {/*<label>*/}
                    {/*    <input type="checkbox" name="remember"/> Remember me*/}
                    {/*</label>*/}

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn" onClick={this.submitRegister}>Login</button>
                    </div>
                </div>
            </form>

        )
    }
}

export {Login}
