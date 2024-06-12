import { useEffect, useState } from "react";
import Introduce from "./Introduce";

function Content(props) {
  return (
    <main>
      <div class="content">
        <div class="sticky_nav">
          <div class="tab active">
            <a href="">
              <span>01</span>자기소개
            </a>
          </div>
          <div class="tab">
            <a href="">
              <span>02</span>기술
            </a>
          </div>
          <div class="tab">
            <a href="">
              <span>03</span>연락처
            </a>
          </div>
        </div>
        <Introduce />
      </div>
    </main>
  );
}

export default Content;
