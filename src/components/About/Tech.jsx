import { useEffect, useState } from "react";
import Badge from "../Badge";

function Tech(props) {
  const [badges, setBadges] = useState(props.tool);
  const BadgeList = badges?.map((badge) => <Badge name={badge} />);

  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p>{BadgeList}</p>
      </div>
    </>
  );
}

export default Tech;
