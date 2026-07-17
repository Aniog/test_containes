import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-light tracking-wider font-['Cormorant_Garamond']">
              YOUR CART ({cartItems.length})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex-1 flex items-center justify-center flex-col p-6">
              <ShoppingBag size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4 pb-4 border-b">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-['Cormorant_Garamond'] uppercase tracking-wider">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">${item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-gray-900 self-start"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm tracking-wider">TOTAL</span>
                  <span className="text-lg font-light font-['Cormorant_Garamond']">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-[#C9A96E] text-white py-3 hover:bg-[#B8943E] transition-colors tracking-wider text-sm">
                  CHECKOUT
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full border border-gray-300 py-3 hover:bg-gray-50 transition-colors tracking-wider text-sm"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
