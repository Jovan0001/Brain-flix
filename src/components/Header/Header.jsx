import { Link } from "react-router-dom";
import "./Header.scss";
import Mohan from "../../assets/Images/Mohan-muruge.jpg";
const avatar = Mohan;


const Header = (props) => {
  return (
    <header className="header">
      <Link to = "/"><div className="header__mainimage"></div></Link>
      <nav className="header__nav">
        <form className="header__form">
          <input className="header__input" type="text" placeholder="Search"></input>
          <Link to= "/upload" className="header__button" type="submit">
            UPLOAD
          </Link>
        </form>
      </nav>
      <div className="header__avatar">
        <img className="header__image" src={avatar} alt="Mohan" />
      </div>
    </header>

  );
}
export default Header;