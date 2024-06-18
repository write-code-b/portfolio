import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Content";
import Experience from "./components/Experience";

const DATA = [
  { number: "0", name: "자기소개", isPressed: true },
  { number: "1", name: "기술", isPressed: false },
  { number: "2", name: "연락처", isPressed: false },
];

function App(props) {
  const [navs, setNavs] = useState(DATA);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main navs={navs} />}></Route>
        <Route path="/about" element={<Main navs={navs} />}></Route>
        <Route path="/Experience" element={<Experience />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
