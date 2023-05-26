import React, { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div>
          <h2>Content</h2>
          <p>This is the content of the modal.</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
