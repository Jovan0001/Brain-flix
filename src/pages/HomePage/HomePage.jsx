import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
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
      // const response2 = await axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=jimmy`)

      // setVideo(response2.data)
    }
    fetchData();
  }, [])

  useEffect (()=> {
    const videoData = async () => {
      const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=jimmy`)
      
      setVideo(response.data)
  

    }
    videoData()
  },[params.id])

  // not using click handler this sprint, please see review from yesterday for params id, useEffect
 
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
          <VideoSideBar sideBar={SideBar} video={video}/>
        </section>
      </main>
    </div>
  );
}
export default HomePage;