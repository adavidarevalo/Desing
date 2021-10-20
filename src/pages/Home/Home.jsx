import React from 'react'
import WebSite from './components/WebSite'
import AboutMe from './components/AboutMe'
import Contact from '../../components/Shared/Contact'
import '../../styles/Home/Main.scss'

const Home = () => {
    return(
        <main>
            <WebSite/>
            <AboutMe/>
            <Contact/>
        </main>
    )
}

export default Home