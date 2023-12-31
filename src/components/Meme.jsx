import React from 'react'

function Meme() {
    // States
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    // Functions
    function getRandomImage() {
        const dataLength = allMemes.length
        const randomNumber = Math.floor(Math.random() * dataLength)
        const url = allMemes[randomNumber].url
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

    React.useEffect(
        () => {
           fetch("https://api.imgflip.com/get_memes")
           .then(res => res.json())
           .then(data => setAllMemes(data.data.memes))
        }, []
    )

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