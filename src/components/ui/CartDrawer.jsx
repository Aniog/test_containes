import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-ivory z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide text-espresso">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-1 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-sand mb-4" />
              <p className="font-serif text-lg text-espresso mb-2">Your cart is empty</p>
              <p className="text-sm text-taupe mb-6">Discover pieces you will treasure forever.</p>
              <button
                onClick={closeCart}
                className="btn-primary text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 animate-fade-in"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream rounded-sm overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-sand/50 to-cream flex items-center justify-center">
                      <span className="text-gold-muted text-xs font-serif">VELMORA</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wider uppercase text-espresso truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-espresso mt-1">${item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-sand rounded-sm flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-sand rounded-sm flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-taupe hover:text-espresso underline transition-colors"
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
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-sand space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="font-serif text-lg text-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe">Shipping & taxes calculated at checkout</p>
            <button className="btn-gold w-full text-xs">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-taupe hover:text-espresso transition-colors underline py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
