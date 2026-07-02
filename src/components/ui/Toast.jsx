import React from 'react';
import { useCart } from '../../context/CartContext';

const Toast = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]">
      <div className="toast bg-bg-dark text-bg px-6 py-3 text-sm tracking-wide shadow-soft">
        {toast}
      </div>
    </div>
  );
};

export default Toast;