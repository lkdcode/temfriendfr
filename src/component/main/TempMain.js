import React from "react";

import TempAlbumContainer from "../container/album/TempAlbumContainer";
import "../../scss/main/TempMain.scss";

// 헤더랑 푸터 빼고

const Main = () => {
  return (
    <>
      <div className="main-container">
        <TempAlbumContainer />
      </div>
    </>
  );
};

export default Main;
