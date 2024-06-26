import { useEffect, useState } from "react";
import StickyNav from "./StickyNav";
import Introduce from "./Introduce";
import Tech from "./Tech";
import Contact from "./Contact";
import { nanoid } from "nanoid";

function About(props) {
  const [navState, setNavState] = useState("0"); //0 or 1 or 2 / 1-> Tech, 2-> Experience
  const [isDefault, setIsDefault] = useState(true);
  // const [isPressed, setIsPressed] = useState("0");
  const [navs, setNavs] = useState(props.navs);
  const [techData, setTechData] = useState(props.tech);

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
  console.log("tech", techData);
  const techList = techData?.map((tech) => (
    <Tech title={tech.title} tool={tech.tool} />
  ));

  return (
    <main>
      <div className="content">
        <div className="sticky_nav">{navList}</div>
        {isDefault || navState == "0" ? (
          <Introduce />
        ) : navState == "1" ? (
          <section id="tech_section">{techList}</section>
        ) : (
          <Contact />
        )}
        <div className="update">수정일_{props.updateDate}</div>
      </div>
    </main>
  );
}

export default About;
