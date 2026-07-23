import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E5DFD9]">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-[#2C2C2C] hover:text-[#C9A96E] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <p className="text-[#9A8F87] text-center py-8">Your cart is empty</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                      <p className="text-sm text-[#9A8F87] mt-1">${item.price}</p>
                      <div className="flex items-center space-x-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-[#E5DFD9] flex items-center justify-center hover:border-[#C9A96E] transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-[#E5DFD9] flex items-center justify-center hover:border-[#C9A96E] transition-colors"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-sm text-[#9A8F87] hover:text-red-500 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#E5DFD9]">
              <div className="flex justify-between mb-4">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#C9A96E] text-white py-3 text-sm uppercase tracking-wider hover:bg-[#B8943E] transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
