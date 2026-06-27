import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, total }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#E5DFD4] flex items-center justify-between">
          <h2 className="serif text-xl tracking-[0.1em]">Your Cart</h2>
          <button onClick={onClose} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <p className="text-[#6B665F] mb-4">Your cart is empty</p>
            <button 
              onClick={onClose}
              className="btn btn-outline text-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F1EA] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-[0.1em] pr-4">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-[#6B665F] hover:text-[#2C2825]"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD4]">
                        <button 
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F1EA]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F1EA]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD4] bg-[#F8F5F1]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Total</span>
                <span className="font-medium">${total}</span>
              </div>
              
              <button className="btn btn-gold w-full mb-3">
                Proceed to Checkout
              </button>
              <button 
                onClick={onClose}
                className="btn btn-outline w-full text-sm"
              >
                Continue Shopping
              </button>
              
              <p className="text-center text-xs text-[#6B665F] mt-4">
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
