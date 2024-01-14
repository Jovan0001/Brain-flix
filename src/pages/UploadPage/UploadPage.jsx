import "./UploadPage.scss";
import videoPic from "../../assets/Images/Upload-video-preview.jpg";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Upload() {

  const API_URL = "http://localhost:5050";

  const [data, setData] = useState({
    title: '',
    description: '',
  })

  const navigate = useNavigate();

  const uploadVideo = async (e) => {
      
    const title = data.title;
    const description = data.description;
console.log(description);

    if (title && description) {
      try{
        await axios.post(API_URL, { title , description});
        alert("video was uploaded");
        // navigate("/")
      }
      catch(e){
        console.log(e)
      }
    }

  }

  return (
    
    <div className="upload">
     
      <h1 className="upload__heading">Upload Video</h1>
      <hr></hr>
      <div className="upload__videocontainer">
        <div className="upload __titlecontainer">
          <h5 className="upload__title">VIDEO THUMBNAIL</h5>
          
       <img className="upload__image" src={videoPic} alt="logo" />
        </div>
        <form className="upload__form">
          <h5 className="upload__headingtwo">TITLE YOUR VIDEO</h5>
          <textarea className="upload__textone"
            cols="50"
            name="title"
            onChange={(e)=>setData({...data, title: e.target.value})}
            placeholder="Add a title to your video">
          </textarea>
          <h5 className="upload__description">
            ADD A VIDEO DESCRIPTION
          </h5>
          <textarea
            className="upload__texttwo"
            rows="5"
            cols="50"
            name="description"
            onChange={(e)=>setData({...data, description: e.target.value})}
            placeholder="Add a description to your video">
          </textarea>
        </form>
      </div>
      <div className="upload__button" >
        <button className="upload__buttonone" onClick={() => uploadVideo()}>PUBLISH</button>
      <Link to="/">
        <button className="upload__buttontwo">CANCEL</button>
      </Link>
      </div>
    </div>
  );
}
export default Upload;


