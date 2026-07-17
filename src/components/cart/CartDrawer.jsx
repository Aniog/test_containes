import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, drawerOpen, toggleDrawer, removeItem, updateQuantity, cartTotal, itemCount } = useCart();

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
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl animate-[slideIn_0.3s_ease-out]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
            <h2 className="font-serif text-xl tracking-wide text-charcoal">
              Your Bag ({itemCount})
            </h2>
            <button
              onClick={() => toggleDrawer(false)}
              className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <ShoppingBag className="w-12 h-12 text-warm-gray/40" />
                <p className="text-warm-gray text-sm">Your bag is empty.</p>
                <button
                  onClick={() => toggleDrawer(false)}
                  className="text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors underline underline-offset-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="flex flex-col gap-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-sand/60">
                    <div className="w-20 h-20 flex-shrink-0 bg-sand-light rounded-sm overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] tracking-widest font-medium text-charcoal truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-warm-gray mt-0.5 capitalize">{item.variant} tone</p>
                      <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-sand rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium text-charcoal">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-[11px] tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-sand space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm tracking-widest uppercase text-warm-gray">Subtotal</span>
                <span className="font-serif text-lg text-charcoal">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-warm-gray text-center">Shipping & taxes calculated at checkout</p>
              <Link
                to="/checkout"
                onClick={() => toggleDrawer(false)}
                className="block w-full py-3 text-center text-sm tracking-widest uppercase font-medium text-cream bg-charcoal hover:bg-charcoal/90 transition-colors rounded-sm"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
