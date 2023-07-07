import React, { useState } from "react";

import TempAlbumContent from '../album/TempAlbumContent';
import TempAlbumDetailView from "./TempAlbumDetailView";

import '../../../scss/container/album/TempAlbumContainer.scss';

const TempAlbumContainer = ( { loopSize } ) => {

  const testSize = 15;

  return (
    <>

      <TempAlbumDetailView />
      

      {/* <div className="album-body-container">

        {Array.from(Array(testSize), (_, index) => (
          <TempAlbumContent key={index} />
        ))}

      </div> */}

    </>
  )
}

export default TempAlbumContainer