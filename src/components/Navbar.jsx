import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [navState, setNavState] = useState("main");

  function setNavStatus(e) {
    const nav = e.target.dataset.name;
    setNavState(nav);
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li onClick={setNavStatus}>
              <Link to="/" id="logo" data-name="main">
                최민지
              </Link>
            </li>
          </ul>
          <ul>
            <li
              className={navState === "main" ? "nav_active" : ""}
              onClick={setNavStatus}
            >
              <Link to="/about" data-name="main">
                소개
              </Link>
            </li>
            <li
              className={navState === "experience" ? "nav_active" : ""}
              onClick={setNavStatus}
            >
              <Link to="/experience" data-name="experience">
                경력
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
