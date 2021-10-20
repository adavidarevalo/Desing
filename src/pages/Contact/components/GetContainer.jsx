import React from 'react'
import github from '../../../assets/images/icons/github.svg'
import twitter from '../../../assets/images/icons/twitter.svg'
import linkedin from '../../../assets/images/icons/linkedin.svg'

const GetContainer = () => {
    return(
        <section className='GetContainer'>
            <h2>Get in Touch</h2>
            <div>
                <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
                <div>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://github.com/adavidarevalo'>
                        <img src={github} alt='Github'/>
                    </a>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://github.com/adavidarevalo'>
                        <img src={twitter} alt='Twitter'/>
                    </a>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://github.com/adavidarevalo'>
                        <img src={linkedin} alt='Linkedin'/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default GetContainer