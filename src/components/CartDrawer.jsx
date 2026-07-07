import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-400',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-surface-secondary z-50 shadow-2xl transition-transform duration-500 ease-luxury flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <h2 className="font-serif text-lg tracking-[0.1em] text-text-primary">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-text-muted/40 mb-4" />
              <p className="font-serif text-lg text-text-secondary mb-2">Your cart is empty</p>
              <p className="text-text-muted text-sm">Discover our curated collection</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 animate-fade-in">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-surface-tertiary rounded-sm overflow-hidden flex-shrink-0">
                    <div
                      className="w-full h-full"
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={`[${item.productId}-name] jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-gold-dark/10 flex items-center justify-center">
                        <span className="text-brand-gold/40 text-xs font-serif">V</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium text-text-primary uppercase tracking-wider truncate">
                      {item.name}
                    </h3>
                    <p className="text-text-muted text-xs mt-0.5 capitalize">{item.variant}</p>
                    <p className="text-brand-gold font-sans text-sm mt-1">${item.price}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-white/[0.1] rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs text-text-primary font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-text-muted text-xs hover:text-accent-error transition-colors duration-300"
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
          <div className="border-t border-white/[0.06] px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-sm">Subtotal</span>
              <span className="text-text-primary font-sans text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-text-muted text-xs">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-surface-primary font-sans text-sm uppercase tracking-[0.15em] py-4 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 font-medium">
              Checkout — ${totalPrice.toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
