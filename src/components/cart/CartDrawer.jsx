import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  useEffect(() => {
    if (!isDrawerOpen) return;
    const onEsc = (e) => { if (e.key === 'Escape') closeDrawer(); };
    document.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen, closeDrawer]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeDrawer} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wider">
            YOUR BAG ({itemCount})
          </h2>
          <button onClick={closeDrawer} className="p-1 text-velmora-slate hover:text-velmora-charcoal transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-warmgray px-6">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
              <p className="font-serif text-lg tracking-wide">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="mt-4 text-xs tracking-widest uppercase underline underline-offset-4 hover:text-velmora-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 flex flex-col gap-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-velmora-border last:border-0">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand flex items-center justify-center overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-velmora-gold" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs tracking-widest uppercase text-velmora-charcoal truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-velmora-warmgray mt-0.5 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-border text-velmora-slate hover:border-velmora-charcoal hover:text-velmora-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs tabular-nums w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-border text-velmora-slate hover:border-velmora-charcoal hover:text-velmora-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-[10px] tracking-widest uppercase text-velmora-warmgray hover:text-red-600 transition-colors"
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
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-velmora-warmgray">Subtotal</span>
              <span className="font-medium text-velmora-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-velmora-warmgray leading-relaxed">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full">
              CHECKOUT — ${subtotal.toFixed(2)}
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-center text-[11px] tracking-widest uppercase text-velmora-warmgray hover:text-velmora-charcoal transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}
