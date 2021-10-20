import React from 'react'
import footerLogo from '../../../assets/images/footerLogo.svg'
import github from '../../../assets/images/icons/github.svg'
import linkedin from '../../../assets/images/icons/linkedin.svg'
import twitter from '../../../assets/images/icons/twitter.svg'
import '../../../styles/Layout/Footer.scss'

const Footer = () => {
    return(
        <footer>
            <div className='FooterContainer'>
                <img src={footerLogo} alt='Logo'/>
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
                        <img src={linkedin} alt='Linkedin'/>
                    </a>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://github.com/adavidarevalo'>
                        <img src={twitter} alt='Twitter'/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer