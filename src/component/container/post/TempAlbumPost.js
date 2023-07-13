import React, { Component, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../../../scss/container/post/TempAlbumPost.scss";

const TempAlbumPost = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="post-container">
        <div className="post-box">
          <div className="input-title">
            <input placeholder="제목을 입력해주세요"></input>
          </div>
          <div className="input-content">
            <CKEditor
              editor={ClassicEditor}
              data={input}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <div className="btn-box">
            <button>등록</button>
            <button>취소</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempAlbumPost;
