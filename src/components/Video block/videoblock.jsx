import "./videoblock.scss";


const VideoBlock = ({ video }) =>{
  console.log(video);
  const poster = video.image;
  return(
    <div className="video-main">
      <video className="video-main__link" controls poster={poster}></video>
    </div>
  );
};

export default VideoBlock;