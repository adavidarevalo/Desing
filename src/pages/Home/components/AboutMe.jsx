import React from 'react'
import imageHomepageProfile from '../../../assets/images/homepage/imageHomepageProfile.jpg'
import '../../../styles/Home/AboutMe.scss'
import { Link } from 'react-router-dom'

const AboutMe = () => {
    return(
        <section id='AboutMe' className='AboutMe'>
            <img src={imageHomepageProfile} alt='About Me'/>
            <div className='AboutMeContainer'>
                <h3>About Me</h3>
                <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                <Link
                className='BottonWhite'
                to='/portfolio'>Go to Portfolio</Link>
            </div>
        </section>
    )
}

export default AboutMe