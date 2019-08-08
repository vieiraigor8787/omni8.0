import React, {useState} from 'react'
import './Login.css'

import Logo from '../assets/logo.svg'

export default function Login() {
    const [username, setUsername] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        console.log(username)
    }


    return(
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <img src={Logo} alt='Tindev' />
            <input 
            placeholder="digite um texto"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    </div>
    )
}