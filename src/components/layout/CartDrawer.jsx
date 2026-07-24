import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={closeDrawer}
        className="absolute inset-0 bg-velmora-ink/40 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl animate-slide-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-velmora-gold" />
              <span className="font-serif text-xl tracking-wide">Cart</span>
              <span className="text-xs font-sans text-velmora-stone">({itemCount})</span>
            </div>
            <button onClick={closeDrawer} className="text-velmora-stone hover:text-velmora-ink transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
                <p className="font-serif text-lg text-velmora-ink">Your cart is empty</p>
                <p className="text-sm text-velmora-stone mt-1">Discover our collection</p>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-sand">
                    <div className="w-20 h-20 bg-velmora-sand flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-ink truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-velmora-stone mt-0.5">{item.variant}</p>
                      <p className="text-sm font-sans font-medium text-velmora-ink mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-velmora-stone hover:text-velmora-rose transition-colors underline"
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
            <div className="border-t border-velmora-sand px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-sans text-velmora-stone">Subtotal</span>
                <span className="font-serif text-xl text-velmora-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-stone">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout — ${subtotal.toFixed(2)}
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs font-sans tracking-[0.1em] uppercase text-velmora-stone hover:text-velmora-ink transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}