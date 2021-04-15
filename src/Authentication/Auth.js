import React from 'react'
import { Redirect } from 'react-router'

export default function Auth(props) {
    const Comp  = props.Com;
    let auth = localStorage.getItem("user")
    
    return (
        <div>    
           {auth ? <Comp /> :   <Redirect to="/login"> </Redirect> }
        </div>
    )
}
