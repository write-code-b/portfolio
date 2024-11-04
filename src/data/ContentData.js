const DATE = "2024년 11월 4일";

const NAV_DATA = [
  { number: "0", name: "자기소개", isPressed: true },
  { number: "1", name: "기술", isPressed: false },
  { number: "2", name: "연락처", isPressed: false },
];

const TECH_DATA = [
  { title: "프론트엔드", tool: ["HTML", "CSS", "Javascript", "React.js"] },
  { title: "백엔드", tool: ["Node.js", "Javascript"] },
  { title: "디자인", tool: ["Figma", "Adobe Illustrator"] },
  { title: "형상관리", tool: ["GIT", "SVN"] },
  { title: "그 외 기술", tool: ["빅데이터분석기사", "python", "MySQL"] },
];

const EXPERIENCE_DATA = [
  {
    title: "일/한 번역 코난카드 정보를 제공하는 웹사이트 풀스택 개발",
    desc: "일/한 번역 코난카드 정보를 제공하는 웹사이트를 개발했습니다. 오프라인 코난카드 게임 이용자를 위한 비영리 프로젝트이며, 2024년 11월 기준 지난 3개월동안 352명의 이용자가 방문했습니다.",
    role: "프론트엔드 개발, 백엔드 개발, 디자인 (전체 기여도 100%)",
    date: "2024년 7월 ~ 진행중",
    tech: ["React.js", "Node.js", "MongoDB", "Git", "Figma", "SCSS"],
    url: "https://conan-card.netlify.app/",
  },
  {
    title: "금성 아이스쿨 수학 디지털 교과서 퍼블리싱",
    desc: "금성 출판사 수학 교과서의 3, 4, 5, 6, 7, 8, 9, 10, 11, 12월 호를 개발했습니다. Vanilla JS, HTML, CSS로 웹 페이지를 개발합니다. CSS 애니메이션을 활용해서 간단한 캐릭터 모션을 구현했습니다.",
    date: "2024년 1월 ~ 진행중",
    tech: ["HTML", "CSS", "Javascript", "SVN", "Adobe Illustrator"],
  },
  {
    title: "미래엔 디지털 교과서 퍼블리싱",
    desc: "일본어, 수학, 국어, 통합 교과서 퍼블리싱",
    date: "2023년 12월, 2024년 2월, 3월, 4월",
    tech: ["HTML", "CSS", "Javascript", "SVN", "Adobe Illustrator"],
  },
  {
    title: "천재교육 디지털 교과서 퍼블리싱",
    desc: "Vanilla JS로 수학 웹 게임 구현하기",
    date: "2023년 11월",
    tech: ["HTML", "CSS", "Javascript", "SVN"],
  },
  {
    title: "유니브스토어",
    role: "커머스개발팀 사원",
    desc: "풀스택 개발자로 근무했습니다.",
    date: "2023년 4월 ~ 7월 (총 4개월)",
    tech: ["Node.js", "Vue.js", "CSS", "MySQL", "Git"],
  },
];

export { DATE, NAV_DATA, TECH_DATA, EXPERIENCE_DATA };
