import "./Textsection.scss";
import Mohan from "../../assets/Images/Mohan-muruge.jpg";
const avatar = Mohan;


const Textarea = ({ title, btn }) => {
  return (
    <section className="textarea">
      <div className="textarea__avatar">
        <img src={avatar} alt="User Avatar" className="textarea__img"/>
      </div>

      <div className="textarea__container">
        <h4 className="textarea__title">{title}</h4>
        <form className="textarea__content">
          <textarea className="textarea__comments" name="comment" placeholder="Add new comment" rows="4" />
          <button className="textarea__button" type="submit">
            {btn}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Textarea;