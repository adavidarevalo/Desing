import React from 'react'
import '../../styles/shared/Contact.scss'
import { Link } from 'react-router-dom'

const Contact = () => {
    return(
        <section className='HomeContact'>
            <h3>Interested in doing a project together?</h3>
            <div></div>
            <Link
            className='BottonWhite'
            to='/contact'>Contact Me</Link>
        </section>
    )
}

export default Contact