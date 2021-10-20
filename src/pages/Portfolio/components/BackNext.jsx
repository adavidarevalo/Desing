import React from 'react'
import arrowLeft from '../../../assets/images/icons/arrowLeft.svg'
import arrowRight from '../../../assets/images/icons/arrowRight.svg'
import '../../../styles/Portfolio/BackNext.scss'
import { Link } from 'react-router-dom'

const BackNext = ({LinkContainer}) => {
    return(
        <section className='BackNextContainer'>
            <Link to={LinkContainer && LinkContainer.next}>
                <img src={arrowLeft} alt='Back Project'/>
                <div>
                    <h4>{LinkContainer && LinkContainer.next}</h4>
                    <p>Previous Project</p>
                </div>
            </Link>
            <Link to={LinkContainer && LinkContainer.back}>
                <div>
                    <h4>{LinkContainer && LinkContainer.back}</h4>
                    <p>Previous Project</p>
                </div>
                <img src={arrowRight} alt='Next Project'/>
            </Link>
        </section>
    )
}

export default BackNext 