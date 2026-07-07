import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeDrawer();
    };
    if (isDrawerOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen, closeDrawer]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-500 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-2xl transition-transform duration-500 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl text-velmora-deep">Your Cart</h2>
          <button
            onClick={closeDrawer}
            className="p-2 text-velmora-muted hover:text-velmora-deep transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-velmora-charcoal mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-muted">
                Discover our collection and add your favorites.
              </p>
              <button
                onClick={closeDrawer}
                className="btn-outline mt-6"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-velmora-border-light"
                >
                  {/* Product Image */}
                  <div className="w-20 h-24 bg-velmora-border-light flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={item.searchQuery || `${item.name} jewelry gold elegant`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-velmora-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-velmora-muted mt-0.5">
                      {item.variant}
                    </p>
                    <p className="font-sans text-sm font-medium text-velmora-charcoal mt-2">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-velmora-border flex items-center justify-center text-velmora-muted hover:text-velmora-deep hover:border-velmora-gold transition-all"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-velmora-charcoal w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-velmora-border flex items-center justify-center text-velmora-muted hover:text-velmora-deep hover:border-velmora-gold transition-all"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto font-sans text-xs text-velmora-muted hover:text-red-500 transition-colors underline underline-offset-2"
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
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-velmora-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-velmora-muted">Subtotal</span>
              <span className="font-serif text-lg text-velmora-deep">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout — ${totalPrice.toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
