import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeDrawer(); };
    if (isDrawerOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isDrawerOpen, closeDrawer]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-[70] shadow-2xl transition-transform duration-400 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gold-200/20">
            <h2 className="font-serif text-xl tracking-wider text-charcoal-800">Your Cart</h2>
            <button
              onClick={closeDrawer}
              className="p-2 text-charcoal-400 hover:text-charcoal-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-charcoal-200 mb-4" />
                <p className="font-serif text-lg text-charcoal-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-charcoal-300">Discover our collection of handcrafted jewelry</p>
                <button
                  onClick={closeDrawer}
                  className="mt-6 px-6 py-2.5 bg-charcoal-800 text-cream-50 text-xs tracking-widest-xl uppercase font-medium hover:bg-charcoal-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 animate-fade-in">
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-cream-200 flex-shrink-0 flex items-center justify-center">
                      <span className="text-gold-600 font-serif text-xs tracking-wider">VELMORA</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm tracking-wider text-charcoal-800 uppercase">
                        {item.name}
                      </p>
                      <p className="text-xs text-charcoal-400 mt-0.5 capitalize">{item.variant}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-charcoal-100">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-charcoal-400 hover:text-charcoal-800 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs w-6 text-center font-medium text-charcoal-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-charcoal-400 hover:text-charcoal-800 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-charcoal-800">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-charcoal-300 hover:text-charcoal-600 transition-colors self-start p-1"
                      aria-label={`Remove ${item.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gold-200/20 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-500">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-800">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-charcoal-300">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3.5 bg-gold-500 text-white text-xs tracking-widest-xl uppercase font-medium hover:bg-gold-600 transition-colors">
                Checkout — {formatPrice(totalPrice)}
              </button>
              <button
                onClick={closeDrawer}
                className="w-full py-2 text-xs tracking-widest uppercase text-charcoal-500 hover:text-charcoal-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
