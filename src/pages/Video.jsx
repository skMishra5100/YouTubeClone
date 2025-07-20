import React, { useEffect, useState } from 'react'
import "./Video.css";
import Header from '../assets/components/Header';
import YTContext from '../assets/components/context';
import { useParams } from 'react-router-dom';
import Recommended from '../assets/components/recommended';

const API_KEY = "AIzaSyALL0K30xdZL90XXTKG7zOG3ps4S7wPioE";
const Video = () => {

  const { videoID, categoryID } = useParams();
  const [category, setcategory] = useState(null);
  const [current, setcurrent] = useState(true);
  const [description, setDescription] = useState(false);
  const [channel, setchannel] = useState(null)
  const [channelId, setchannelID] = useState(null);
  const [YTdetail, setYTdetail] = useState(null);
  const [comment, setComment] = useState(null);

  const { id } = useParams();



  const ViewConvert = (view) => {
    if (view >= 1000000) {
      return Math.floor(view / 1000000) + "M";
    } else if (view >= 1000) {
      return Math.floor(view / 1000) + "K";
    } else {
      return view;
    }
  }


  const apiContent = async () => {
    try {
      const request = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`);
      const accepted = await request.json();
      setYTdetail(accepted.items[0]);
      setchannelID(accepted.items[0].snippet.channelId)
    } catch (error) {
      console.error("Error fetching YouTube API data:", error);
    }
  }

  const CHENNAlAPI = async () => {
    try {
      const channelAPI = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`);

      const channelDATA = await channelAPI.json();
      setchannel(channelDATA.items[0])
    } catch (error) {
      console.error("Error fetching YouTube API data:", error);
    }
  };

  const CommentAPI = async () => {
    try {
      const CommentAPI = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${videoID}&key=${API_KEY}`);

      const commentDATA = await CommentAPI.json();
      setComment(commentDATA.items);
    } catch (error) {
      console.error("Error fetching YouTube API data:", error);
    }
  };


  useEffect(() => {
    CHENNAlAPI();
  }, [channelId]);

  useEffect(() => {
    CommentAPI();
  }, [videoID]);

  useEffect(() => {
    apiContent();
  }, [id])

  return (
    <>
      <YTContext.Provider value={{ current, setcurrent, category, setcategory, ViewConvert, API_KEY }}>
        <Header />
        <div className='play-video'>

          <div className="left-YT-video">
            {<iframe height="400px" width="100%" src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} allow="autoplay"
              allowFullScreen frameBorder="0"/>
            }
            <h3>{YTdetail ? YTdetail.snippet.title : " "}</h3>
            {YTdetail?<div className='video-details'>
              <div className='view-days'>
                <span>{YTdetail ? ViewConvert(YTdetail.statistics.viewCount) : ""}</span>
                <span>{YTdetail ? YTdetail.snippet.publishedAt : ""}</span>
              </div>
              <div className='like-share'>
                <div className='Yt-feacher'>
                  {
                    <img onClick={() => dispatch({ type: "like" })} src={`https://img.icons8.com/?size=100&id=YbNGe7fKEaZV&format=png&color=737373 `} />
                  }
                  <span>{YTdetail ? ViewConvert(YTdetail.statistics.likeCount) : ""}</span></div>
                <div className='Yt-feacher'>  <img onClick={() => dispatch({ type: "dislike" })} src={`https://img.icons8.com/?size=100&id=60712&format=png&color=737373`} /></div>

                <div className='Yt-feacher'><img src="https://img.icons8.com/?size=100&id=11537&format=png&color=737373" /><span></span>share</div>
                <div className='Yt-feacher'><img onClick={() => dispatch({ type: "save" })} src={`https://img.icons8.com/?size=100&id=59740&format=png&color=737373`} /><span></span>Save</div>
              </div>

            </div>:""}



            <hr />
            <div className="channelName">
              <div className="channel-icon">
                {YTdetail?<img src={channel && channel.snippet.thumbnails.medium.url} />:""}
                <div className="fame">
                  <h3>{YTdetail ? YTdetail.snippet.channelTitle : ""}</h3>
                  <span>{channel ? ViewConvert(channel.statistics.subscriberCount) + "" : ""}</span>
                </div>
              </div>

              {YTdetail?<button id='subscribe-btn'>Subscribe</button>:""}
            </div>

            <div className="description">
              <p >{YTdetail ? <>{description == true && <p id='desc' onClick={() => setDescription(!description)}>-show less</p>} {YTdetail.snippet.description.slice(0, 250)} {description == false ? <button id='desc2' onClick={() => setDescription(!description)}>...Read More</button> : YTdetail.snippet.description}
              </> : " "}</p>
            </div>
            <hr />


            <div className="comment-section">
              {comment ?<h3 id='comment-no'>{YTdetail ? ViewConvert(YTdetail.statistics.commentCount) + " comments" : "2000 comment"}</h3>:""}
              {comment ? comment.map((com, index) => (
                <div key={index} className="channel-comment">
                  <div className="comment-icon">
                    <img src={com.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                    <h3>{com ? com.snippet.topLevelComment.snippet.authorDisplayName : "SK-WEB-DEV"}</h3>
                  </div>
                  <div className="comment">
                    {com ? com.snippet.topLevelComment.snippet.textDisplay : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur laudantium odio cupiditate. Eum et reprehenderit assumenda aspernatur obcaecati earum."}

                    <div className="likes">
                      <div className="like-1">
                        <img src="https://img.icons8.com/?size=100&id=YbNGe7fKEaZV&format=png&color=737373" />
                        <span>{com ? ViewConvert(com.snippet.topLevelComment.snippet.likeCount) : "3.4K"}</span>
                      </div>
                      <div className="like-2">
                        <img src="https://img.icons8.com/?size=100&id=60712&format=png&color=737373" />
                      </div>
                    </div>
                  </div>
                </div>
              )):<div id="loader2"></div>}


            </div>
          </div>

          <Recommended categoryID={categoryID} />
        </div>
      </YTContext.Provider>
    </>
  )
}
export default Video
