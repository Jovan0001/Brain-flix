import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import VideoBlock from "../../components/Video block/videoblock";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoSideBar from "../../components/Videosection/Videosection";
import Comments from "../../components/Commentssection/Commentssection";
import "../../App.scss";
import axios from "axios";

function HomePage() {
  const [SideBar, setSideBar] = useState([])
  const [video, setVideo] = useState({});

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=jimmy`)
      setSideBar(response.data);
    }
    fetchData();
  }, [])


  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const currentVideoId = params?.id || defaultVideoId;

  useEffect(() => {
    const videoData = async () => {
      const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${currentVideoId}?api_key=jimmy`);

      setVideo(response.data)
    };
    videoData()
  }, [currentVideoId]);



  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedTimeStamp = date.toLocaleDateString();
    return formattedTimeStamp;
  };

  return (
    <div>
      <main className="main">
        <VideoBlock video={video} />
        <section className="main-section">
          <div className="main-section__divider">
            <VideoDetails video={video} formatTimeStamp={formatTimeStamp} />
            <Comments
              video={video}
              formatTimeStamp={formatTimeStamp}
            />
          </div>
          <VideoSideBar sideBar={SideBar} video={video} />
        </section>
      </main>
    </div>
  );
}
export default HomePage;

