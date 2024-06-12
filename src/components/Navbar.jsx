import { useEffect, useState } from "react";

function Navbar(props) {
  return (
    <header>
      <nav>
        <ul>
          <a href="" id="logo">
            최민지
          </a>
        </ul>
        <ul>
          <li class="nav_active">
            <a href="">소개</a>
          </li>
          <li>
            <a href="">경력</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
