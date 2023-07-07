import react from "react";

import '../../../scss/container/album/TempAlbumReply.scss';

const TempAlbumReply = ( { replyDetail } ) => {




  return (

    <>  
      <div className="reply-container">
       
        <div className="reply-upper">

          <div className="reply-profile"></div>

        </div>
          
        <div className="reply-lower">
          <div className="reply-profile-box">

            <div className="reply-nickname">reply-nickname</div>
            <div className="reply-create-dt">2023.07.10 15:12</div>
            <div className="reply-like-btn">👍</div>

          </div>
          
          <div className="reply-content">국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여<br/>국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.</div>

        </div>

      </div>
    </>
  )

}

export default TempAlbumReply