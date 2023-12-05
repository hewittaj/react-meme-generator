import React from 'react'
import data from '../memesData'

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setMemeImages] = React.useState(data)

    function getRandomImage() {
        const dataLength = allMemeImages.data.memes.length
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * dataLength)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {...prevMeme,
            randomImage: url}
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme((prevInputFieldsText) => ({
            ...prevInputFieldsText, 
            [name]: value
            })
        )
    }

    return (
        <main className='main-content'>
            <div className='form'>
                <div className='form-inputs'>
                    <input 
                    type='text' 
                    className='input-styling'
                    onChange={handleChange}
                    name='topText'/>
                    <input 
                    type='text' 
                    className='input-styling'
                    onChange={handleChange}
                    name='bottomText'/>
                </div>
                <button onClick={getRandomImage} className='form-button'>
                Get a new meme image
                </button>
            </div>
            <div className='meme'>
              <img src={meme.randomImage} className='meme-img'/>  
              <h2 className='meme-text top'>{meme.topText}</h2>
              <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme