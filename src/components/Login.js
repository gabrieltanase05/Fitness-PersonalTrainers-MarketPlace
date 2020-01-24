import React from 'react'
import {setInStorage} from "../utils/storage";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            loginJson:{
                succes: false,
                message:''
            }
        }
    }
    //Submit the Registration and send Data to Mongo.db
    submitRegister = (event)=>{
        event.preventDefault();
        const dataPost = {
            email: this.state.email,
            password: this.state.password
        };
        const loginUser= async ()=> {
            try {
                const response = await fetch('http://localhost:8080/api/login', {
                    method: 'POST',
                    body: JSON.stringify(dataPost),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                });
                let json = await response.json();
                await this.setState({
                    loginJson: json
                });

            }
            catch (err) {
                console.log("Error: "+err)
            }
        };
      loginUser()
    };
    //Change value of inputs
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value.trim()
        });
    };
    render() {
        //Validation Login function for store the user information in localStorage
        const {loginJson} = this.state;
        const callback= ()=>{if(loginJson.succes) {
            //Set in localStorage the Token, userID an isTrainer value
            setInStorage('the_pt_app',JSON.stringify({token: loginJson.token
                , userID: loginJson.userid, isTrainer: loginJson.isTrainer}));
            this.props.tokenChange(loginJson.token);
        }};
        callback();
        return (
            <form className="login" >
                <div className="container">
                    <h1>Login on your account!</h1>
                    <hr/>
                    <div className={"validationMessage"}>{this.state.loginJson.message}</div>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>
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
