import "./App.css";
import { Routes, Route } from "react-router-dom";

import TempHeader from "../src/component/global/header/TempHeader";
import TempFooter from "../src/component/global/footer/TempFooter";
import TempMain from "../src/component/main/TempMain";
import TempAlbumDetailView from "./component/container/album/TempAlbumDetailView";

//TODO 나중에 div 로 감싼다

// TODO : path 클릭했을 때 이동 ... element 가 객체 컴포넌트를
// TODO : path도 상수화 (휴먼에러)
// TODO : 상대경로말고 절대경로 ㅋㅋㅋㅋ
// 프리티어 컨벤션 plugin

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <TempHeader />
              <TempMain />
              <TempFooter />
            </div>
          }
        />
        <Route
          path="/albums/detail/:index"
          element={
            <div>
              <TempHeader />
              <div>
                <TempAlbumDetailView />
              </div>
              <TempFooter />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
