import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-xl flex flex-col animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal-muted hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-muted mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal-muted mb-6">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-6 py-3 bg-gold text-white text-sm font-medium rounded-full hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-warm-border-light last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center border border-gold/10">
                    <span className="font-serif text-lg text-gold/40 tracking-widest uppercase">
                      {item.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium text-charcoal tracking-wide uppercase">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-1">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-warm-border rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-charcoal-muted hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-charcoal-muted hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1.5 text-charcoal-muted hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
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
          <div className="px-6 py-4 border-t border-warm-border bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-charcoal-muted">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal-muted mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors text-sm">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-3 text-sm text-charcoal-muted hover:text-charcoal transition-colors mt-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
