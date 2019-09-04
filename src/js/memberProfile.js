import React from 'react';

    class ImageUploadX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Avatar</div>);
        }

        return (
            <div className="previewComponent">
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <button className="submitButton"
                            type="submit"
                            onClick={(e)=>this._handleSubmit(e)}>Upload
                    </button>
                    <input className="fileInput"
                           type="file"
                           onChange={(e)=>this._handleImageChange(e)} />
                </form>
            </div>
        )
    }
}


//Component General Information
class MemberProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            edit: false,
            displayEmail: 'none',
            displayPass: 'none'
        }
    }
    enableEditing = (event) => {
        this.setState({
            edit:true
        });
    };
    handleEmail = (event) => {
        if(this.state.displayEmail === 'block'){
            this.setState({
                displayEmail: 'none'
            })
        } else {
            this.setState({
                displayEmail: 'block'
            })
        }
    };
    handlePass = (event) => {
        if(this.state.displayPass === 'block'){
            this.setState({
                displayPass: 'none'
            })
        } else {
            this.setState({
                displayPass: 'block'
            })
        }
    };
    render() {
        return (
            this.state.edit === false ?
                <section>
                    <article className="generalInformation">
                        <div><div className="imgPreview">
                            <img src={this.state.imagePreviewUrl}/>
                        </div></div>
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
                        <div> <ImageUploadX/> </div>
                        <form><h1>General Information</h1>
                            <hr/>
                            <label>First Name:
                            </label>
                            <label>Last Name:
                            </label>
                            <label> E-mail Address:
                                <button onClick={this.handleEmail}>Change E-mail</button><br/>
                                <span style={{display: this.state.displayEmail}}>
                                    <input placeholder="Type Your E-mail"/><br/>
                                    <input placeholder="New E-mail"/><br/>
                                    <input placeholder="Repeat New E-mail"/>
                                </span>
                            </label>
                            <label>Date of Birth:
                                <input/>
                            </label>
                            <label>Country:
                                <input/>
                            </label>
                            <label>City:
                                <input/>
                            </label>
                            <label>
                                <button onClick={this.handlePass}>Change Password</button>
                                <br/>
                                <span style={{display: this.state.displayPass}}>
                                Current Password <input placeholder="Type your Password"/> <br/>
                                New Password <input placeholder="Type New Password"/> <br/>
                                Repeat New Password <input placeholder="Repeat New Password"/>
                                </span>
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