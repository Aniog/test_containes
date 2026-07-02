import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, toggleDrawer, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') toggleDrawer(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [toggleDrawer]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l border-white/5 z-[70] flex flex-col transition-transform duration-500 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <h2 className="font-serif text-xl text-cream">Your Bag</h2>
          <button
            onClick={() => toggleDrawer(false)}
            className="text-cream/60 hover:text-cream transition-colors p-1"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-10 h-10 text-subtle mb-4" />
              <p className="text-muted font-sans text-sm">Your bag is empty</p>
              <p className="text-subtle font-sans text-xs mt-1">Add some pieces to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-elevated flex-shrink-0 flex items-center justify-center">
                    <div className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-gold text-[10px] uppercase tracking-widest">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-cream text-sm font-sans font-medium truncate">{item.name}</h3>
                        <p className="text-subtle text-xs font-sans mt-0.5 capitalize">{item.variantId}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variantId)}
                        className="text-subtle hover:text-cream transition-colors p-0.5 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-white/10">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-cream text-xs font-sans">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-cream text-sm font-sans">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted text-sm font-sans">Subtotal</span>
              <span className="text-cream font-sans font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-subtle text-xs font-sans mb-5">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-gold hover:bg-gold-hover text-base font-sans text-sm font-medium uppercase tracking-widest py-3.5 transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => toggleDrawer(false)}
              className="w-full text-muted hover:text-cream font-sans text-xs uppercase tracking-widest mt-3 py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
