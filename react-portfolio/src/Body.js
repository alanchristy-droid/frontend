import React from 'react'
import "./portfolio.css"
import ProfilePic from"./profile-pic.jpg"
import Footer from './Footer'

export default function Body(){
    return(
        <div className='content-pic'>
            <img id="pic" src={ProfilePic} alt='profile-pic' height="150px" width="150px"/>
            <div className='content'>
                <h1>Hi, I am Alan!</h1>
                <p>Hello Everybody! My name is Alan, I am a BTech Computer Science Engineer, currently working as a frontend engineer at 
                Axelor, Bangalore. I am a programmer so I like the things I have been doing in the company till now. <br /> I am a cross
                between a engineer and a musician and I enjoy both the things I do.
                </p>
                <div className='footer'>
                <Footer />
                </div>
            </div>
        </div>
    )
}