import "./UploadPage.scss";


function Upload(props) {
  return (
    <div className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__videocontainer">
        <div className="upload __titlecontainer">
          <h2 className="upload__title">VIDEO THUMBNAIL</h2>
          <div className="upload__image">
          </div>
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
          <button className="upload__buttontwo">CANCEL</button>
        </div>
      </div>
      );
}
      export default Upload;


