import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-midnight-950/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream-50 shadow-xl transition-transform duration-500 ease-out transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-pearl-200">
            <div>
              <h2 className="font-serif text-xl text-midnight-900">Your Cart</h2>
              <p className="text-xs text-pearl-600 mt-0.5">{totalItems} items</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:text-midnight-600 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-pearl-300 mb-4" />
                <p className="text-midnight-900 font-serif text-lg">Your cart is empty</p>
                <p className="text-pearl-600 text-sm mt-1">Discover our collection</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="btn-primary mt-6 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.key} className="flex gap-4 pb-5 border-b border-pearl-100">
                    <div className="w-20 h-20 flex-shrink-0 bg-pearl-100 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="product-name text-sm truncate">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-pearl-400 hover:text-midnight-800 transition-colors ml-2"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-pearl-600 mt-0.5 uppercase tracking-wider">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium text-midnight-900 mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1 border border-pearl-300 rounded hover:bg-pearl-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1 border border-pearl-300 rounded hover:bg-pearl-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
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
            <div className="border-t border-pearl-200 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-midnight-800">Subtotal</span>
                <span className="text-lg font-serif font-medium text-midnight-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-pearl-600">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-pearl-500 hover:text-midnight-800 transition-colors uppercase tracking-wider"
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