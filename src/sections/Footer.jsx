import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#545454",
        width: "100vw",
        padding: "1vw 0",
        position: "absolute",
        bottom: "0",
        marginTop: "4vw",
      }}
    >
      <p style={{ color: "white", fontWeight: "300" }}>
        © Design by <span style={{ color: "#fd6f00 " }}>FawziUiUx</span> All
        Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
