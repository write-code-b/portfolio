import { useEffect, useState } from "react";
import Badge from "../Badge";

function Description(props) {
  const [badges, setBadges] = useState(props.tech);
  const BadgeList = badges?.map((badge) => <Badge name={badge} />);

  return (
    <section className="experience">
      <h2>{props.title}</h2>
      <div className="desc">
        <span className="underline">설명</span>
        <p>{props.desc}</p>
      </div>
      <div className="desc">
        <span className="underline">작업 기간</span>
        <p>{props.date}</p>
      </div>
      <div className="desc">
        <span className="underline">개발 스택</span>
        <p>{BadgeList}</p>
      </div>
    </section>
  );
}

export default Description;
