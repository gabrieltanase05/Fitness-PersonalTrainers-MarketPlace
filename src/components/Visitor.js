import React from 'react'
class Visitor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        }

    }
componentDidMount() {
    //Javascript - insert the file
    const script = document.createElement("script");
    script.src = "../../js/appMR.js";
    script.async = true;
    document.body.appendChild(script);
}

    render() {

        return (
            <>
                <header>
                    <nav>
                        <div>
                            <a href="#">
                                <img src="../../images/logox.png"/>
                            </a>
                        </div>
                        <ul>
                            <li>
                                <a href='#' id="loginButton">Login</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section id="sectionOneVisitor">
                    <div className="container">
                        <h1>Find your own Fitness Personal Trainer</h1>
                        <h2>Don't waste your time inefficiently</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat at turpis in iaculis.
                            Integer vitae nisl vitae turpis consequat efficitur eu in sem. Morbi euismod massa non
                            vestibulum facilisis.
                            Duis vitae laoreet ligula. Duis egestas tristique odio eu condimentum. Vivamus convallis
                            dolor et vestibulum vehicula.
                            Etiam sodales, purus sit amet placerat semper, felis dui sagittis eros, a egestas arcu erat
                            id erat.
                            <strong>Let's start</strong>
                        </p>
                    </div>
                </section>
                <section id="sectionTwoVisitor">
                    <div className="container">
                        <div>LARGE IMAGE WHO DESCRIBE SITE ACTIVITY AND HOW TO USE</div>
                    </div>
                </section>
                <section id="sectionThirdVisitor">
                    <div className="container">
                        <h1>MOTIVATIONAL TEXT FOR ORDINARY MEMBERS TO</h1>
                        <button className="memberRegisterBtn">SignUp</button>
                    </div>
                </section>
                <section id="sectionFourVisitor">
                    <div className="container">
                        <h1> MOTIVATIONAL TEXT FOR TRAINERS TO </h1>
                        <button>SignUp</button>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <ul>
                            <li>
                                <a href="../../About.html">About</a>
                            </li>
                            <li>
                                <a href="../../Contact.html">Contact</a>
                            </li>
                            <li>
                                <a href="../../Help.html">Help</a>
                            </li>

                        </ul>
                    </div>
                </footer>
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

export {Visitor}
