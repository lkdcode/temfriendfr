import React from "react";

import '../../../scss/container/album/TempAlbumContent.scss';

const TempAlbumContent = () => {
  return (
    <>
      <div className="album-container">

        <div className="album-picture">
          사진
        </div>

        <div className="album-title">
          title
        </div>

        <div className="album-content">
          content
        </div>

        <div className="album-sub-box">

          <div className="album-like">
            like
          </div>

          <div className="album-replycount">
            replycount
          </div>

          <div className="album-date">
            date
          </div>

        </div>

      </div>
    </>
  )
}

export default TempAlbumContent