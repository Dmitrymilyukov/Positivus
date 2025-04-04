import "./Header.css";
import logo from "../assets/img/logo.png";

function Menu() {
  return (
    <>
      <div className="header">
        <div className="header__box">
          <div className="header__box-logo">
            <img className="header__box-logo-img" src={logo} alt="" />
          </div>
          <div className="header__box-menu">
            <nav className="header__box-menu-nav">
              <a className="header__box-menu-nav-a" href="">About us</a>
              <a className="header__box-menu-nav-a" href="">Services</a>
              <a className="header__box-menu-nav-a" href="">Use cases</a>
              <a className="header__box-menu-nav-a" href="">Pricing</a>
              <a className="header__box-menu-nav-a" href="">Blog</a>
            </nav>
            <div className="header__box-menu-btn">
              <button className="header__box-menu-btn-item">
                Request a quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
