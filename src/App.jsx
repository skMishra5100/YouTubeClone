import Header from './assets/components/Header'
import Sidebar from './assets/components/Sidebar'
import { useState,React } from 'react'
import Home from './pages/Home'
import "./App.css"
import "./pages/responsive.css";
import YTContext from './assets/components/context'


const App = () => {
  const [current, setcurrent] = useState(true);
  const [category, setcategory] = useState(0);

  const ViewConvert=(view)=>{
    if(view>=1000000){
        return Math.floor(view/1000000)+"M";
    }else if(view>=1000){
    return Math.floor(view/1000)+"K";
    }else{
        return view;
    }
    }

    
  return (
    <div>
      <YTContext.Provider
        value={{
          current,
          setcurrent,
          category,
          setcategory,
          ViewConvert,
        }}> 
        <Header />
        <div className="mobile-sidebar">
        <Sidebar />
         <Home />

        </div>
      </YTContext.Provider>
    </div>

  )
}

export default App








