import react from "react";
import TempAlbumReply from "./TempAlbumReply.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Routes, Route } from "react-router-dom";
import {
  faHeart as solidHeart,
  faComment,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

import "../../../scss/container/album/TempAlbumDetailView.scss";
import "../../../scss/global/body/TempBody.scss";

const TempAlbumDetailView = ({ onClick, content }) => {
  const navigate = useNavigate();
  // TODO : 사진 및 내용들을 태그에 추가해야 함

  return (
    <>
      <div className="body-box">
        <div className="album-detail-box">
          <div className="album-photos-box">
            <div className="photo-box">
              <div className="photo"></div>
            </div>
          </div>

          <div className="album-main-content">
            <div className="writer-box">
              <div className="profile-box">
                <div className="profile"></div>
              </div>

              <div className="album-detail">
                <div className="upper-box">
                  <div className="nickname">NickName</div>
                  <div className="create-dt">2023.07.10 12:31</div>
                  <div className="like-box">
                    <div className="like-emoji">🎈</div>
                    <div className="like-count">10</div>
                  </div>
                </div>

                <div className="lower-box">
                  <div className="album-dt">23.11.11 ~ 23.11.12</div>
                </div>
              </div>

              <div className="btn-box">
                <button
                  className="close-btn"
                  onClick={() => navigate("/", { replace: true })}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className="modify-btn">수정</button>
                <button className="delete-btn">삭제</button>
              </div>
            </div>

            <div className="content-box">
              <div className="content">
                <br />
                <br />
                <br />
                국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에
                관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여
                국가안전보장회의를 둔다.
                <br />
                모든 국민은 직업선택의 자유를 가진다.
                <br />
                비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도,
                언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한
                조치를 할 수 있다.
                <br />
                국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에
                관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여
                국가안전보장회의를 둔다.
                <br />
                모든 국민은 직업선택의 자유를 가진다.
                <br />
              </div>
              <div className="reply-count">40개의 댓글</div>
              <div className="line"></div>
            </div>

            <div className="input-reply-box">
              <div className="user-profile"></div>
              <textarea
                className="input-reply"
                placeholder="댓글을 작성해주세요."
              ></textarea>

              <button className="create-reply">댓글 쓰기</button>
            </div>

            <div className="reply-box">
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
              <TempAlbumReply />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempAlbumDetailView;
