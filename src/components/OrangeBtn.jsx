import "../styles/OrangeBtn.css";

function OrangeBtn({ text }) {
  return (
    <div className="orange-btn">
      <div
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
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default OrangeBtn;
