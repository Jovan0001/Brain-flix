import { useState } from "react";
import Header from "./components/Header/Header";
import VideoBlock from "./components/Video block/videoblock";
import Mohan from "./assets/Images/Mohan-muruge.jpg";
import Videos from "./data/video-details.json";
import VideoDetails from "./components/video/video.jsx";
import VideoSideBar from "./components/Videosection/Videosection";
import Comments from "./components/Commentssection/Commentssection";
import "./App.scss";

function App() {
  const avatar = Mohan;
  const[SideBar] = useState(Videos)
  const [video, setVideo] = useState(SideBar[0]);

  const clickHandler = (id) => {
    const selectedVideo = SideBar.find((vids) => vids.id ===id);
    setVideo(selectedVideo);
  };



  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedTimeStamp = date.toLocaleDateString();
    return formattedTimeStamp;
  };

  return (
    <div>
      <Header avatar={avatar} />
      <main className="main">
        <VideoBlock video= {video} />
        <section className="main-section">
          <div className="main-section__divider">
            <VideoDetails video={video} formatTimeStamp={formatTimeStamp}/>
            <Comments 
            video={video}
            formatTimeStamp={formatTimeStamp}
            avatar={avatar}
            />
          </div>
          <VideoSideBar SideBar={SideBar} clickHandler={clickHandler} />
        </section>
      </main>
    </div>
  );
}
export default App;