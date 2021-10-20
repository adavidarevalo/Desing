import React from 'react'
import '../../../styles/Portfolio/PageContainer.scss'
import { Link } from 'react-router-dom'

const PageContainer = ({item}) => {
    const {title, paragraph, img, grid} = item
    console.log('grid ', grid)
    return(
        <div className={grid ? 'PageContainerElement GridContainer' : 'PageContainerElement'}>
            <img src={img} alt='Page'/>
            <div>
                <h3>{title}</h3>
                <p>{paragraph}</p>
                <Link 
                to={`/portfolio/${title}`}>View Project</Link>
            </div>
        </div>
    )
}

export default PageContainer