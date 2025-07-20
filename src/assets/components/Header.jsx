import React, { useContext, useEffect, useRef} from 'react'
import YTLOGO from "./vector-circle-youtube-logo-collection-with-flat-design_534308-21669.avif"
import "./Header.css"
import YTContext from './context'
import { Link } from 'react-router-dom'

const Header = () => {

const HeaderRef=useRef(null);
    
const {current,setcurrent}=useContext(YTContext);


useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        HeaderRef.current.classList.add("active51");
      } else {
        HeaderRef.current.classList.remove("active51");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup to avoid memory leaks
    return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  

    
    return (
        <header>
            <nav>
                <div className='header ' ref={HeaderRef}>
                    <div className="YT-logo">
                        <img onClick={()=>setcurrent(!current)} src="https://img.icons8.com/?size=100&id=58RxaWPffZGK&format=png&color=000000" alt="" />
                       <Link to="/"><img id='img' src={YTLOGO}/></Link>
                    </div>
                    <div className="search">
                        <input type="text" id='search' placeholder='Search...'/>
                        <img id='img2' src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="" />
                    </div>
                    <div className="YT-profile">
                        <img id="img3" src="https://img.icons8.com/?size=100&id=VRYwyHtVZn9K&format=png&color=ff2255" alt="" />
                        <img id="img3" src="https://img.icons8.com/?size=100&id=JCtrMfKlpJVk&format=png&color=1A1A1A" alt="" />
                        <img id="img3" src="https://img.icons8.com/?size=100&id=37102&format=png&color=1A1A1A" alt="" />
                        <img id="img3" src="https://img.icons8.com/?size=100&id=7821&format=png&color=1A1A1A" alt="" />
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header

