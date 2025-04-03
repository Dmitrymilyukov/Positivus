import "./Header.css";
import logo from '../assets/img/logo.png'

function Menu() {
  return (
    <>
        <div className="header">
          <div className="header__box">
            <div className="header__box-logo">
              <img className="header__box-logo-img" src={logo} alt="" />
            </div>
          </div>

                <nav className="header__nav">
                <a className="header__nav-a" href="">About us</a>
                <a className="header__nav-a" href="">Services</a>
                <a className="header__nav-a" href="">Us cases</a>
                <a className="header__nav-a" href="">Princing</a>
                <a className="header__nav-a" href="">Blog</a>
                </nav>
                <div className="header__btn">
                    <button className="header__btn-button">
                        Request a quote
                    </button>
                </div>
        </div>
    </>
  );
}
        
export default Menu;
