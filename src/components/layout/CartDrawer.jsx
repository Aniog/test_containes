import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart();
  const closeRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', handleEsc);
      closeRef.current?.focus();
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = '';
    }
    return undefined;
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-400 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[calc(100%-2rem)] sm:w-full sm:max-w-md bg-surface border-l border-warm-sand shadow-2xl transform transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-sand gap-4">
            <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-espresso">
              Your Bag ({itemCount})
            </h2>
            <button
              ref={closeRef}
              onClick={onClose}
              className="text-espresso hover:text-accent transition-colors flex-shrink-0 p-1"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-warm-sand mb-4" />
                <p className="text-taupe text-sm">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 text-sm tracking-[0.1em] uppercase text-accent hover:text-accent-dark transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 pb-5 border-b border-warm-sand">
                    <div className="w-20 h-20 bg-clay flex-shrink-0 flex items-center justify-center text-taupe text-[10px]">
                      {item.variant === 'gold' ? 'GOLD' : 'SILVER'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-xs tracking-[0.12em] uppercase text-espresso truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-taupe mt-0.5 capitalize">{item.variant} tone</p>
                      <p className="text-sm text-espresso mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 border border-warm-sand flex items-center justify-center text-espresso hover:border-accent transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 border border-warm-sand flex items-center justify-center text-espresso hover:border-accent transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-auto text-xs text-taupe hover:text-espresso transition-colors underline"
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
            <div className="border-t border-warm-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-espresso">
                <span className="text-sm">Subtotal</span>
                <span className="font-serif text-lg tracking-[0.05em]">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
