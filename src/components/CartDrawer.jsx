import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg tracking-wider uppercase" style={{ fontFamily: 'var(--font-serif)' }}>
            Your Cart ({cartItems.length})
          </h2>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <ShoppingBag size={64} className="text-gray-300 mb-4" />
            <p className="text-gray-500 mb-6">Your cart is empty</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-secondary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-32 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm tracking-widest uppercase mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">${item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border rounded hover:border-gold"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border rounded hover:border-gold"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-gray-500 underline hover:text-gold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span style={{ fontFamily: 'var(--font-serif)' }}>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full btn-primary">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-sm text-center text-gray-600 hover:text-gold"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
