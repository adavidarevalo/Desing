import React from 'react'
import imageHomepageHero from '../../../assets/images/homepage/imageHomepageHero.jpg'
import downArrows from '../../../assets/images/icons/downArrows.svg'
import '../../../styles/Home/WebSite.scss'

const WebSite = () => {
    return(
        <section className='WebSiteContainer'>
            <img src={imageHomepageHero} alt='Computer'/>
            <div>
                <h3> Hey, I’m Alex Spencer and I love building beautiful websites</h3>
                <a href='#AboutMe'><img src={downArrows} alt='downArrows'/>About Me</a>
            </div>
        </section>
    )
}

export default WebSite