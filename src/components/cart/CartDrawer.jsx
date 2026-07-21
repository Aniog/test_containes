import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Minus, Plus } from 'lucide-react';
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
            <h2 className="font-serif text-xl">Your Cart</h2>
            <button onClick={() => setIsCartOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600">{item.variant}</p>
                      <p className="font-serif text-sm mt-1">${item.product.price}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.variant, item.quantity - 1)
                          }
                          className="p-1 border rounded"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.variant, item.quantity + 1)
                          }
                          className="p-1 border rounded"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="ml-auto text-sm text-gray-500 hover:text-red-500"
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
            <div className="p-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-serif">Total</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-[#C9A96E] text-white text-center py-3 uppercase tracking-widest text-sm font-medium hover:bg-[#A8843E] transition"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
