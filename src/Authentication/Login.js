import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {  
            email: '',
            password: ''
        }
        
    }
    
   

      submitFrom = (e) => {
            
            const {email, password, isLogin} = this.state
            e.preventDefault() 
            if((email !== undefined  && email !== null && email !== '' && email.length >3) && (password !== undefined  && password !== null && password !== '' && password.length >3) ){
                this.setState({isLogin:true})  
                axios.post("https://reqres.in/api/login", this.state)
                .then(response => {
                    localStorage.setItem("user", response.data.token)
                    this.props.history.push("/")
                }).catch((error) => {
                    console.log(error)
                })
            }else{
                alert("Please Enter valid email or password")
            }

            
            
            console.log(email, password, isLogin)
            
        }
        
    
    
    
    render(){
        let auth = localStorage.getItem("user")
        
        const {email, password} = this.state
        return(
            <section className="login-form" style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/images/negameback.jpg')`
            }}>
            {auth ? <Redirect to="/"> </Redirect> :  null }
                  
                <div className="login-inner ">
                    <div className="container h-100">
                        <div className="row align-items-center justify-content-center h-100">
                                <div className="col-sm-8">
                                    <img src={process.env.PUBLIC_URL + '/images/negamelogologin.png'} className="img-fluid" alt="ne logo"/> 
                                <form onSubmit={this.submitFrom}> 
                                    <h3 className="text-white mb-2"><b> Log in</b></h3>
                                    <div className="form-group">
                                        <input type="email" required className="form-control" name="email" value={email} placeholder="Enter email" onChange={(e) => {this.setState({[e.target.name]:e.target.value})}}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" required className="form-control" name="password" value={password} placeholder="Enter password" onChange={(e) => {this.setState({[e.target.name]:e.target.value})}}/>
                                    </div>
                                    <p className="forgot-password text-right">
                                         <a href="/home">Forgot password?</a>
                                    </p>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block rounded-pill">Login</button>
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