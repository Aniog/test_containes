import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    isOpen,
    items,
    totalItems,
    totalPrice,
    closeCart,
    removeFromCart,
    updateQuantity
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-light tracking-wider font-['Cormorant_Garamond']">
              YOUR CART ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-block mt-4 text-sm text-amber-700 hover:text-amber-800 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.material}`} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-light tracking-wider font-['Cormorant_Garamond']">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{item.material}</p>
                      <p className="text-sm font-semibold mt-2">${item.price}</p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-gray-500 hover:text-red-500 transition-colors"
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
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-lg font-light font-['Cormorant_Garamond']">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-amber-800 text-white py-3 hover:bg-amber-900 transition-colors text-sm tracking-wider">
                CHECKOUT
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-gray-300 py-3 hover:bg-gray-50 transition-colors text-sm tracking-wider"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
