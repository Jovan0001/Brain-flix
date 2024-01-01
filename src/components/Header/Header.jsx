import "./Header.scss";
const Header = (props) => {
  return (

    <header className="header">
      <div className="header__mainimage"></div>
      <nav className="header__nav">
        <form className="header__form">
          <input className="header__input" type="text" placeholder="Search"></input>
          <button className="header__button" type="submit">
            <img className="logo" src="" alt="" />
            UPLOAD
          </button>
        </form>
      </nav>
      <div className="header__avatar">
        <img className="header__image" src={props.avatar} alt="Mohan" />
      </div>
    </header>

  );
}
export default Header;