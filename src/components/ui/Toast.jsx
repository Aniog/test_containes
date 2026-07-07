import React, { useEffect } from 'react';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] pointer-events-none">
      <div className="pointer-events-auto bg-velmora-text text-white px-6 py-3 text-sm tracking-wide flex items-center gap-3 shadow-lg">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
