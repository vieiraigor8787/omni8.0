import React from 'react'
import './Main.css'

import Logo from '../assets/logo.svg'
import dislike from '../assets/dislike.svg'
import like from '../assets/like.svg'

//recuperar id do usuario e mostrar em tela
export default function Main({ match }){
    return(
        <div className="main-container">
            <img src={Logo} alt='Tindev' />
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/40477878?v=4" />
                    <footer>
                        <strong>Igor Vieira</strong>
                        <p>Programador e Dj nos tempos livres.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="deslike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>    
            </ul>
        </div>
    )
}