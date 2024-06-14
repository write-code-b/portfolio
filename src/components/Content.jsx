import { useEffect, useState } from "react";
import StickyNav from "./StickyNav";
import Introduce from "./Introduce";
import Tech from "./Tech";
import Contact from "./Contact";
import { nanoid } from "nanoid";

function Content(props) {
  const [navState, setNavState] = useState("0"); //0 or 1 or 2 / 1-> Tech, 2-> Experience
  const [isDefault, setIsDefault] = useState(true);
  // const [isPressed, setIsPressed] = useState("0");
  const [navs, setNavs] = useState(props.navs);

  function moveNav(id) {
    // setIsPressed(id);
    setIsDefault(false);
    setNavState(id);

    const navData = navs?.map((nav) => {
      return { ...nav, isPressed: nav.number === id };
    });

    setNavs(navData);
  }

  const navList = navs?.map((nav) => (
    <StickyNav
      id={nav.number}
      className={`tab ${nav.isPressed ? "active" : ""}`}
      name={nav.name}
      setIsPressed={moveNav}
    />
  ));

  return (
    <main>
      <div className="content">
        <div className="sticky_nav">{navList}</div>
        {isDefault || navState == "0" ? (
          <Introduce />
        ) : navState == "1" ? (
          <Tech />
        ) : (
          <Contact />
        )}
      </div>
    </main>
  );
}

export default Content;
