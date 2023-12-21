import logo from "../../BrainFlix-logo.svg";
import "../Header/Header.scss";
import avatar from "../1.jpg"
function  Header() {
  return (
    <header className="header__main">
      <div className="nav__main">
        <img src= {logo} alt="logo" />
        </div>
        <div className="nav__input"><input className="nav__input" type="text" placeholder="search"></input>
        <img src={avatar} className="profileImg" /> 
        </div>
       <button> 
        <img src="http://www.w3.org/2000/svg"
         alt="" />
        UPLOAD
        </button>
    </header>
  );
}
export default Header;