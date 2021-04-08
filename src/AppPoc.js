import './AppPoc.css';

import {BrowserRouter as Router, Switch, Link, Route} from  'react-router-dom';
import {About} from './components/Pages/About';
import {Faq} from './components/Pages/Faq';
import {Contact} from './components/Pages/Contact';
import { Home } from './components/Pages/Home';
import { Header } from './components/Header/Header';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp'
import React, {Component} from 'react';




class AppPoc extends Component {

  state = {
    fakeLogin: [{ userName: 'ABC'}, { passWord: '1234'}]
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/faq">
              <Faq />
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          <Route path="/login"  component={(props)=> <Login/>}>
              
          </Route>
          <Route path="/sign-up"  component={(props)=> <SignUp/>}></Route>
          </Switch>
        
        </Router>
      </div>
  );
}
}

export default AppPoc;
