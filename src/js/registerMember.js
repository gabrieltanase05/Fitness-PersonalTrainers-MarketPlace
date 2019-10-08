import React from 'react'
import axios from 'axios'

class RegisterMember extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lasrName:'',
            email:'',
            password:'',
            passwordRepeat:'',
            therms: false
        }

    }
    componentDidMount() {
        // //Javascript - insert the file
        // const script = document.createElement("script");
        //
        // script.src = "../../js/appMR.js";
        // script.async = true;
        //
        // document.body.appendChild(script);
    }

    //Change value of inputs
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value

        });
    };
    //Change Checkbox value
    changeCheckbox =(event)=>{
        this.state.therms === true ? this.setState({therms: false}) : this.setState({therms:true});
    };
    //Submit the Registration and send Data to Mongo.db

    submitRegister = (event)=>{
        const dataPost = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:8080/api/register', {
            dataPost
        });

    };
    render() {

        return (
        <>
            <form className="register" onSubmit={this.submitRegister}>
                <div className="container">
                    <h1>Create account</h1>
                    <hr/>
                        <label htmlFor="text"><b>First Name</b>
                            <input type="text" placeholder="Enter First Name" name="firstName" onChange={this.handleChange} required/>
                        </label>

                        <label htmlFor="text"><b>Last Name</b>
                            <input type="text" placeholder="Enter LastName" name="lastName" onChange={this.handleChange} required/>
                        </label>

                        <label htmlFor="email"><b>Email</b>
                            <input type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} required/>
                        </label>

                        <label htmlFor="password"><b>Password</b>
                            <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>
                        </label>

                        <label htmlFor="password-repeat"><b>Repeat Password</b>
                            <input type="password" placeholder="Repeat Password" name="passwordRepeat" onChange={this.handleChange} required/>
                        </label>
                        <label>
                            <input type="checkbox" name="therms" onChange={this.changeCheckbox} defaultChecked={false} required/>
                            I' agree to the <a href="#" >Terms and Privacy</a>.
                        </label>
                        <div className="clearfix">
                            <button type="button" className="cancelbtn" id="cancelMR" >Cancel</button>
                            <button type="submit" className="signupbtn" >Register</button>
                        </div>
                </div>
            </form>
        </>

    )
    }
}

export {RegisterMember}