import "./Videosection.scss";
import React from 'react';

const VideoSideBar =(props) => {
  return(
    <div className="video-section">
      <h3 className="video-section__header">NEXT VIDEOS </h3>
      <ul className="video-section__list">
       {props.SideBar.map((video) =>(
        <li
        className="video-section__item"
          key={video.id}
          onClick={() => props.clickHandler(video.id)}>
          <div className="video-section__poster">
            <img src={video.image} alt="" className="video-section__link"/>
          </div>
          <div className="video-section__detail">
            <h4 className="video-section__title">{video.title}</h4>
            <p className="video-section__text">{video.channel}</p>
          </div>
        </li>
       ))}
      </ul>
    </div>
  );
};




// function VideoListBlock(props){
//   return(
//     <>
//    <div>
//     {props.Videolist.id}
//    </div>
//     </>
//   );
// }
export default VideoSideBar;