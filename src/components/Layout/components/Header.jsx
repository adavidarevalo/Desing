import React, {useState} from 'react'
import logo from '../../../assets/images/logo.svg'
import menu from '../../../assets/images/icons/menu.svg'
import close from '../../../assets/images/icons/close.svg'
import '../../../styles/Layout/Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    const [ManuChange, setMenuChange] = useState('menuContainer')
    const menuChanged = () => {
        if(ManuChange.includes('open')){
            setMenuChange('menuContainer')
        } else {
            setMenuChange('menuContainer open')
        }
    }
    return(
        <>
        <header>
            <Link to='/'>
                <img 
                className='LogoIcon'
                src={logo} alt='Logo'/>
            </Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact Me</Link>
            </nav>
            <div onClick={menuChanged}>
                <img src={ManuChange.includes('open') ?close :menu} alt='Menu'/>
            </div>
        </header>
        <div className={ManuChange}>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact Me</Link>
            </div>
        </div>
        </>
    )
}

export default Header