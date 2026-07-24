import React from 'react';
import { useCart } from '../context/CartContext';

const Toast = () => {
  const { toast } = useCart();

  return (
    <div className={`toast ${toast.show ? 'show' : ''}`}>
      {toast.message}
    </div>
  );
};

export default Toast;