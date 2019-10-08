import React from 'react'
import {getFromStorage} from "../utils/storage";

class MemberPage extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        //Javascript - insert the file
        const script = document.createElement("script");

        script.src = "../../js/app.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <>
                <header>
                    <nav>
                        <div>
                            <a href="../../index.html">
                                <img src="../../images/logox.png"/>
                            </a>
                        </div>
                        <ul>
                            <li>
                                <a href="#" className={"profileBtn"}>Profile</a>
                            </li>
                            <li>
                                <a onClick={this.props.logout} href='#'>LogOut</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="burgerMenu">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </header>
                <article className="articleAsideMenu">
                    <div className="container">
                        <aside className="asideMenu">
                            <ul>
                                <ul>
                                    <li><a id="trainers" href="#"> <i className="fas fa-dumbbell"/> Trainers</a></li>
                                    <ul id="trainersL">
                                        <li><a href="#">Trainers List</a></li>
                                        <li><a href="#">How to choose?</a></li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li><a id="nutrition" href="#"><i className="fab fa-nutritionix"/> Nutrition</a>
                                    </li>
                                    <ul id="nutritionL">
                                        <li><a href="#">Nutritional tips</a></li>
                                        <li><a href="#">Supplements</a></li>
                                        <li><a href="#">Online Shops</a></li>
                                    </ul>
                                </ul>
                                <li><a href="#"><i className="fas fa-tshirt"/> Equipment</a></li>
                                <li><a href="#"><i className="fas fa-thumbtack"/> Gym</a></li>
                                <ul>
                                    <li><a id="messages" href="#"><i className="fas fa-envelope"/> Messages</a></li>
                                    <ul id="messagesL">
                                        <li><a href="#">Inbox</a></li>
                                        <li><a href="#">Sent</a></li>
                                    </ul>
                                </ul>
                                <li>
                                    <a href="../../About.html"><i className="fas fa-users"/> About</a>
                                </li>
                                <li>
                                    <a href="../../Contact.html"><i className="fas fa-phone"/> Contact</a>
                                </li>
                                <li>
                                    <a href="../../Help.html"><i className="fas fa-hands-helping"/> Help</a>
                                </li>
                            </ul>
                            <div>
                                <div className="facebook"><a href="#">F</a></div>
                                <div className="instagram"><a href="#">I</a></div>
                                <div className="twitter"><a href="#">L</a></div>
                            </div>
                        </aside>
                    </div>
                </article>
                <footer className="socialMedia">
                    <div className="container">
                        <div className="facebook"><a href="#">F</a></div>
                        <div className="instagram"><a href="#">I</a></div>
                        <div className="twitter"><a href="#">L</a></div>
                    </div>
                </footer>
            </>
        )
    }
}

export {MemberPage}