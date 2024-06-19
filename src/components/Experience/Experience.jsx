import { useEffect, useState } from "react";
import Description from "./Description";

function Experience(props) {
  const [experience, setExperience] = useState(props.desc);

  const experienceList = experience?.map((ex) => (
    <Description
      id={ex.number}
      title={ex.title}
      desc={ex.desc}
      date={ex.date}
      tech={ex.tech}
    />
  ));

  return (
    <main>
      <div className="content">
        <div className="year">2024</div>
        {experienceList}
      </div>
    </main>
  );
}

export default Experience;
