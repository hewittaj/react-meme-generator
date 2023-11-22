import React from 'react'
import data from '../memesData'

function Meme() {
    const [memeImage, getMemeImage] = React.useState("")

    function getRandomImage() {
        const dataLength = data.data.memes.length
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * dataLength)
        const url = memesArray[randomNumber].url
        getMemeImage(prevUrl => url)
    }

    return (
        <main className='main-content'>
            <div className='form'>
                <div className='form-inputs'>
                    <input type='text' className='input-styling'></input>
                    <input type='text' className='input-styling'></input>
                </div>
                <button onClick={getRandomImage} className='form-button'>
                Get a new meme image
                </button>
            </div>
            <img src={memeImage} className='meme-img'/>
        </main>
    )
}

export default Meme