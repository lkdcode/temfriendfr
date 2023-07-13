import React from "react";
import { useNavigate } from "react-router-dom";

import TempAlbumContent from "../album/TempAlbumContent";

import "../../../scss/container/album/TempAlbumContainer.scss";

const TempAlbumContainer = () => {
  const navigate = useNavigate();
  //TODO
  const testSize = 49;

  // 상태에 따라서 히든으로
  // npm install react-router-dom
  // navigate 경로 하고 replace 가 뒤로가기 true로 방지
  // navigate or Link
  // 지금은 뷰를 눌렀을 때니까
  // Ex 로그인 박스 눌렀을 때는 Link
  // 원하는 곳으로 보낼 때는 navigate
  // TODO : 라우트할 때 navigate, Link 조건
  // 포탈, 데이지 라이브러리

  const handleAlbumClick = (index) => {
    navigate(`/albums/detail/${index}`);
  };

  return (
    <>
      <div className="album-body-container">
        {Array.from(Array(testSize), (_, index) => (
          <TempAlbumContent
            index={index}
            key={index}
            onClick={() => handleAlbumClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default TempAlbumContainer;
