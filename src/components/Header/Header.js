import React from 'react';
import './Header.css'
import {Link} from  'react-router-dom'

export const Header = (props) => {
    
    return(
         <header className="main-header">
            <nav className="navbar navbar-expand-sm ">
            <div className="container-fluid">
                <div className="logo d-flex justify-content-center align-items-center">
                    <a className="navbar-brand" href="/home"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="En Logo"/>  </a>
                    <span>THE NEVER ENDING (WORD) GAME PRE-SIGN-UP TESTER OFFER</span>
                </div>
              
                
                <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                       <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                  
                    <li className="nav-item">
                         <Link className="nav-link " to="/faq" aria-disabled="true">Faq's</Link>
                    </li>

                    <li className="nav-item">
                         <Link className="nav-link " to="/contact" aria-disabled="true">Contact</Link>
                    </li>
                    <li className="nav-item ml-4">
                         <Link className="login-btn nav-link btn btn-outline-dark px-4" to="/login" aria-disabled="true">Login</Link>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
         </header>
    );
}