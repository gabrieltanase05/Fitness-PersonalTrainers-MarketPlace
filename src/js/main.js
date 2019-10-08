import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {MemberProfile} from './memberProfile';
import {TrainersList} from './trainersList';
import {RegisterMember} from './registerMember'
import {Login} from './login'
import {MemberPage} from "./memberPage";
import {Visitor} from "./visitor";

import { getFromStorage, setInStorage} from "../utils/storage";

class Index extends React.Component {
    constructor(props){
        super(props);
        //this.tokenChange=this.tokenChange.bind(this);
        this.state={
            isLoading: true,
            token: ''
        };
    }
    logout=(event)=>{
        console.log('works');
        this.setState({
            isLoading:true
        });
        const obj = getFromStorage('the_main_app');
        //Check the token
        if (obj && obj.token) {
            const {token} = obj;
            fetch("http://localhost:8080/api/logout?token=" + token)
                .then(res => res.json())
                .then(json => {
                    if (json.succes) {
                        console.log(json);
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });

        } else {
            this.setState({
                isLoading: false
            });
        }
    };
    tokenChange=(param)=> {
        this.setState({
            token: param
        });
    };
    componentDidMount() {
        //Verify the token to login
        const obj = getFromStorage('the_main_app');
        //Check the token
        if(obj && obj.token){
            const {token} = obj;
            fetch("http://localhost:8080/api/verify?token=" +token)
                .then(res=>res.json())
                .then(json=>{
                    if(json.succes) {
                        this.setState({
                            token: token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });

        } else {
            this.setState({
                isLoading: false
            });
        }
    };

    render() {
        if (this.state.isLoading){
            return (<h1>Loading...</h1>)
        }
        if(!this.state.token){
            return (
                <>
                    <Visitor/>
                    <Login tokenChange={this.tokenChange} />
                    <RegisterMember/>
                </>

            )
        }
        return(
            <MemberPage logout={this.logout}/>
        )
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
//-----------------------------------------------------------------------//
    ReactDOM.render(
        <Index/>, document.getElementById('root'));
    ReactDOM.render(
    <MemberProfile/>, document.getElementById('memberProfile'));
    ReactDOM.render(
    <TrainersList/>, document.getElementById('trainersList'));

//-----------------------------------------------------------------------//
});

