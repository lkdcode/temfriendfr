import react from "react";
import { Link } from "react-router-dom";

import '../../../scss/global/header/TempHeader.scss';

const Header = () => {

  const goHome = () => {
    window.location.href='/';
  }

  return (
    <>
      <div className="header-container">
        <div className="header-box">
          <div className="header-title">
              <h1 onClick={goHome}>TemFriend</h1>
          </div>
            <div className="header-nav-box">
              <div className="header-home" onClick={goHome}>
                Home
              </div>
              <div className="header-menu1" onClick={goHome}>
                글보기
              </div>
              <div className="header-menu2" onClick={goHome}>
                달력보기
              </div>
              <div className="header-menu3" onClick={goHome}>
                글쓰기
              </div>
              <div className="header-login" onClick={goHome}>
                Login
              </div>
            </div>
        </div>
      </div>    
    </>
  )

}

export default Header