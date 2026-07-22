import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velvet-950/30 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-velvet-50 shadow-2xl animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-velvet-800" />
              <span className="text-sm tracking-wider uppercase font-sans font-medium text-velvet-900">
                Cart ({itemCount})
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-velvet-600 hover:text-velvet-950 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
                <p className="text-sm text-velvet-600 font-sans mb-1">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="text-xs text-velvet-800 underline hover:text-velvet-950 font-sans"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-5 border-b border-velvet-100">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 flex-shrink-0 bg-velvet-100 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold-200/40 to-velvet-200/40" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="product-name text-xs text-velvet-900">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-velvet-600 mt-0.5 font-sans">
                            {item.variantName}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-velvet-400 hover:text-velvet-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velvet-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-velvet-600 hover:text-velvet-950 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-sans text-velvet-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-velvet-600 hover:text-velvet-950 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-sans font-medium text-velvet-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-wider uppercase font-sans font-medium text-velvet-700">
                  Subtotal
                </span>
                <span className="text-base font-sans font-semibold text-velvet-950">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-velvet-500 font-sans">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-accent w-full">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-velvet-700 underline hover:text-velvet-950 font-sans transition-colors"
              >
                Continue shopping
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
