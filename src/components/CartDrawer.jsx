import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, total }) => {
  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8]">
          <h2 className="serif text-2xl">Your Cart</h2>
          <button onClick={onClose} className="text-[#6B6560] hover:text-[#2C2825]">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#6B6560] mb-4">Your cart is empty</p>
              <button onClick={onClose} className="btn btn-outline text-sm">
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-sm pr-6">{item.name}</p>
                    <p className="text-xs text-[#6B6560] mt-0.5">{item.variant} tone</p>
                    <p className="text-sm mt-1">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button 
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-xs text-[#6B6560] hover:text-[#2C2825]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5E0D8] space-y-4">
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span className="font-medium">${total}</span>
              </div>
              <button className="btn btn-primary w-full">
                Checkout
              </button>
              <p className="text-center text-xs text-[#6B6560]">
                Free worldwide shipping on all orders
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;