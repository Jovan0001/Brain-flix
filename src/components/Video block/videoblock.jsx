import "./videoblock.scss";


const VideoBlock = ({ video }) =>{
  const { image } = video;
  return(
    <div className="video-main">
      <video className="video-main__link" controls poster={image}></video>
    </div>
  );
};

export default VideoBlock;