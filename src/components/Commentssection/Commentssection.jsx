import "./Commentssection.scss";
import Textarea from "../Textsection/Textsection";
import Mohan from "../../assets/Images/Mohan-muruge.jpg";
const avatar = Mohan;


const Comment = ({ comment, formatTimeStamp }) => (
  <li className="comment-main__list" key={comment.id}>
    <div className="comment-main__image"></div>
    <div className="comment-main__main">
      <h4 className="comment-main__item comment-main__item--name">
        {comment.name}
      </h4>
      <p className="comment-main__item comment-main__item--tym">
        {formatTimeStamp(comment.timestamp)}
      </p>
      <p className="comment-main__item comment-main__item--cmt">
        {comment.comment}
      </p>
    </div>
  </li>
);

 
const Comments = ({ video, avatar, formatTimeStamp }) => (
  <div className="comment-main">
    <h3 className="comment-main__title">
      {video.comments && video.comments.length} Comments
    </h3>
    <Textarea title="JOIN THE CONVERSATION" btn="COMMENT" avatar={avatar} />
    <ul className="comment-main__comments">
      {video.comments && video.comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} formatTimeStamp={formatTimeStamp} />
      ))}
    </ul>
  </div>
);
export default Comments;