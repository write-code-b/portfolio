import { useEffect, useState } from "react";

function Badge(props) {
  return (
    <>
      <div className="badge">{props.name}</div>
    </>
  );
}

export default Badge;
