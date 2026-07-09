import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-warm-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-ivory-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
          <h2 className="font-serif text-xl tracking-wider text-warm-900">
            YOUR BAG ({totalItems})
          </h2>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 text-warm-600 hover:text-warm-900 transition-colors duration-300"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-warm-300 mb-4" />
              <p className="font-serif text-xl text-warm-600 mb-2">Your bag is empty</p>
              <p className="text-sm text-warm-400 mb-6">Discover our curated collection of fine jewelry.</p>
              <Link
                to="/collection"
                onClick={onClose}
                className="btn-primary text-sm"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-6 border-b border-warm-100 last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-warm-100 rounded flex-shrink-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full" style={{ backgroundColor: item.variantColor + '40' }}>
                      <div className="w-full h-full rounded-full border-2" style={{ borderColor: item.variantColor }} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-warm-900 mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-500 mb-3">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-warm-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-warm-500 hover:text-warm-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="text-sm font-sans font-medium text-warm-900 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-warm-500 hover:text-warm-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Price + Remove */}
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm font-medium text-warm-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-warm-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-warm-200 px-6 py-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-warm-600">Subtotal</span>
              <span className="font-serif text-xl text-warm-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-400">Shipping calculated at checkout</p>

            <button className="w-full bg-warm-900 text-white py-4 font-sans text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-warm-800">
              Checkout
            </button>

            <button
              onClick={onClose}
              className="w-full text-center text-sm text-warm-600 hover:text-warm-900 underline underline-offset-4 transition-colors duration-300 py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
