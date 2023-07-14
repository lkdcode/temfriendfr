import React from "react";
import "../../../scss/global/footer/TempFooter.scss";

const TempFooter = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-box">
          <div className="footer-title">
            이 홈페이지는 추억을 연습하는 용도로 제작되었습니다.
          </div>
          <div className="footer-content">hello world!</div>
          <div className="footer-easteregg">1227-0530-0624-0704</div>
          <div className="footer-copy">ⓒ TempFriend All rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default TempFooter;
