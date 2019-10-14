import React from 'react';
import ReactDOM from 'react-dom';

//Component General Information
class TrainersList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            avatar:'',
            trainer: false,
            firstName: '',
            lastName: '',
            country: '',
            city:'',
            specialization:'',
            certification: '',
            gyms:'',
            price:''
        }
    }
    componentDidMount() {
//Using Fetch() sync the profile page with Database users.json
        fetch("http://localhost:3000/users/" +this.state.id,{
            method: 'GET',
        }).then(response => {
            return response.json()
        }).then(data =>{
            data.map(element => {
                this.setState({
                    id: element.id,
                    avatar: element.avatar,
                    trainer: element.trainer,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    country: element.country,
                    city: element.city,
                    specialization: element.specialization,
                    certification: element.certification,
                    gyms: element.gyms,
                    price: element.price
                });
            });
        });
    }

    render() {
        return (
            <section className="sectionTrainersList">
                <article className="container clearfix">
                    <div className="element">
                        <div>
                            <img src={this.state.avatar}/>
                        </div>
                        <ul>
                            <li>Name:{this.state.lastName} {this.state.firstName}</li>
                            <li>Specialization: {this.state.specialization}</li>
                            <li>Certification:{this.state.certification}</li>
                            <li>Gym:{this.state.gyms}</li>
                            <li>Price/Session:{this.state.price}</li>
                        </ul>
                        <button>I'm interesting</button>
                    </div>
                    <div className="element">
                        <div>
                            <img src={this.state.avatar}/>
                        </div>
                        <ul>
                            <li>Name:{this.state.lastName} {this.state.firstName}</li>
                            <li>Specialization: {this.state.specialization}</li>
                            <li>Certification:{this.state.certification}</li>
                            <li>Gym:{this.state.gyms}</li>
                            <li>Price/Session:{this.state.price}</li>
                        </ul>
                        <button>I'm interesting</button>
                    </div>

                </article>
            </section>
        )
    }
}
export {TrainersList};