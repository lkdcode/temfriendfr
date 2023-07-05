import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

import '../../../scss/container/album/TempAlbumContent.scss';

const TempAlbumContent = () => {

  const [isSolid, setIsSolid] = useState(false);

  const toggleHeartIcon = () => {
    // TODO : 유저가 좋아요를 눌렀는지 확인해서 반영해야함
    setIsSolid(!isSolid);
  };

  return (
    <>
      <div className="album-container">
        
        <img className="album-picture" src='img/testImg.jpg' alt="album" />

        <div className="album-title">
          title
        </div>

        <div className="album-content">
          content
        </div>

        <div className="album-sub-box">

          <div className={`album-like ${isSolid ? 'solid' : 'regular'}`} onClick={toggleHeartIcon}>
            <FontAwesomeIcon icon={isSolid ? solidHeart : regularHeart} />
          </div>

          <div className="album-replycount">
            <FontAwesomeIcon icon={faComment} />
          </div>

          <div className="album-date">
            23.07.06 ~
            <br/>
            &nbsp; 23.07.08
          </div>
        </div>

      </div>
    </>
  )
}

export default TempAlbumContent