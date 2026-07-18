import React from 'react';
import { useCart } from '../../contexts/CartContext';

export default function CartDrawer() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-500 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="heading-serif text-2xl">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="body-text mb-6">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-secondary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.product.id}-${item.variant}-${index}`} className="flex space-x-4">
                    <div className="w-24 h-32 bg-cream-dark flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="product-name text-sm">{item.product.name}</h3>
                      {item.variant && (
                        <p className="text-xs text-warm-gray">{item.variant}</p>
                      )}
                      <p className="font-serif">${item.product.price}</p>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variant)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:border-charcoal transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variant)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:border-charcoal transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="text-xs text-warm-gray hover:text-charcoal transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm text-warm-gray hover:text-charcoal transition-colors"
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
