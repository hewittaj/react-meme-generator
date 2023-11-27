import React from 'react'
import data from '../memesData'

function Meme() {
    const [meme, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setMemeImages] = React.useState(data)

    function getRandomImage() {
        const dataLength = allMemeImages.data.memes.length
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * dataLength)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMeme => {
            return {...prevMeme,
            randomImage: url}
        })
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
            <img src={meme.randomImage} className='meme-img'/>
        </main>
    )
}

export default Meme