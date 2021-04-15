import './AppPoc.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/Pages/About';
import { Faq } from './components/Pages/Faq';
import { Contact } from './components/Pages/Contact';
import { Home } from './components/Pages/Home';
import { Header } from './components/Header/Header';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Auth from './Authentication/Auth'






class AppPoc extends Component {
  state = {
    isLogin: false
  }

  authentication = (loginStatus) => {
    // console.log(loginStatus)

  }
  render() {

    return (
      <div className="App">
        <Router>
          <Header checkLogin={this.state.isLogin} />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <Auth Com={About} />
            </Route>

            <Route path="/faq">
              <Auth Com={Faq} />
            </Route>
            <Route path="/contact">
              <Auth Com={Contact} />
            </Route>
            <Route path="/login" render={(props) => {
              return <Login {...props} />
            }} >
            </Route>
            <Route path="/sign-up" component={(props) => <SignUp />}></Route>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default AppPoc;
