import React, { useContext } from 'react'
import "./Sidebar.css"
import YTContext from './context'

const Sidebar = () => {

  const {current,category,setcategory}=useContext(YTContext);

  return (
    <>
      <div style={{ maxWidth: current ? "13vw" : "5vw"}} className='sidebar'>
        <div onClick={()=>setcategory(0)} className="category-1">
          <img className={`${category==0?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=2797&format=png&color=1A1A1A"  />
          {current==true && <p>home</p>}
        </div>
        <div onClick={()=>setcategory(20)} className="category-1">
          <img className={`${category==20?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=7317&format=png&color=000000"  />
          {current==true && <p>gaming</p>}
        </div>
        <div onClick={()=>setcategory(2)} className="category-1">
          <img className={`${category==2?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=16690&format=png&color=000000"  />
         {current==true &&  <p>automobiles</p>}
        </div>
        <div onClick={()=>setcategory(17)} className="category-1">
          <img className={`${category==17?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=9817&format=png&color=000000"  />
          {current==true && <p>sports</p>}
        </div>
        <div onClick={()=>setcategory(24)} className="category-1">
          <img className={`${category==24?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=8062&format=png&color=000000"  />
          {current==true && <p>entertainment</p>}
        </div>
        <div onClick={()=>setcategory(28)} className="category-1">
          <img className={`${category==28?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=9134&format=png&color=000000"  />
          {current==true && <p>technology</p>}
        </div>
        <div onClick={()=>setcategory(10)} className="category-1">
          <img className={`${category==10?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=mpeojql23sni&format=png&color=000000"  />
          {current==true && <p>music</p>}
        </div>
        <div onClick={()=>setcategory(22)} className="category-1">
          <img className={`${category==22?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=58240&format=png&color=000000"  />
          {current==true && <p>blogs</p>}
        </div>
        <div onClick={()=>setcategory(25)} className="category-1">
          <img className={`${category==25?`Active`:``}`} id='img51' src="https://img.icons8.com/?size=100&id=9981&format=png&color=000000"  />
          {current==true && <p>news</p>}
        </div>

      </div>
      <div style={{ maxWidth: current ? "13vw" : "5vw" }} className="sidebar2">
        <div className="category-2">
          {/* <img src="https://img.icons8.com/?size=100&id=7821&format=png&color=1A1A1A"  /> */}
          <img src="https://img.icons8.com/?size=100&id=CxsfjQ9qnPcX&format=png&color=22C3E6"   />
          {current==true && <p>Lorem, ips</p>}
        </div>
        <div className="category-2">
           <img src="https://img.icons8.com/?size=100&id=CxsfjQ9qnPcX&format=png&color=22C3E6"  />
          {current==true && <p>Lorem, ips</p>}
        </div>
        <div className="category-2">
           <img src="https://img.icons8.com/?size=100&id=CxsfjQ9qnPcX&format=png&color=22C3E6"  />
          {current==true && <p>Lorem, ips</p>}
        </div>
        <div className="category-2">
           <img src="https://img.icons8.com/?size=100&id=CxsfjQ9qnPcX&format=png&color=22C3E6"  />
          {current==true && <p>Lorem, ips</p>}
        </div>
        <div className="category-2">
           <img src="https://img.icons8.com/?size=100&id=CxsfjQ9qnPcX&format=png&color=22C3E6"  />
          {current==true && <p>Lorem, ips</p>}
        </div>
      </div>
    </>
  )
}

export default Sidebar
