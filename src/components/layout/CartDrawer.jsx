import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalItems } = useCart();

  const cartTotal = items.reduce((sum, item) => {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-ink-950/30 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
            <h2 className="font-serif text-xl text-ink-900">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 text-ink-500 hover:text-ink-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-ink-400 font-sans text-sm">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 btn-outline text-xs"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => {
                  const product = PRODUCTS.find((p) => p.id === item.productId);
                  if (!product) return null;
                  return (
                    <li
                      key={item.id}
                      className="flex gap-4 py-4 border-b border-ink-100/50 last:border-0"
                    >
                      <div className="w-20 h-20 flex-shrink-0 bg-ivory rounded overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-product-name truncate">{product.name}</h3>
                        <p className="text-price mt-0.5">${product.price}</p>
                        {item.variant && (
                          <p className="text-xs text-ink-400 capitalize mt-0.5">{item.variant}</p>
                        )}
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-ink-200 rounded">
                            <button
                              className="p-1.5 text-ink-500 hover:text-ink-900 transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-medium text-ink-800">
                              {item.quantity}
                            </span>
                            <button
                              className="p-1.5 text-ink-500 hover:text-ink-900 transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            className="p-1.5 text-ink-400 hover:text-blush-500 transition-colors"
                            onClick={() => removeItem(item.id)}
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-ink-100 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-ink-700">Subtotal</span>
                <span className="font-serif text-lg text-ink-900">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-ink-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-xs">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs text-ink-500 hover:text-ink-900 font-sans tracking-wider uppercase transition-colors"
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