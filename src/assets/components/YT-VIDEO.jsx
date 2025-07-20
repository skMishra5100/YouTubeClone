import { useState, useEffect, useContext } from "react";
import "./YT.css"
import YTContext from "./context";
import { Link } from "react-router-dom";

const API_KEY = "AIzaSyALL0K30xdZL90XXTKG7zOG3ps4S7wPioE";

const YTVIDEO = () => {

    const {category,ViewConvert}=useContext(YTContext);
    
    const [apiData, setApiData] = useState(null);

    const YTAPICALL = async () => {
        const APIDATA = fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`);
        
        await APIDATA.then((response)=>response.json()).then((DATA)=>(setApiData(DATA.items)));      
        
    }

    useEffect(() => {
        YTAPICALL();
    }, [category]);
    return (
        <>
            {(apiData ? apiData.map((DATA, index) => (
                <div className="YT-CARD" key={index}>
                  <Link to={`/video/${DATA.snippet.categoryId}/${DATA.id}`}> <img src={DATA.snippet.thumbnails.medium.url} /></Link>
                    <h2>{DATA.snippet.title.slice(0,45)}</h2>
                    <div className="YT-like">
                                            <p>{ ViewConvert(DATA.statistics.viewCount)} views</p>
                        <p>{ViewConvert(DATA.statistics.likeCount)} likes</p>
                    </div>
                </div>
                
            )): <div id="loader1"></div>
            )}
        </>
    );
};

export default YTVIDEO