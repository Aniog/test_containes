import React from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-obsidian border-l border-charcoal transition-transform duration-400 ease-out flex flex-col ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/50">
          <h2 className="font-heading text-lg tracking-[0.15em] text-ivory">YOUR CART</h2>
          <button
            onClick={closeDrawer}
            className="p-2 text-muted hover:text-ivory transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-charcoal mb-4" />
              <p className="font-heading text-lg text-ivory/60 tracking-wider mb-2">Your cart is empty</p>
              <p className="text-sm text-muted/60 mb-6">Discover our handcrafted collection</p>
              <a
                href="/shop"
                onClick={closeDrawer}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-obsidian text-sm font-medium tracking-wider hover:bg-gold-light transition-colors"
              >
                SHOP NOW <ArrowRight size={14} />
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-charcoal/30 border border-charcoal/50 flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-muted/40 tracking-wider">IMG</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-sm tracking-[0.1em] text-ivory truncate">{item.name}</h3>
                    <p className="text-xs text-muted/60 mt-1">{item.variant}</p>
                    <p className="text-sm text-gold mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-charcoal/60">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-muted hover:text-ivory transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm text-ivory">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-muted hover:text-ivory transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-muted/50 hover:text-red-400 transition-colors underline"
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
          <div className="border-t border-charcoal/50 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted tracking-wider uppercase">Subtotal</span>
              <span className="font-heading text-lg text-ivory">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-muted/50">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-obsidian text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2">
              CHECKOUT <ArrowRight size={14} />
            </button>
            <button
              onClick={closeDrawer}
              className="w-full py-2 text-sm text-muted hover:text-ivory transition-colors tracking-wider"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
