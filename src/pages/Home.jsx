import React, { useContext } from 'react'
import YTVIDEO from '../assets/components/YT-VIDEO'
import "./Home.css"
import YTContext from '../assets/components/context'


const Home = () => {

    const {current,category}=useContext(YTContext);
    
    return (
        <div className={current==true?`Homepage`:`Homepage Homepage-sidebar`}>
            <YTVIDEO/> 
        </div>
    )
}
//
export default Home