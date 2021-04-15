import React, { Component } from 'react';
import './SignUp.css';
import axios from 'axios';

class SignUp extends Component {

    state = {
            email: "",
            password: "",
    }

    profileImg = () => {
        alert("Hello")
    }

    userReagister = (e) => {
        e.preventDefault();
        const { email, password} = this.state
        console.log(email, password )
        
        axios.post('https://reqres.in/api/register', this.state)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });

    }


    render() {
        return (
            <section className="login-form" style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/images/negameback.jpg')`
            }}>

                <div className="login-inner ">
                    <div className="container h-100">
                        <div className="row align-items-center justify-content-center h-100">
                            <div className="col-sm-8">
                                <img src={process.env.PUBLIC_URL + '/images/negamelogologin.png'} className="img-fluid" alt="en Logo" />
                                <div className="profile-thumb"></div>
                                <form onSubmit={this.userReagister}>
                                    <h3 className="text-white mb-2"><b> Sign Up</b></h3>
                                    <div className="porile_img">
                                        <label for="profileImgUpload">
                                            <img src={process.env.PUBLIC_URL + '/images/profilephoto.png'}
                                            className="img-fluid" alt="en Logo" />
                                            <input type="file" accept="image/*" id="profileImgUpload" multiple="false" className="form-control custom-profile-upload" />
                                        </label>
                                        
                                    </div>

                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Full Name" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                    </div>
                                    {/* <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Mobile(optional)" onChange={(e) => { this.setState({ mobile: e.target.value }) }} />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => { this.setState({ pwconfirm: e.target.value }) }} />
                                    </div> */}

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block rounded-pill" >Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        );
    }
}

export default SignUp;