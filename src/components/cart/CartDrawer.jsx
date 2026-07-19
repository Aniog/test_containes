import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-brand-white shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-brand-dark" />
              <span className="font-sans text-sm font-medium text-brand-dark">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-brand-muted hover:text-brand-dark transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-brand-border mb-4" />
                <p className="font-serif text-lg text-brand-muted">Your cart is empty</p>
                <p className="text-sm text-brand-muted mt-2">Add some treasures to begin.</p>
                <Button variant="outline" className="mt-6" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-brand-border">
                  <div className="w-20 h-24 bg-brand-light rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.images?.[0] || 'https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=200&h=250&fit=crop'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs tracking-[0.15em] uppercase text-brand-dark truncate">
                      {item.name}
                    </h4>
                    <p className="font-sans text-sm text-brand-gold font-medium mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-brand-border rounded flex items-center justify-center text-brand-muted hover:text-brand-dark transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm font-medium text-brand-dark w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-brand-border rounded flex items-center justify-center text-brand-muted hover:text-brand-dark transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-brand-muted hover:text-brand-dark mt-2 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="px-6 py-6 border-t border-brand-border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-sm text-brand-charcoal">Subtotal</span>
                <span className="font-sans text-lg font-semibold text-brand-dark">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-brand-muted mb-4">Shipping & taxes calculated at checkout</p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-brand-muted hover:text-brand-dark mt-3 transition-colors"
              >
                Clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}