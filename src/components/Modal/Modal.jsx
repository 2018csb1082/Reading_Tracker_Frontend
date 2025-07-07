import { useState } from "react";

import './Modal.css';

const Modal = ({ header, body, footers, footerFuncs }) => {
  return (
    <div className="ModalOverlay">
      <div className="ModalContent">
        <div className="ModalHeader">
          <h2>{header}</h2>
        </div>

        <div className="ModalBody">
          {body}
        </div>

        <div className="ModalFooter">
          {footers.map((btnLabel, index) => (
            <button key={index} onClick={footerFuncs[index]} className="ModalButton">
              {btnLabel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
