import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="font-serif text-xl tracking-[0.08em]">Your Cart</h3>
          <button onClick={onClose} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <p className="text-[#6B6763] mb-4">Your cart is empty</p>
            <button onClick={onClose} className="btn-outline text-sm py-3 px-8">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1 overflow-auto">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F0EDE7] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#6B6763] mt-0.5">{item.variant}</p>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-[#6B6763] hover:text-[#2C2A28]">
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E1D9]">
                        <button 
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F8F6F3]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F8F6F3]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t mt-auto">
              <div className="flex justify-between mb-6 text-sm tracking-[0.05em]">
                <span>Total</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn-primary w-full mb-3">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B6763] tracking-[0.05em]">
                Free worldwide shipping on orders over $75
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;