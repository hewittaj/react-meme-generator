import React from 'react'

function Meme() {
    return (
        <form className='form'>
            <div className='form-inputs'>
                <input type='text' className='input-styling'></input>
                <input type='text' className='input-styling'></input>
            </div>
            <input type='submit' value={'Get a new meme image'} className='form-submit'/>
        </form>
    )
}

export default Meme