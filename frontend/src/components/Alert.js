import React from "react";

const Alert = ({ icon, type, text }) => {
  return (
    <div className={`alert alert-${type} text-center`} role="alert">
      <i className={`bi bi-${icon} me-3`}></i>
      <span>{text}</span>
    </div>
  );
};

export default Alert;
