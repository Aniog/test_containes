import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-premium">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8DDD0]">
            <h2 className="font-serif text-2xl">
              Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg opacity-70">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block mt-6 text-[#C9A96E] hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4 pb-6 border-b border-[#E8DDD0]">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover bg-[#F5F0E8]"
                    />
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="product-name text-sm">{item.name}</h3>
                      <p className="text-sm opacity-70">{item.material}</p>
                      <p className="text-lg font-medium">${item.price}</p>
                      
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:opacity-70 transition-opacity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:opacity-70 transition-opacity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="self-start hover:opacity-70 transition-opacity"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#E8DDD0] space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="tracking-[0.1em] uppercase">Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              
              <button className="w-full bg-[#2C2C2C] text-white py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#C9A96E] transition-all duration-500">
                Proceed to Checkout
              </button>
              
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
