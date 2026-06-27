import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function CartDrawer() {
  const { items, drawerOpen, toggleDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

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
        className={cn(
          'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-ivory z-50 shadow-2xl transition-transform duration-300 flex flex-col',
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
          <h2 className="font-serif text-xl tracking-wider uppercase text-velmora-charcoal">
            Your Bag ({totalItems})
          </h2>
          <button onClick={() => toggleDrawer(false)} className="p-1 text-velmora-charcoal hover:text-velmora-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
              <p className="font-serif text-lg text-velmora-taupe mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-taupe">Discover something beautiful to add.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-velmora-sand/20 last:border-b-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="text-velmora-taupe text-xs tracking-wider uppercase">{item.name.split(' ')[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-taupe mt-0.5 capitalize">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-velmora-sand/40 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center text-velmora-charcoal font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-velmora-charcoal">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-velmora-taupe hover:text-velmora-error transition-colors self-start p-1"
                    aria-label="Remove item"
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
          <div className="border-t border-velmora-sand/30 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-taupe uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-velmora-taupe">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-charcoal text-velmora-cream py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-velmora-espresso transition-colors">
              Checkout
            </button>
            <button
              onClick={() => toggleDrawer(false)}
              className="w-full text-center text-sm text-velmora-taupe hover:text-velmora-charcoal transition-colors tracking-wider uppercase py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
