import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal,
    cartCount 
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
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-2xl">
              Your Cart ({cartCount})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="hover:text-[#C9A96E] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-[#9A9590] mb-4" />
                <p className="text-[#9A9590]">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-[#F5F3F0]"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#9A9590] mb-2">{item.variant}</p>
                      <p className="font-serif text-lg mb-2">${item.price}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 border border-[#E5E3E0] flex items-center justify-center hover:border-[#C9A96E] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 border border-[#E5E3E0] flex items-center justify-center hover:border-[#C9A96E] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-4 text-sm text-[#9A9590] hover:text-red-500 transition-colors"
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
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between font-serif text-xl">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-[#C9A96E] hover:bg-[#B8943E] text-white text-center py-4 text-sm tracking-wider uppercase transition-colors"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center text-sm text-[#9A9590] hover:text-[#2C2C2C] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
