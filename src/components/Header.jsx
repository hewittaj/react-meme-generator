import React from 'react';
import trollFace from '/assets/troll-face.svg'

function Header() {
    return (
        <header className='header'>
            <div className='header-left'>
                <img src={trollFace} className='header-img'/>
                <h1 className='white'>Meme Generator</h1>
            </div>
            <div className='header-right'>
                <h2 className='header-project'>React Course - Project 3</h2>
            </div>
        </header>
    )
}

export default Header