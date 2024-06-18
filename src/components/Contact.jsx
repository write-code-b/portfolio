import { useEffect, useState } from "react";

function Contact(props) {
  const copyToClipboard = async (e) => {
    try {
      const link = e.target.parentNode.innerText;
      console.log(`[Success] copy to clipboard / link: ${link}`);
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.log("[contact.jsx] fail copy to clipboard");
    }
  };

  return (
    <section id="contact_section">
      <p className="guide">을 클릭하면 복사가 됩니다!</p>
      <div>
        <h2>이메일</h2>
        <div className="wrap">
          <div className="badge">minjichoi.official@gmail.com</div>
          <div className="copy_icon" onClick={copyToClipboard}></div>
        </div>
      </div>
      <div>
        <h2>깃헙</h2>
        <div className="wrap">
          <div className="badge">https://github.com/slow-wave</div>
          <div className="copy_icon" onClick={copyToClipboard}></div>
        </div>
        <div className="wrap">
          <div className="badge">
            https://github.com/write-code-b
            <div className="tooltip_text">퍼블리싱 관련 코드 저장소입니다.</div>
          </div>
          <div className="copy_icon" onClick={copyToClipboard}></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
