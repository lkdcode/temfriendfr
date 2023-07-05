import react from "react";
import TempAlbumContainer from "../../container/album/TempAlbumContainer";

import '../../../scss/global/body/TempBody.scss';

const Body = () => {
  
  const loopSize = 5;

  return (
    <>
      <div className="body-box">
        <TempAlbumContainer loopSize= { loopSize }/>
      </div>
    </>
  )

}

export default Body