import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b">
          <div className="serif text-xl tracking-[0.15em]">Your Cart</div>
          <button onClick={onClose} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <div className="text-[#6B6B6B] mb-4">Your cart is empty</div>
            <Link to="/shop" onClick={onClose} className="btn btn-gold">
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F0EBE3] flex-shrink-0">
                    <img src={item.images.primary} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="product-name text-sm tracking-[0.08em] pr-6">{item.name}</div>
                    <div className="text-xs text-[#6B6B6B] mt-0.5">{item.variant} • ${item.price}</div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button 
                          onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-[#F8F5F0]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F8F5F0]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-[#6B6B6B] hover:text-[#C5A26F]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-medium">${item.price * item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t bg-[#F8F5F0]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                Checkout
              </button>
              <Link 
                to="/shop" 
                onClick={onClose}
                className="block text-center text-xs tracking-[0.1em] uppercase text-[#6B6B6B] hover:text-[#C5A26F]"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;