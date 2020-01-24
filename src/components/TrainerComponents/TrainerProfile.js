import React from 'react';
import {getFromStorage} from "../../utils/storage";

class ImageUploadX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
        };
    }
    handleSubmit(e) {
        //Using fetch() upload the avatar images on server
        const formData = new FormData();
        formData.append('avatar', this.state.file);
            fetch("http://localhost:3000/users/"+1+"/avatar",{
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    "Content-Type":"multipart/form-data"
                }
            }).then(response => {
                response.json();
            }).catch(
                error => console.log(error)
            );
            this.setState({
                edit:false
            });
            console.log('handle uploading-', this.state.file);
    }
    handleImageChange(e) {
        //Uploader for avatar images
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
            $imagePreview = (this.props.avatarImg !== undefined ?  <img src={this.props.avatarImg}/>
                :<div className="previewText">Please select an Avatar</div>);
        }

        return (
            <div className="previewComponent">
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <button className="submitButton"
                            type="submit"
                            onClick={(e)=>this.handleSubmit(e)}>Upload
                    </button>
                    <input className="fileInput"
                           type="file"
                           onChange={(e)=>this.handleImageChange(e)} />
                </form>
            </div>
        )
    }
}
//Component General Information
class TrainerProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            edit: false,
            displayEmail: 'none',
            displayPass: 'none',
            id: '',
            avatar: '',
            firstName: '',
            lastName: '',
            email: '',
            dateOfBirth: '',
            country: '',
            city: '',
            location: '',
            foodType: '',
            goal: '',
            description: '',
            medicalIssues: '',
            training: ''
        };
    }
    componentDidMount() {
        //Using Fetch() sync the profile page with Database users.json
        const obj = getFromStorage('the_pt_app');
        const {userID}=obj;
        this.setState({id: userID});
        const loadUserInfo= async ()=> {
            try {
                const response = await fetch("http://localhost:8080/api/userInfo?id=" +userID);
                let json = await response.json();
                    json = json[0];
                 await setUserInfo(json);
            }
             catch (err) {
                console.log("Error: "+err)
            }
         };
         loadUserInfo();
         const setUserInfo=(param)=>{
                 this.setState({
                     avatar: param.avatar,
                     trainer: param.trainer,
                     firstName: param.firstName,
                     lastName: param.lastName,
                     email: param.email,
                     dateOfBirth: param.dateOfBirth,
                     country: param.country,
                     city: param.city,
                     location: param.location,
                     foodType: param.foodType,
                     goal: param.goal,
                     description: param.description,
                     medicalIssues: param.medicalIssues,
                     training: param.training
                 });
         }
    }
    //Change function to edit General information state
    handleChange = (event) => {
      this.setState({
            [event.target.name]: event.target.value
      });
    };
    //Make Profile Page Editable
    enableEditing = (event) => {
        this.setState({
            edit:true
        });
    };
    cancelEditing = (event) => {
        this.setState({
            edit:false
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

        const dataSend = {
            avatar: this.state.avatar,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            dateOfBirth: this.state.dateOfBirth,
            country: this.state.country.trim(),
            city: this.state.city.trim(),
            location: this.state.location,
            foodType: this.state.foodType,
            goal : this.state.goal,
            description: this.state.description.trim(),
            medicalIssues: this.state.medicalIssues.trim(),
            training: this.state.training.trim()
        };
        fetch("http://localhost:8080/api/updateUserInfo?id=" +this.state.id,{
            method: 'POST',
            body: JSON.stringify(dataSend),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => {
            response.json();
        }).catch(
            error => console.log(error)
        );
        this.setState({
            edit: false
        });
    };
    render() {
        return (
            this.state.edit === false ?
                <section id={'memberProfile'}>
                    <article className="generalInformation">
                        <div><div className="imgPreview">
                            <img src={this.state.avatar}/>
                        </div></div>
                        <form>
                            <h1>General Information</h1>
                            <hr/>
                            <label className="buttonEdit">
                                <button onClick={this.enableEditing}>Edit</button>
                            </label>
                            <label>First Name: {this.state.firstName}</label>
                            <label>Last Name: {this.state.lastName}</label>
                            <label> E-mail Address: {this.state.email}</label>
                            <label>Date of Birth: {this.state.dateOfBirth}</label>
                            <label>Country: {this.state.country}</label>
                            <label>City: {this.state.city}</label>
                        </form>
                    </article>
                    <article className="activityInformation">
                        <form><h1>Activity Information</h1>
                            <hr/>
                            <label>Activity Location: {this.state.location}</label>
                            <label>Food Type: {this.state.foodType}</label>
                            <label>My Goal: {this.state.goal}</label>
                            <label>Description: {this.state.description}</label>
                            <label>Health and Medical Issues: {this.state.medicalIssues}</label>
                            <label>Training History: {this.state.training}</label>
                        </form>
                    </article>
                </section>
                :
                <section>
                    <article className="generalInformation">
                        <div> <ImageUploadX avatarImg = {this.state.avatar}/> </div>
                        <form><h1>General Information</h1>
                            <hr/>
                            <label>First Name: {this.state.firstName}
                            </label>
                            <label>Last Name: {this.state.lastName}
                            </label>
                            <label> E-mail Address: {this.state.email}
                                <button onClick={this.handleEmail}>Change E-mail</button><br/>
                                <span style={{display: this.state.displayEmail}}>
                                    <input type='email' placeholder="Type Your E-mail"/><br/>
                                    <input type='email' placeholder="New E-mail"/><br/>
                                    <input type='email' placeholder="Repeat New E-mail"/>
                                </span>
                            </label>
                            <label>Date of Birth:
                                <input type='date' name={'dateOfBirth'} onChange={this.handleChange} value={this.state.dateOfBirth}/>
                            </label>
                            <label>Country:
                                <input type='text' name={'country'} onChange={this.handleChange}
                                       value={this.state.country} placeholder={this.state.country}/>
                            </label>
                            <label>City:
                                <input type='text' name={'city'} onChange={this.handleChange} value={this.state.city}/>
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
                                <select name={'location'}  value={this.state.location} onChange={this.handleChange}>
                                    <option defaultValue={'selected'} hidden>Select</option>
                                    <option value={'Gym'}>Gym</option>
                                    <option value={'Outdoor'}>Outdoor</option>
                                </select>
                            </label>
                            <label>Food Type:
                                <select name={'foodType'} value={this.state.foodType} onChange={this.handleChange}>
                                    <option defaultValue={'selected'} hidden>Select</option>
                                    <option value={'Omnivores'}>Omnivores</option>
                                    <option value={'Vegetarian'}>Vegetarian</option>
                                    <option value={'Vegan'}>Vegan</option>
                                    <option value={'Raw Vegan'}>Raw Vegan</option>
                                    <option value={'Else'}>Else</option>
                                </select>
                            </label>
                            <label>My Goal:
                                <select name={'goal'} value={this.state.goal} onChange={this.handleChange}>
                                    <option defaultValue={'selected'} hidden>Select</option>
                                    <option value={'Lose Weight'}>Lose Weight</option>
                                    <option value={'Increase Weight'}>Increase Weight</option>
                                    <option value={'Bodybuilding'}>Bodybuilding</option>
                                    <option value={'FIT'}>FIT</option>
                                    <option value={'Kinetotherapy'}>Kinetotherapy</option>
                                </select>
                            </label>
                            <label>Description:</label>
                            <textarea name={'description'} placeholder="Describe yourself" rows={8}
                                      value={this.state.description} onChange={this.handleChange}/>
                            <label>Health and Medical Issues:</label>
                            <textarea name={'medicalIssues'} placeholder="Any health or medical issues?" rows={5}
                                      value={this.state.medicalIssues} onChange={this.handleChange}/>
                            <label>Training History:</label>
                            <textarea name={'training'} placeholder="Describe your Training history in few words" rows={5}
                                      value={this.state.training} onChange={this.handleChange}/>
                            <label className="buttonEdit">
                                <button onClick={this.cancelEditing}>Cancel</button>
                                <button onClick={this.updateInfo}>Save</button>
                            </label>
                        </form>
                    </article>
                </section>
        )
    }
}
export {TrainerProfile};