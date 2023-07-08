import React, { useState } from "react";

import TempAlbumContent from '../album/TempAlbumContent';
import TempAlbumDetailView from "./TempAlbumDetailView";

import '../../../scss/container/album/TempAlbumContainer.scss';

const TempAlbumContainer = () => {

  const testSize = 50;

  const [showDetailView, setShowDetailView] = useState(false);

  const clickHandler = () => {
    if (showDetailView === true) {
      setShowDetailView(false);
      return;
    }
    setShowDetailView(!showDetailView);
  }

  return (
    <>

      {showDetailView && <TempAlbumDetailView />}
      
      {/* {!showDetailView &&   */}
        <div className="album-body-container">
          {Array.from(Array(testSize), (_, index) => (
            <TempAlbumContent key={index} onClick={clickHandler} />
          ))}

        </div>
      {/* | */}
    </>
  )
}

export default TempAlbumContainer