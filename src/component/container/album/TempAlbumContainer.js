import React, { useState } from "react";

import TempAlbumContent from '../album/TempAlbumContent';
import TempAlbumDetailView from "./TempAlbumDetailView";

import '../../../scss/container/album/TempAlbumContainer.scss';

const TempAlbumContainer = () => {

  const testSize = 50;

  const [showDetailView, setShowDetailView] = useState(false);
  const [content, setContent] = useState({});


  const clickHandler = () => {

    if (showDetailView === true) {
      setShowDetailView(false);
      return;
    }

    setShowDetailView(!showDetailView);
  }

  return (
    <>

      {showDetailView && <TempAlbumDetailView onClick={ clickHandler } content={ content }/>}
      
        <div className="album-body-container">
          {Array.from(Array(testSize), (_, index) => (
            <TempAlbumContent index={index} key={index} onClick={ clickHandler } setContent={ setContent }/>
          ))}
        </div>

    </>
  )
}

export default TempAlbumContainer