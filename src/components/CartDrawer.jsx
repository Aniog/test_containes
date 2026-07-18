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
      <div ref={drawerRef} className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col animate-slide-left">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-lg tracking-extra-wide uppercase text-brand-charcoal">
            Your Bag ({items.length})
          </h2>
          <button onClick={closeCart} className="p-1 text-brand-warm-gray hover:text-brand-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-xl text-brand-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-muted font-light">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-ivory flex-shrink-0 overflow-hidden">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-muted">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-serif text-sm tracking-extra-wide uppercase text-brand-charcoal truncate"
                    >
                      {item.name}
                    </h3>
                    <p className="sr-only">{item.shortDescription}</p>
                    <p className="text-xs text-brand-muted mt-0.5">{item.tone}</p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal underline transition-colors"
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
          <div className="border-t border-brand-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-brand-warm-gray">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${total}</span>
            </div>
            <p className="text-xs text-brand-muted font-light mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-white font-sans text-xs font-semibold tracking-super-wide uppercase py-4 hover:bg-brand-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
