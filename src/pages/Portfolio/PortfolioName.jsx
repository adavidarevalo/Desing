import React, {useState, useEffect} from 'react'
import { GetElement } from '../../data'
import BackNext from './components/BackNext'
import Contact from '../../components/Shared/Contact'
import '../../styles/Portfolio/PortfolioName.scss'

const PortfolioName = (props) =>{
    const [data, setDate] = useState()
    const DataContainer = () => {
        const { name } = props.match.params
        setDate(GetElement(name))
    }
    useEffect(() => {
        DataContainer()
    }, [props.match.params])

    return(
        <main>
            <section className='NameContainer'>
            <img src={data && data[0].images.first} alt='ImagePage'/>
            <div className='NameElements'>
                <div>
                    <h3>Insure</h3>
                    <p>{data && data[0].paragraph}</p>
                    <p className='NameGreen'>Interaction Design / Front End Development</p>
                    <p className='NameGreen'>HTML / CSS / JS</p>
                    <button>Visit Website</button>
                </div>
                <div className='NameFlex'>
                    <div>
                        <h3>Project Background</h3>
                        <p>{data && data[0].project}</p>
                    </div>
                    <div className='NameImages'>
                        <h3>Static Previews</h3>
                        <img src={data && data[0].images.second} alt='Previews'/>
                        <img src={data && data[0].images.third} alt='Website'/>
                    </div>
                </div>
            </div>
            </section>
            <BackNext LinkContainer={data && data[0].Link}/>
            <Contact/>
        </main>
    )
}

export default PortfolioName