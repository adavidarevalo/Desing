import React from 'react'
import PageContainer from './components/PageContainer'
import { data } from '../../data'
import Contact from '../../components/Shared/Contact'
const Portfolio = () => {
    return(
        <main>
            {data.map(item => <PageContainer item={item}/>)}
            <Contact/>
        </main>
    )
}

export default Portfolio