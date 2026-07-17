import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-[70] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD3]">
          <span className="font-serif text-xl text-[#2C2522]">Your Cart</span>
          <button onClick={() => setIsCartOpen(false)} className="p-1 text-[#6B655C]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[#6B655C] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={() => setIsCartOpen(false)}
              className="px-8 py-3 border border-[#8B7355] text-[#8B7355] text-sm tracking-[2px] hover:bg-[#8B7355] hover:text-white transition-colors"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE8DF] flex-shrink-0 rounded-sm overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="font-serif text-sm tracking-[1px] text-[#2C2522] pr-6">{item.name}</div>
                    <div className="text-xs text-[#6B655C] mt-0.5">{item.variant}</div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button 
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 text-[#6B655C] hover:text-[#2C2522]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-[#2C2522]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 text-[#6B655C] hover:text-[#2C2522]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-[#2C2522]">${item.price * item.quantity}</span>
                        <button onClick={() => removeFromCart(index)} className="text-[#8B7355] hover:text-[#6B5535]">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E5DFD3] p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B655C]">Subtotal</span>
                <span className="font-medium text-[#2C2522]">${cartTotal}</span>
              </div>
              <p className="text-xs text-[#6B655C] tracking-[0.5px]">Shipping calculated at checkout</p>
              <button 
                onClick={() => alert('Checkout would be connected to a payment provider here.')}
                className="w-full py-4 bg-[#8B7355] text-white text-sm tracking-[2px] hover:bg-[#6B5535] transition-colors"
              >
                CHECKOUT
              </button>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-xs tracking-[2px] text-[#8B7355] hover:text-[#6B5535]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;