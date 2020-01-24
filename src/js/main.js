import React from 'react';
import ReactDOM from 'react-dom';

import {MemberProfile} from '../components/MemberComponents/MemberProfile';
import {TrainerProfile} from "../components/TrainerComponents/TrainerProfile";
import {RegisterMember} from '../components/MemberComponents/RegisterMember';
import {RegisterTrainer} from "../components/TrainerComponents/RegisterTrainer";
import {MemberPage} from "../components/MemberComponents/MemberPage";
import {TrainerPage} from "../components/TrainerComponents/TrainerPage";
import {TrainersList} from '../components/TrainersList';
import {Visitor} from "../components/Visitor";
import {Login} from '../components/Login';
import { getFromStorage} from "../utils/storage";

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: true,
            token: ''
        };
    }
    logout=(event)=>{
        this.setState({
            isLoading:true
        });
        const obj = getFromStorage('the_pt_app');
        //Check the token
        if (obj && obj.token) {
            const {token} = obj;
            fetch("http://localhost:8080/api/logout?token=" + token,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(json => {
                    if (json.succes) {
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
        const obj = getFromStorage('the_pt_app');
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
            return (<h1 className={'loading'}>Loading...</h1>)
        }
        if(!this.state.token){

            return (
                <>
                    <Visitor/>
                    <Login tokenChange={this.tokenChange} />
                    <RegisterMember/>
                    <RegisterTrainer/>
                </>

            )
        }
        return(
                <>
                    <MemberPage logout={this.logout}/>
                    <MemberProfile/>
                </>
        )
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
//-----------------------------------------------------------------------//
    ReactDOM.render(
        <Index/>, document.getElementById('root'));
    ReactDOM.render(
    <TrainersList/>, document.getElementById('trainersList'));

//-----------------------------------------------------------------------//
});

