import React, { Component, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../../../scss/container/post/TempAlbumPost.scss";

const TempAlbumPost = () => {
  const [inputContent, setInputContent] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [inputImg1, setInputImg1] = useState("");

  const post = () => {
    // TODO : 요청 맵핑
    // alert(`이것은 제목 : ${inputTitle}`);
    // alert(`이것은 내용 : ${inputContent}`);
    // alert(`이것은 사진 : ${selectedImages}`);

    console.log(selectedImages);
  };

  //
  //
  //
  //
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleUpload = () => {
    alert(selectedImages);
    // 선택된 이미지 파일들을 업로드하는 로직 작성
    // 각 이미지 파일에 대해 서버로 전송하고, 업로드 완료 후 서버에서 반환된 이미지 URL을 처리
  };

  return (
    <>
      <div className="post-container">
        <div className="post-box">
          <div className="input-title">
            <input
              placeholder="제목을 입력해주세요"
              data={inputTitle}
              onChange={(e) => {
                setInputTitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-content">
            <CKEditor
              editor={ClassicEditor}
              data={inputContent}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setInputContent(data);
                // console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
                console.log(event);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
                console.log(event);
              }}
            />
          </div>
          <div className="btn-box">
            <input type="file" multiple onChange={handleImageChange} />
            <button onClick={post}>등록</button>
            <button>취소</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempAlbumPost;
