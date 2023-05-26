import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current.focus();
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div
            className={`modal-content ${isModalOpen ? "fade-in" : ""}`}
            ref={modalRef}
            tabIndex={-1}
          >
            <div className="modal-header">
              <h2 className="modal-title">Title</h2>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="modal-overlay-backdrop" onClick={closeModal} />
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
