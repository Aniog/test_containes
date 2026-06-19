import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="text-lg font-medium tracking-wider uppercase">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-charcoal hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <p className="text-gray-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-gray-400">Discover our collection and find something you love</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 btn-primary inline-block"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium tracking-wider uppercase mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">Variant: {item.variant}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">${item.price}</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors mt-2"
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
          {items.length > 0 && (
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-medium">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  alert('Checkout functionality would be implemented here!');
                }}
                className="w-full btn-primary"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
