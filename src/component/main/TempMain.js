import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import TempAlbumContainer from "../container/album/TempAlbumContainer";
import "../../scss/main/TempMain.scss";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (location.state && location.state.fromAlbumDetail) {
      scrollRef.current.scrollTo(0, location.state.scrollPosition);
    } else {
      scrollPositionRef.current = window.pageYOffset;
    }
  }, [location.state]);

  const handleAlbumClick = (index) => {
    navigate(`/albums/detail/${index}`, {
      state: { fromMain: true, scrollPosition: scrollPositionRef.current },
    });
  };

  const handleGoBack = () => {
    navigate("/", { state: { fromAlbumDetail: true } });
  };
  return (
    <>
      <div className="main-container">
        <TempAlbumContainer
          onClick={handleAlbumClick}
          onGoback={handleGoBack}
        />
      </div>
    </>
  );
};

export default Main;
