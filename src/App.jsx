import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/About/About";
import Experience from "./components/Experience/Experience";

const DATE = "2024년 6월 19일";

const NAV_DATA = [
  { number: "0", name: "자기소개", isPressed: true },
  { number: "1", name: "기술", isPressed: false },
  { number: "2", name: "연락처", isPressed: false },
];

const TECH_DATA = [
  { title: "프론트엔드", tool: ["HTML", "CSS", "Javascript", "React.js"] },
  { title: "백엔드", tool: ["Node.js", "Javascript"] },
  { title: "디자인", tool: ["Figma", "Adobe Illustrator"] },
  { title: "형상관리", tool: ["GIT", "SVN"] },
  { title: "그 외 기술", tool: ["빅데이터분석기사", "python", "MySQL"] },
];

const EXPERIENCE_DATA = [
  {
    title: "금성 아이스쿨 수학 디지털 교과서 퍼블리싱",
    desc: "Vanilla JS, HTML, CSS로 웹 페이지를 개발합니다. CSS 애니메이션을 활용해서 간단한 캐릭터 모션을 구현했습니다.",
    date: "2024년 1월 ~ 진행중",
    tech: ["HTML", "CSS", "Javascript", "SVN", "Adobe Illustrator"],
  },
  {
    title: "미래엔 디지털 교과서 퍼블리싱",
    desc: "일본어, 수학, 국어, 통합 교과서 퍼블리싱",
    date: "2023년 12월, 2024년 2월, 3월, 4월",
    tech: ["HTML", "CSS", "Javascript", "SVN", "Adobe Illustrator"],
  },
  {
    title: "천재교육 디지털 교과서 퍼블리싱",
    desc: "Vanilla JS로 수학 웹 게임 구현하기",
    date: "2023년 11월",
    tech: ["HTML", "CSS", "Javascript", "SVN"],
  },
];

function App(props) {
  const [navs, setNavs] = useState(NAV_DATA);

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route
          path="/"
          element={<Main navs={navs} updateDate={DATE} tech={TECH_DATA} />}
        ></Route> */}
        <Route
          path="/about"
          element={<Main navs={navs} updateDate={DATE} tech={TECH_DATA} />}
        ></Route>
        <Route
          path="/Experience"
          element={<Experience desc={EXPERIENCE_DATA} />}
        ></Route>
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
