import React from "react";
import "./Modal.scss";

const Modal = ({ text, onClose }) => {
  return (
    <div id="devicePopup" className="devicePopup">
      <p className="title">{text}</p>
      <button onClick={onClose} className="btn">
        Proceed
      </button>
    </div>
  );
};

export default Modal;
