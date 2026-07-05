import React from 'react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl font-light tracking-wide">Your Cart</h2>
          <button onClick={closeCart} className="text-brand-slate hover:text-brand-charcoal transition-colors" aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-sand mb-4">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p className="text-brand-muted text-sm">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 text-xs tracking-widest uppercase text-brand-charcoal border-b border-brand-charcoal pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-brand-sand/50">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-brand-ivory rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-brand-gold text-xs font-serif">V</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-product text-xs font-medium truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-[11px] text-brand-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-brand-sand text-brand-slate text-xs flex items-center justify-center hover:border-brand-charcoal transition-colors"
                      >
                        −
                      </button>
                      <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-brand-sand text-brand-slate text-xs flex items-center justify-center hover:border-brand-charcoal transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-brand-muted hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 6h18" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
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
          <div className="px-6 py-5 border-t border-brand-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-slate">Subtotal</span>
              <span className="text-lg font-serif font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-brand-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-charcoal text-brand-cream py-3.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-gold transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
