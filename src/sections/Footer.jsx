import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "var(--footer-color)",
        width: "100vw",
        padding: "1vw 0",
        position: "absolute",
        bottom: "0",
        marginTop: "4vw",
      }}
    >
      <p style={{ color: "white", fontWeight: "300" }}>
        © Design by{" "}
        <a
          href="https://www.figma.com/design/UDbdx6e6ZHpImAVB5oWNvQ/Portfolio%7C-Personal-Portfolio-%7C-5---Community-?node-id=1210-2374&t=WE1xtDHLJhND6L5Q-0"
          target="_blank"
          style={{ color: "#fd6f00 " }}
        >
          FawziUiUx
        </a>{" "}
        All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
