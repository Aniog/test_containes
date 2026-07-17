import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
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
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-ivory z-50 shadow-premium-lg transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-gold/20">
            <h2 className="font-serif text-2xl text-velmora-charcoal">
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-velmora-mist mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-velmora-mist">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium text-velmora-charcoal uppercase tracking-wider">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-mist mt-1">
                        {item.variant}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-6 h-6 border border-velmora-gold/30 rounded flex items-center justify-center text-velmora-charcoal hover:border-velmora-gold"
                          >
                            -
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-6 h-6 border border-velmora-gold/30 rounded flex items-center justify-center text-velmora-charcoal hover:border-velmora-gold"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm font-medium text-velmora-charcoal">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-velmora-mist hover:text-red-500 mt-2 transition-colors"
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
            <div className="p-6 border-t border-velmora-gold/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-wider uppercase text-velmora-charcoal">
                  Total
                </span>
                <span className="text-xl font-medium text-velmora-charcoal">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-velmora-gold text-white text-center py-3 uppercase tracking-wider text-sm hover:bg-velmora-gold-dark transition-colors"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center text-sm text-velmora-mist hover:text-velmora-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
