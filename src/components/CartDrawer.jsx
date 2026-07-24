import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b">
          <div className="text-lg tracking-[0.1em] uppercase">Your Cart</div>
          <button onClick={onClose} aria-label="Close cart"><X size={20} /></button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <div className="text-[var(--color-text-muted)] mb-4">Your cart is empty</div>
            <button onClick={onClose} className="btn btn-outline">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F0EBE3] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-xs tracking-[0.1em] pr-6">{item.name}</div>
                        <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.variant}</div>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-[var(--color-text-muted)] hover:text-red-500">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[var(--color-border)]">
                        <button onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))} className="p-1.5"><Minus size={14} /></button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="p-1.5"><Plus size={14} /></button>
                      </div>
                      <div className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t bg-[var(--color-bg)]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-gold w-full mb-3">Checkout</button>
              <button onClick={onClose} className="btn btn-outline w-full">Continue Shopping</button>
              <p className="text-center text-[10px] text-[var(--color-text-muted)] mt-4 tracking-[0.05em]">Free shipping on orders over $75</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;