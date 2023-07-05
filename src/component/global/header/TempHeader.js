import react from "react";

import '../../../scss/global/header/TempHeader.scss';

const Header = () => {

  return (
    <>
      <div className="header-container">
        <div className="header-box">
          <div className="header-title">
            TemFriend
          </div>
            <div className="header-nav-box">
              <div className="header-home">
                home
              </div>
              <div className="header-menu1">
                Menu1
              </div>
              <div className="header-menu2">
                Menu2
              </div>
              <div className="header-menu3">
                Menu3
              </div>
              <div className="header-login">
                Login
              </div>
            </div>
        </div>
      </div>    
    </>
  )

}

export default Header