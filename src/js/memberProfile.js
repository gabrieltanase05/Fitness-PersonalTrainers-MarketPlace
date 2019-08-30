import React from 'react';
import ReactDOM from 'react-dom';

//Component General Information
class MemberProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            edit: false
        }
    }
    enableEditing = (event) => {
        this.setState({
            edit:true
        })

    };
    render() {
        return (
            this.state.edit === false ?
                <section>
                    <article className="generalInformation">
                        <div> AVATAR UPLOAD</div>
                        <form>
                            <h1>General Information</h1>
                            <hr/>
                            <label className="buttonEdit">
                                <button onClick={this.enableEditing}>Edit</button>
                            </label>
                            <label>First Name:</label>
                            <label>Last Name:</label>
                            <label> E-mail Address:</label>
                            <label>Date of Birth:</label>
                            <label>Country:</label>
                            <label>City:</label>
                        </form>
                    </article>
                    <article className="activityInformation">
                        <form><h1>Activity Information</h1>
                            <hr/>
                            <label>Sport Type:</label>
                            <label>Sport Location:(Gym, out dor, else)</label>
                            <label>Food Type:</label>
                            <label>My Goal:</label>
                            <label>Description:</label>
                            <label>Health and Medical Issues:</label>
                            <label>Training History:</label>
                        </form>
                    </article>
                </section>
                :
                <section>
                    <article className="generalInformation">
                        <div> AVATAR UPLOAD</div>
                        <form><h1>General Information</h1>
                            <hr/>
                            <label>First Name:
                                <input placeholder="Type your First Name"/>
                            </label>
                            <label>Last Name:
                                <input placeholder="Type your Last Name"/>
                            </label>
                            <label> E-mail Address:
                                <button>Change E-mail</button><br/>
                                <input placeholder="Type Your E-mail"/><br/>
                                <input placeholder="New E-mail"/><br/>
                                <input placeholder="Repeat New E-mail"/>
                            </label>
                            <label>Date of Birth:</label>
                            <label>Country:</label>
                            <label>City:</label>
                            <label>
                                <button>Reset Password</button>
                                <br/>
                                Password <input placeholder="Type your Password"/> <br/>
                                New Password <input placeholder="Type New Password"/> <br/>
                                Repeat New Password <input placeholder="Repeat New Password"/>
                            </label>
                        </form>
                    </article>
                    <article className="activityInformation">
                        <form><h1>Activity Information</h1>
                            <hr/>
                            <label>In dor/Out dor:
                                <select>
                                    <option>Select</option>
                                    <option>Gym</option>
                                    <option>Out dor</option>
                                </select>
                            </label>
                            <label>Food Type:
                                <select>
                                    <option>Select</option>
                                    <option>Omnivorous</option>
                                    <option>Vegetarian</option>
                                    <option>Vegan</option>
                                    <option>Raw Vegan</option>
                                    <option>Else</option>
                                </select>
                            </label>
                            <label>My Goal:
                                <select>
                                    <option>Select</option>
                                    <option>Lose Weight</option>
                                    <option>Increase Weight</option>
                                    <option>Bodybuilding</option>
                                    <option>FIT</option>
                                    <option>Kinetotherapy</option>
                                </select>
                            </label>
                            <label>Description:
                                <textarea placeholder="Describe yourself"/>
                            </label>
                            <label>Health and Medical Issues:
                                <textarea placeholder="Any health or medical issues?"/>
                            </label>
                            <label>Training History:
                                <textarea placeholder="Describe your Training history in few words"/>
                            </label>
                            <label className="buttonEdit">
                                <button>Save</button>
                            </label>
                        </form>
                    </article>
                </section>
        )
    }
}
export {MemberProfile};