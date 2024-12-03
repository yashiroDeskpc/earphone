import React, { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsOpen(false);
  };

  return (
    <details
      open={isOpen}
      className="js-details"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <summary className={`js-details-summary ${isActive ? 'is-active' : ''}`}>詳細</summary>
      <div className="js-details-content" style={{ display: isOpen ? 'block' : 'none' }}>
        <p>詳細情報がここに表示されます。</p>
      </div>
    </details>
  );
};

export default Accordion;
