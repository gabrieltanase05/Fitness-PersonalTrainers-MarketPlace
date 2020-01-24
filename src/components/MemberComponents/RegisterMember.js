import React from 'react'

class RegisterTrainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            passwordRepeat:'',
            terms: false,
            signupJson:{
                succes: false,
                message:''}
        };
    }

    //Change value of inputs
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value.trim()

        });
    };
    //Change Checkbox value
    changeCheckbox =(event)=>{
        this.state.terms === true ? this.setState({terms: false}) : this.setState({terms:true});
    };
    //Submit the Registration and send Data to Mongo.db

    submitRegister = (event)=>{
        event.preventDefault();
        let { firstName, lastName, email, password, passwordRepeat } = this.state;
        const dataPost = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        const signupUser= async ()=> {
            try {
                const response = await fetch('http://localhost:8080/api/register', {
                                            method: 'POST',
                                            body: JSON.stringify(dataPost),
                                            headers: new Headers({
                                                'Content-Type': 'application/json'
                                            })
                                        });
                let json = await response.json();
                this.setState({
                    signupJson: json
                })
            }
            catch (err) {
                console.log("Error: "+err)
            }
        };
        if(password.length >= 8 && password === passwordRepeat){
            signupUser();
        }
    };
    render() {
        if(this.state.signupJson.succes==false){
            return (
                <form className="register" onSubmit={this.submitRegister}>
                    <div className="container">
                        <h1>Create account</h1>
                        <hr/>
                        <label htmlFor="text"><b>First Name</b>
                            <input type="text" placeholder="Enter First Name" name="firstName" onChange={this.handleChange} required/>
                            <p className={'errors'}>{this.state.firstNameError}</p>
                        </label>

                        <label htmlFor="text"><b>Last Name</b>
                            <input type="text" placeholder="Enter LastName" name="lastName" onChange={this.handleChange} required/>
                            <p className={'errors'}>{this.state.lastNameError}</p>
                        </label>

                        <label htmlFor="email"><b>Email</b>
                            <input type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} required/>
                            <p className={'errors'}>{this.state.emailError}</p>
                        </label>

                        <label htmlFor="password"><b>Password</b>
                            <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>
                            <p className={'errors'}>{this.state.passwordError}</p>
                        </label>

                        <label htmlFor="password-repeat"><b>Repeat Password</b>
                            <input type="password" placeholder="Repeat Password" name="passwordRepeat" onChange={this.handleChange} required/>
                            <p className={'errors'}>{this.state.rePasswordError}</p>
                        </label>
                        <label>
                            <input type="checkbox" name="terms" onChange={this.changeCheckbox} defaultChecked={false} required/>
                            I' agree to the <a href="#" >Terms and Privacy</a>.
                            <p className={'errors'}>{this.state.termsError}</p>
                        </label>
                        <div className="clearfix">
                            <button type="button" className="cancelbtn" id="cancelMR" >Cancel</button>
                            <button type="submit" className="signupbtn" >Register</button>
                        </div>
                    </div>
                </form>
            )
        } else {
           return(
                <div className={'succesSignup'}>
                    <h1>{this.state.signupJson.message}</h1>
                    <h1>Please Login!</h1>
                </div>
           )
        }
    }
}

export {RegisterTrainer};