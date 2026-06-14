import "../styles/OrangeBtn.css";

function OrangeBtn({ text }) {
  const isDownload = text === "Download CV";

  return (
    <div className="orange-btn">
      <a
        href={isDownload ? "/Nichole-chiquita.png" : ""}
        download={isDownload}
        className="poppins-regular text"
        style={{
          color: "white",
          backgroundColor: "#fd6f00",
          outline: "none",
          border: "none",
          padding: "5px 30px",
          borderRadius: "5px",
          fontSize: "clamp(14px, 1.2vw, 22px)",
          width: "max-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        {text}
      </a>
    </div>
  );
}

export default OrangeBtn;
