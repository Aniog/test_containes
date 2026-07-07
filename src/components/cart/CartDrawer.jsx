import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
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
    const handleEsc = (e) => { if (e.key === 'Escape') closeCart(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-deep/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-ivory shadow-2xl animate-slide-in"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-wider">
              Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-stone hover:text-velmora-deep transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-velmora-sand mb-4" />
                <p className="text-velmora-stone text-sm">Your bag is empty.</p>
                <button
                  onClick={closeCart}
                  className="mt-4 text-sm tracking-wider uppercase text-velmora-gold hover:text-velmora-goldDark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-border">
                    {/* Image */}
                    <div className="w-20 h-24 flex-shrink-0 bg-velmora-creme rounded-sm overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center text-velmora-gold/30">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-8 h-8">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p id={`cart-name-${item.id}`} className="text-xs tracking-wider uppercase font-serif text-velmora-deep truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-velmora-stone mt-1 capitalize">{item.variant} Tone</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-velmora-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-velmora-stone hover:text-velmora-deep transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-xs font-medium text-velmora-deep">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-velmora-stone hover:text-velmora-deep transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-velmora-deep">${(item.price * item.quantity).toFixed(0)}</p>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-[10px] tracking-wider uppercase text-velmora-stone hover:text-velmora-rose transition-colors mt-0.5"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-wider uppercase text-velmora-stone">Subtotal</span>
                <span className="font-serif text-lg text-velmora-deep">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-velmora-stone">Shipping & taxes calculated at checkout</p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full btn-primary text-center"
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
        .animate-slide-in {
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}
