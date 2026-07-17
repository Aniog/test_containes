import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import Button from './Button';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#EDE9E3]">
            <h2 className="font-serif text-2xl text-[#2C2522]">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-[#F5F2ED] rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-[#6B635C] mb-4">Your cart is empty</p>
              <Button onClick={onClose} variant="outline">Continue Shopping</Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4 pb-4 border-b border-[#EDE9E3]">
                    <div className="w-20 h-20 bg-[#F5F2ED] rounded flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-serif text-sm tracking-[1.5px] text-[#2C2522]">{item.name}</p>
                          <p className="text-xs text-[#6B635C] mt-0.5">{item.variant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(index)}
                          className="text-[#6B635C] hover:text-[#2C2522]"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                          className="w-7 h-7 flex items-center justify-center border border-[#EDE9E3] hover:bg-[#F5F2ED]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-[#EDE9E3] hover:bg-[#F5F2ED]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#EDE9E3] px-6 py-5 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="font-serif">Total</span>
                  <span>${total}</span>
                </div>
                <Button className="w-full" size="lg">Checkout</Button>
                <p className="text-xs text-center text-[#6B635C]">Free worldwide shipping on orders over $75</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
