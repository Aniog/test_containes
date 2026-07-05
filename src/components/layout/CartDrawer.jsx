import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();
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
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setIsOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory z-50 shadow-drawer flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-obsidian" />
            <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone hover:text-obsidian transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-xl text-stone italic">Your cart is empty</p>
              <p className="font-sans text-sm text-muted">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs font-semibold uppercase tracking-widest text-gold hover:text-gold-dark transition-colors flex items-center gap-1"
              >
                Continue Shopping <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-linen flex items-center justify-center">
                      <span className="font-serif text-xs text-muted italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          to={`/product/${item.product.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="font-serif text-sm font-medium uppercase tracking-widest text-obsidian hover:text-gold transition-colors block leading-tight"
                        >
                          {item.product.name}
                        </Link>
                        {item.variant && (
                          <p className="font-sans text-xs text-muted mt-0.5">{item.variant}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-whisper hover:text-stone transition-colors flex-shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="font-sans text-sm font-semibold text-obsidian">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs font-semibold uppercase tracking-widest py-4 hover:bg-charcoal transition-colors duration-300 flex items-center justify-center gap-2">
              Proceed to Checkout <ArrowRight size={14} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-sans text-xs font-semibold uppercase tracking-widest text-stone hover:text-gold transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
