import "./Videosection.scss";
import React from 'react';
import {Link } from 'react-router-dom';

// todo change click handler to be the react link component, see demo review from yesterday

const VideoSideBar = ({sideBar,video}) => { 

  const updateSideBar = sideBar.filter((side)=>side.id !== video.id)

  return(
    
    <div className="video-section">
      <h3 className="video-section__header">NEXT VIDEOS </h3>
      <ul className="video-section__list">
       {updateSideBar.map((video) =>(
        <li
        className="video-section__item"
          key={video.id}>
          <Link to= {`/videos/${video.id}` } className="lk" >
        
          <div className="video-section__poster">
            <img src={video.image} alt="" className="video-section__link"/>
          </div>
          <div className="video-section__detail">
            <h4 className="video-section__title">{video.title}</h4>
            <p className="video-section__text">{video.channel}</p>
          </div>
          </Link>
        </li>
       ))}
      </ul>
    </div>
  );
};
export default VideoSideBar;