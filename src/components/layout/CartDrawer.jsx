import { useEffect, useCallback } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, itemCount, subtotal, drawerOpen, setDrawerOpen } = useCart();

  const close = useCallback(() => setDrawerOpen(false), [setDrawerOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') close(); };
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [drawerOpen, close]);

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-oxford/30 backdrop-blur-sm" onClick={close} />
      <div className="absolute top-0 right-0 h-full w-full max-w-[420px] bg-cream shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-mocha" />
            <span className="font-serif text-lg tracking-wider text-oxford">Your Bag</span>
            {itemCount > 0 && (
              <span className="text-sm text-taupe">({itemCount})</span>
            )}
          </div>
          <button onClick={close} className="p-2 text-mocha hover:text-oxford transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(100vh - 280px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag className="w-12 h-12 text-sand mb-4" />
              <p className="text-sm text-mocha">Your bag is empty</p>
              <button onClick={close} className="mt-3 text-xs font-medium text-bronze underline underline-offset-4 hover:text-bronze-dark transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-sand/50">
              {items.map((item) => {
                const key = `${item.id}-${item.variant}`;
                return (
                  <li key={key} className="flex gap-4 py-5">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 flex-shrink-0 bg-sand/50 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold-light/20 to-bronze/10 flex items-center justify-center">
                        <span className="text-[10px] text-taupe font-medium uppercase tracking-wider">Velmora</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-oxford truncate">{item.name}</h4>
                          <p className="text-[11px] text-taupe mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="flex-shrink-0 p-1 text-taupe/50 hover:text-oxford transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-sand rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-mocha hover:text-oxford transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-oxford">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-mocha hover:text-oxford transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-oxford">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-cream border-t border-sand px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-mocha">Subtotal</span>
              <span className="text-lg font-semibold text-oxford">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-taupe text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-oxford text-cream text-sm font-medium tracking-wider uppercase hover:bg-oxford-light transition-colors duration-300 rounded-sm">
              Checkout &mdash; ${subtotal.toFixed(2)}
            </button>
            <button
              onClick={close}
              className="w-full py-2 text-xs font-medium text-mocha hover:text-oxford underline underline-offset-4 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
