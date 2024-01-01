import "./video.scss";



const VideoDetails = ({ video, formatTimeStamp }) => {
  return (
    <section className="video-detail">
      <h1 className="video-detail__heading">{video.title}</h1>
      
      <div className="video-detail__sec">
        <div className="video-detail__list">
          <h4 className="video-detail__item video-detail__item--bold">By {video.channel}</h4>
          <p className="video-detail__item">{formatTimeStamp(video.timestamp)}</p>
        </div>

        <div className="video-detail__list">
          <p className="video-detail__item video-detail__item--eye">{video.views}</p>
          <p className="video-detail__item video-detail__item--heart">{video.likes}
          </p>
        </div>
      </div>

      <div className="video-detail__list">
        <p className="video-detail__description">{video.description}</p>
      </div>
    </section>
  );
};
export default VideoDetails;