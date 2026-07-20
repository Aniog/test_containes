import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-hairline">
          <h2 className="font-serif text-lg tracking-wider text-brand-charcoal">Your Bag</h2>
          <button onClick={closeCart} className="p-1 text-brand-muted hover:text-brand-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-xl text-brand-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-muted font-sans">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-ivory rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-2xl text-brand-gold/40">{item.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-ultra-wider text-brand-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-brand-muted font-sans mt-0.5">{item.tone}</p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-hairline text-brand-muted hover:text-brand-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-hairline text-brand-muted hover:text-brand-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal font-sans underline transition-colors"
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
          <div className="border-t border-brand-hairline px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-brand-muted">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted font-sans mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-white text-xs font-sans uppercase tracking-ultra-wide py-3.5 hover:bg-brand-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
