import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

const DATA = [
  { number: "0", name: "자기소개"},
  { number: "1", name: "기술" },
  { number: "2", name: "연락처" },
];

function App(props) {
  const [navs, setNavs] = useState(DATA);

  return (
    <div className="App">
      <Header />
      <Content navs={navs} />
      <Footer />
    </div>
  );
}

export default App;
