import React from "react";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        margin: "5rem 0",
        opacity: "0",
        animation: "fadeIn 0.5s ease-in forwards",
      }}
    >
      <div className="spinner-border" role="status" style={{ width: "3rem", height: "3rem", color: "#4CAF50" }}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
