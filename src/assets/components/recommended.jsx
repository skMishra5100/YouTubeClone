import React, { useContext, useEffect, useState } from 'react'
import "./recommended.css"
import YTContext from './context';
import { Link } from 'react-router-dom';

const Recommended = ({categoryID}) => {
    const {ViewConvert, API_KEY } = useContext(YTContext);
    const [apiData,setApiData]=useState(null);

 

    const YTAPICALL = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=35&regionCode=US&videoCategoryId=${categoryID}&key=${API_KEY}`);

            const data = await response.json();
            setApiData(data.items);
           
        } catch (error) {
            console.error("Error fetching YouTube API data:", error);
        }
    };

    useEffect(() => {
        YTAPICALL();
    }, [categoryID]);

    return (
        <div className="right-recommended-video-51">
            {(apiData ? apiData.map((DATA, index) => (
               <Link className='link-51' to={`/video/${DATA.snippet.categoryId}/${DATA.id}`}>   <div className="YT-CARD-51" key={index}>
                    <img id='IMG' src={DATA.snippet.thumbnails.medium.url} />
                    <div className="flex">
                        <h2>{DATA.snippet.title.slice(0,45)}</h2>
                        <p>{ViewConvert(DATA.statistics.viewCount)} views</p>
                    </div>
                </div>
                </Link>
                

            )):<div id="loader"></div>
            )}
        </div>

    )
}

export default Recommended

