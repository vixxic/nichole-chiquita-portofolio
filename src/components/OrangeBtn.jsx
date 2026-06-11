function OrangeBtn({ text, width }) {
  return (
    <div className="orange-btn">
      <div
        className="poppins-regular"
        style={{
          color: "white",
          backgroundColor: "#fd6f00",
          outline: "none",
          border: "none",
          padding: "5px 30px",
          borderRadius: "5px",
          fontSize: "1.2vw",
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
