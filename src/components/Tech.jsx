import { useEffect, useState } from "react";

function Tech(props) {
  return (
    <section id="tech_section">
      <div>
        <h2>프론트엔드</h2>
        <p>
          <div className="badge">HTML</div>
          <div className="badge">CSS</div>
          <div className="badge">Javascript</div>
        </p>
      </div>
      <div>
        <h2>백엔드</h2>
        <p>
          <div className="badge">Node.js</div>
          <div className="badge">Javascript</div>
        </p>
      </div>
      <div>
        <h2>디자인</h2>
        <p>
          <div className="badge">Figma</div>
          <div className="badge">Adobe Illustrator</div>
        </p>
      </div>
      <div>
        <h2>형상관리</h2>
        <p>
          <div className="badge">GIT</div>
          <div className="badge">SVN</div>
        </p>
      </div>
      <div>
        <h2>그 외 기술</h2>
        <p>
          <div className="badge">빅데이터분석기사</div>
          <div className="badge">python</div>
          <div className="badge">MySQL</div>
        </p>
      </div>
    </section>
  );
}

export default Tech;
