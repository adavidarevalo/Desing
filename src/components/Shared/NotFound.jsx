import React from 'react'
import John404 from '../../assets/images/John404.gif'
import '../../styles/shared/NotFound.scss'

const NotFound = () => {
    return(
        <section className='NotFoundContainer'>
            <img src={John404} alt='Not Found'/>
            <div>
                <h3>404</h3>
                <p>Page Not Found</p>
            </div>
        </section>
    )
}

export default NotFound