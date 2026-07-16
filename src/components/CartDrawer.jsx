import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onCheckout }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`cart-drawer fixed top-0 right-0 bottom-0 w-full md:w-96 bg-[#F8F5F1] z-50 flex flex-col ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD3]">
          <h3 className="font-serif text-xl tracking-[0.1em]">Your Cart</h3>
          <button onClick={onClose} className="p-2" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#6B665F] mb-4">Your cart is empty</p>
            <button onClick={onClose} className="btn-outline text-sm">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F1E9] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-1">{item.variant}</p>
                      </div>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button 
                          onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-[#E5DFD3] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E5DFD3] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemove(index)}
                        className="text-xs text-[#6B665F] hover:text-[#2C2825] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD3] bg-white">
              <div className="flex justify-between mb-6 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="btn-gold w-full text-center"
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B665F] mt-4 tracking-wide">
                Shipping calculated at checkout
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;