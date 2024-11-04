import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/About/About";
import Experience from "./components/Experience/Experience";
import { TECH_DATA, DATE, EXPERIENCE_DATA, NAV_DATA } from "./data/ContentData";

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
