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
            displayPass: 'none',
            loaded: false,
            dataGI: {
                avatar: '',
                trainer: false,
                firstName: '',
                lastName: '',
                email: '',
                dateOfBirth: '',
                country: '',
                city: '',
            },
            dataAI: {
                location: '',
                foodType: '',
                goal: '',
                description: '',
                medicalIssues: '',
                training: ''
            }

        }
    }
    componentDidMount() {
//Using Fetch() sync the profile page with Database users.json
        const url = "http://localhost:3000/users";
        fetch(url,{
            method: 'GET',
            body: JSON.stringify()
        }).then(response => {
            return response.json()
        }).then(json =>{
            json.map(element => {
                this.setState({
                    loaded: true,
                    dataGI: {
                        avatar: element.avatar,
                        trainer: element.trainer,
                        firstName: element.firstName,
                        lastName: element.lastName,
                        email: element.email,
                        dateOfBirth: element.dateOfBirth,
                        country: element.country,
                        city: element.city,
                    },
                    dataAI: {
                        location: element.location,
                        foodType: element.foodType,
                        goal: element.goal,
                        description: element.description,
                        medicalIssues: element.medicalIssues,
                        training: element.training
                    }

                });
            });
        });
    }
    //Change function to edit Activity information state
    handleChangeAI = (event) => {
        this.setState({
            dataAI: {
                [event.target.name]: event.target.value
            }
        });
    };
    //Change function to edit General information state
    handleChangeGI = (event) => {
      this.setState({
         dataGI: {
            [event.target.name]: event.target.value
         }
      });
    };
    //Make Profil Page Editable
    enableEditing = (event) => {
        this.setState({
            edit:true
        });
    };
    //Function for Edit Email Button
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
    //Function for Edit Password Button
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
    //This function allow to Update the information on Database
    updateInfo = (event) =>{

        this.setState({
            loaded: true,
            edit: false
        });
    };
    render() {
        return (
            this.state.edit === false ?
                <section>
                    <article className="generalInformation">
                        <div><div className="imgPreview">
                            <img src={this.state.dataGI.avatar}/>
                        </div></div>
                        <form>
                            <h1>General Information</h1>
                            <hr/>
                            <label className="buttonEdit">
                                <button onClick={this.enableEditing}>Edit</button>
                            </label>
                            <label>First Name: {this.state.dataGI.firstName}</label>
                            <label>Last Name: {this.state.dataGI.lastName}</label>
                            <label> E-mail Address: {this.state.dataGI.email}</label>
                            <label>Date of Birth: {this.state.dataGI.dateOfBirth}</label>
                            <label>Country: {this.state.dataGI.country}</label>
                            <label>City: {this.state.dataGI.city}</label>
                        </form>
                    </article>
                    <article className="activityInformation">
                        <form><h1>Activity Information</h1>
                            <hr/>
                            <label>Activity Location: {this.state.dataAI.location}</label>
                            <label>Food Type: {this.state.dataAI.foodType}</label>
                            <label>My Goal: {this.state.dataAI.goal}</label>
                            <label>Description: {this.state.dataAI.description}</label>
                            <label>Health and Medical Issues: {this.state.dataAI.medicalIssues}</label>
                            <label>Training History: {this.state.dataAI.training}</label>
                        </form>
                    </article>
                </section>
                :
                <section>
                    <article className="generalInformation">
                        <div> <ImageUploadX/> </div>
                        <form><h1>General Information</h1>
                            <hr/>
                            <label>First Name: {this.state.dataGI.firstName}
                            </label>
                            <label>Last Name: {this.state.dataGI.lastName}
                            </label>
                            <label> E-mail Address: {this.state.dataGI.email}
                                <button onClick={this.handleEmail}>Change E-mail</button><br/>
                                <span style={{display: this.state.displayEmail}}>
                                    <input type='email' placeholder="Type Your E-mail"/><br/>
                                    <input type='email' placeholder="New E-mail"/><br/>
                                    <input type='email' placeholder="Repeat New E-mail"/>
                                </span>
                            </label>
                            <label>Date of Birth:
                                <input type='date' name={'dateOfBirth'} onChange={this.handleChangeGI} value={this.state.dataGI.dateOfBirth}/>
                            </label>
                            <label>Country:
                                <input type='text' name={'country'} onChange={this.handleChangeGI}
                                       value={this.state.dataGI.country} placeholder={this.state.dataGI.country}/>
                            </label>
                            <label>City:
                                <input type='text' name={'city'} onChange={this.handleChangeGI} value={this.state.dataGI.city}/>
                            </label>
                            <label>
                                <button onClick={this.handlePass}>Change Password</button>
                                <br/>
                                <span style={{display: this.state.displayPass}}>
                                Current Password <input type={'password'} placeholder="Type your Password"/> <br/>
                                New Password <input type={'password'} placeholder="Type New Password"/> <br/>
                                Repeat New Password <input type={'password'} placeholder="Repeat New Password"/>
                                </span>
                            </label>
                        </form>
                    </article>
                    <article className="activityInformation">
                        <form><h1>Activity Information</h1>
                            <hr/>
                            <label>Activity Location:
                                <select name={'location'} value={this.state.dataAI.location} onChange={this.handleChangeAI}>
                                    <option selected hidden>Select</option>
                                    <option value={'Gym'}>Gym</option>
                                    <option value={'Outdoor'}>Outdoor</option>
                                </select>
                            </label>
                            <label>Food Type:
                                <select name={'foodType'} value={this.state.dataAI.foodType} onChange={this.handleChangeAI}>
                                    <option selected hidden>Select</option>
                                    <option value={'Omnivores'}>Omnivores</option>
                                    <option value={'Vegetarian'}>Vegetarian</option>
                                    <option value={'Vegan'}>Vegan</option>
                                    <option value={'Raw Vegan'}>Raw Vegan</option>
                                    <option value={'Else'}>Else</option>
                                </select>
                            </label>
                            <label>My Goal:
                                <select name={'goal'} value={this.state.dataAI.goal} onChange={this.handleChangeAI}>
                                    <option selected hidden>Select</option>
                                    <option value={'Lose Weight'}>Lose Weight</option>
                                    <option value={'Increase Weight'}>Increase Weight</option>
                                    <option value={'Bodybuilding'}>Bodybuilding</option>
                                    <option value={'FIT'}>FIT</option>
                                    <option value={'Kinetotherapy'}>Kinetotherapy</option>
                                </select>
                            </label>
                            <label>Description:</label>
                            <textarea name={'description'} placeholder="Describe yourself" rows={8}
                                      value={this.state.dataAI.description} onChange={this.handleChangeAI}/>
                            <label>Health and Medical Issues:</label>
                            <textarea name={'medicalIssues'} placeholder="Any health or medical issues?" rows={5}
                                      value={this.state.dataAI.medicalIssues} onChange={this.handleChangeAI}/>
                            <label>Training History:</label>
                            <textarea name={'training'} placeholder="Describe your Training history in few words" rows={5}
                                      value={this.state.dataAI.training} onChange={this.handleChangeAI}/>
                            <label className="buttonEdit">
                                <button onClick={this.updateInfo}>Save</button>
                            </label>
                        </form>
                    </article>
                </section>
        )
    }
}
export {MemberProfile};