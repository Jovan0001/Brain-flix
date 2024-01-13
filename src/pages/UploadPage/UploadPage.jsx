import "./UploadPage.scss";
import videoPic from "../../assets/Images/Upload-video-preview.jpg";
import {Link} from "react-router-dom";


function Upload() {
  return (
    
    <div className="upload">
     
      <h1 className="upload__heading">Upload Video</h1>
      <hr></hr>
      <div className="upload__videocontainer">
        <div className="upload __titlecontainer">
          <h5 className="upload__title">VIDEO THUMBNAIL</h5>
          
       <Link to="/"> <img className="upload__image" src={videoPic} alt="logo" /></Link>
        </div>
        <form className="upload__form">
          <h5 className="upload__headingtwo">TITLE YOUR VIDEO</h5>
          <textarea className="upload__textone"
            cols="50"
            placeholder="Add a title to your video">
          </textarea>
          <h5 className="upload__description">
            ADD A VIDEO DESCRIPTION
          </h5>
          <textarea
            className="upload__texttwo"
            Rows="5"
            cols="50"
            placeholder="Add a description to your video">
          </textarea>
        </form>
      </div>
      <div className="upload__button">
        <button className="upload__buttonone">PUBLISH</button>
      <Link to="/">
        <button className="upload__buttontwo">CANCEL</button>
      </Link>
      </div>
    </div>
  );
}
export default Upload;


