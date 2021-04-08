import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)   
    }
    state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      }
    getUserDetials = () => {
       const getEmail = this.state.email;
       const getPass = this.state.passWord;
        if((getEmail !== undefined  && getEmail !== null && getEmail !== '' && getEmail.length >3) && (getPass !== undefined  && getPass !== null && getPass !== '' && getPass.length >3) ){
            console.log("Success")
        }else{
            alert("Please Enter valid email or password")
        }
        // .warn(this.state)
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            // const persons = res.data;
            // this.setState({ persons });
          })
      }
    
    
    render(){
        return(
            <section className="login-form" style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/images/negameback.jpg')`
              }}>
                {/* <img src={process.env.PUBLIC_URL + '/images/banner.jpg'} className="img-fluid"/>   */}
                <div className="login-inner ">
                    <div className="container h-100">
                        <div className="row align-items-center justify-content-center h-100">
                                <div className="col-sm-8">
                                    <img src={process.env.PUBLIC_URL + '/images/negamelogologin.png'} className="img-fluid"/> 
                                <form>
                                    <h3 className="text-white mb-2"><b> Log in</b></h3>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => {this.setState({email:e.target.value})}}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {this.setState({passWord:e.target.value})}}/>
                                    </div>
                                    <p className="forgot-password text-right">
                                         <a href="#">Forgot password?</a>
                                    </p>

                                    <div className="form-group">
                                        <button type="button" className="btn btn-primary btn-lg btn-block rounded-pill" onClick={() => {this.getUserDetials()}}>Login</button>
                                    </div>

                                    <div className="form-group devider position-relative">
                                        <div className="devider-inner"><span>OR</span></div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="form-control text-white btn-facebook" >Facebook</button>
                                    </div>

                                    <div className="form-group">
                                        <button type="button" className="form-control text-white btn-google" >Google</button>
                                    </div>

                                    <div className="form-group">
                                        <Link to="/sign-up" type="button" className="btn btn-link text-white">new user? click here for sign up</Link>
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

export default Login;