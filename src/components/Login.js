import React, { useState } from 'react'
import Button from './Button'

const Login = ( {name, color} ) => {
    const [loggedIn, setLoggedIn] = useState(false);


    const buttonClicked = (message) => {
        setLoggedIn(true)
        console.log(message)
        
    }

    const handleLogout = () => {
        setLoggedIn(false)
    }

    return (
        <div style={{textAlign: "center"}}>
            <h3 style={{color: color}}>{ name } are going to have to log in!</h3>
            <Button loggedin={loggedIn} callbackLogout={ handleLogout } callback={ buttonClicked } button="Login" button2="Logout"/>   
        </div>
    )
}

export default Login
