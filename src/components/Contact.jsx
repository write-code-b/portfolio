import { useEffect, useState, useRef } from "react";

function Contact(props) {
  const copyToClipboard = async (tooltipRef, e) => {
    try {
      const link = e.target.parentNode.innerText;
      console.log(`[Success] copy to clipboard / link: ${link}`);
      await navigator.clipboard.writeText(link);
      tooltipRef.current.innerText = "완료";
    } catch (err) {
      console.log("[contact.jsx] fail copy to clipboard");
    }
  };

  const tooltipRef1 = useRef(null);
  const tooltipRef2 = useRef(null);
  const tooltipRef3 = useRef(null);

  return (
    <section id="contact_section">
      <p className="guide">을 클릭하면 복사가 됩니다!</p>
      <div>
        <h2>이메일</h2>
        <div className="wrap">
          <div className="badge">minjichoi.official@gmail.com</div>
          <div
            className="copy_icon"
            onClick={(e) => copyToClipboard(tooltipRef1, e)}
          >
            <div className="tooltip_text" ref={tooltipRef1}>
              복사
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>깃헙</h2>
        <div className="wrap">
          <div className="badge">https://github.com/slow-wave</div>
          <div
            className="copy_icon"
            onClick={(e) => copyToClipboard(tooltipRef2, e)}
          >
            <div className="tooltip_text" ref={tooltipRef2}>
              복사
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="badge">
            https://github.com/write-code-b
            <div className="tooltip_text">퍼블리싱 관련 코드 저장소입니다.</div>
          </div>
          <div
            className="copy_icon"
            onClick={(e) => copyToClipboard(tooltipRef3, e)}
          >
            <div className="tooltip_text" ref={tooltipRef3}>
              복사
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
