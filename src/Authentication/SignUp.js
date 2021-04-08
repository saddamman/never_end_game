import React, { Component } from 'react';
import './SignUp.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

class SignUp extends Component {
    constructor(props){
        super(props)   
    }
    state = {
        data:{
                name: "",
                email: "",
                mobile: "",
                image: "",
                password: "",
                social_image: "",
                status: "",
                register_type:  "",
                lat:  "",
                lng:  "",
                ip_address:  "",
                device_id:  "",
                fcm_token:  ""
            }
         

      }
      
      
      getUserDetials = () => {
          console.log(this.uploadedImage)
          
      

        
    //    const getEmail = this.state.email;
    //    const getPass = this.state.passWord;
        // if((getEmail !== undefined  && getEmail !== null && getEmail !== '' && getEmail.length >3) && (getPass !== undefined  && getPass !== null && getPass !== '' && getPass.length >3) ){
        //     console.log("Success")
        // }else{
        //     alert("Please Enter valid email or password")
        // }

        
    //     axios({
    //         url: 'http://testdmcconsultancy.com/demo/ne_game/api/user/register',
    //         method: 'post',
            
    //          headers: 
    //             {
    //                 'APPKEY': 'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
    //             }
    //         })
    //         .then(function (response) {
    //             //handle success
    //             console.log(response);
    //         })
    //         .catch(function (response) {
    //             //handle error
    //             console.log(response);
    //         });
        
    axios.post('http://testdmcconsultancy.com/demo/ne_game/api/user/register', {
        firstName: 'Finn',
        lastName: 'Williams'
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
      
    }
 
    
    render(){
        return(
            <section className="login-form" style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/images/negameback.jpg')`
              }}>
               
                <div className="login-inner ">
                    <div className="container h-100">
                        <div className="row align-items-center justify-content-center h-100">
                                <div className="col-sm-8">
                                    <img src={process.env.PUBLIC_URL + '/images/negamelogologin.png'} className="img-fluid"/> 
                                    <div className="profile-thumb"></div>
                                <form>
                                    <h3 className="text-white mb-2"><b> Sign Up</b></h3>
                                <div className="porile_img">
                                    <img src={process.env.PUBLIC_URL + '/images/profilephoto.png'} 
                                    className="img-fluid"/> 
                                    <input type="file" accept="image/*" multiple = "false" className="form-control" />
                                </div>

                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Full Name" onChange={(e) => {this.setState({name:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email 
                                        Address" onChange={(e) => {this.setState({email:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Mobile(optional)" onChange={(e) => {this.setState({mobile:e.target.value})}}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {this.setState({password:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => {this.setState({pwconfirm:e.target.value})}}/>
                                    </div>

                                    <div className="form-group">
                                        <button type="button" className="btn btn-primary btn-lg btn-block rounded-pill" onClick={() => {this.getUserDetials()}}>Sign Up</button>
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