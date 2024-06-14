import { useEffect, useState } from "react";

function StickyNav(props) {
  return (
    <>
      <div
        type="button"
        className={props.className}
        id={props.id}
        onClick={() => props.setIsPressed(props.id)}
      >
        <a>
          <span>0{1 + parseInt(props.id)}</span>
          {props.name}
        </a>
      </div>
    </>
  );
}

export default StickyNav;
