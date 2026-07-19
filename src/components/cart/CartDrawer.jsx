import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartCount, getCartTotal, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <h2 className="font-serif text-2xl">Your Cart ({getCartCount()})</h2>
            <button
              onClick={onClose}
              className="p-2 hover:text-velmora-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-velmora-charcoal-light mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="text-velmora-gold hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h3 className="font-serif text-lg">{item.name}</h3>
                      <p className="text-sm text-velmora-charcoal-light">{item.variant}</p>
                      <p className="font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 border border-velmora-sand flex items-center justify-center hover:border-velmora-gold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 border border-velmora-sand flex items-center justify-center hover:border-velmora-gold"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-4 text-sm text-velmora-charcoal-light hover:text-red-500"
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
            <div className="p-6 border-t border-velmora-sand">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <button className="w-full bg-velmora-charcoal text-velmora-cream py-3 hover:bg-velmora-charcoal-light transition-colors mb-2">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-velmora-charcoal-light hover:text-red-500"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
