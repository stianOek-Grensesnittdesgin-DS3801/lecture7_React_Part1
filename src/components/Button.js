import React, {useState} from 'react'
import PropTypes from 'prop-types';

const Button = ({callback, button, button2, loggedin, callbackLogout}) => {
    const [loginMessage, setLoginMessage] = useState("");

    const handleLoginChange = (e) => {
        setLoginMessage(e.target.value)
    }

    const message = "Du er nå logget inn"
    return (
        <div>
            <input onChange={handleLoginChange} type="text" />
            <button onClick={() => callback(message)} >{button}</button>
            <button onClick={() => callbackLogout()}>{button2}</button>
            {loggedin === true ?
            <div style={{color: "white"}}>Du er nå logget inn, {loginMessage}</div>
            : 
            <div>Du er nå logget ut. Skriv inn ditt navn for å logge inn</div>
            }
            
        </div>
    )
}

Button.propTypes = {
    button: PropTypes.string.isRequired
}

export default Button
