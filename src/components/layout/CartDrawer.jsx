import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, count, isOpen, setIsOpen } = useCart();
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
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 cart-overlay transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-champagne/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-champagne" />
            <h2 className="font-serif text-lg tracking-wide text-charcoal">
              Your Cart
              {count > 0 && (
                <span className="font-sans text-sm text-stone ml-2 font-normal">({count})</span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone hover:text-charcoal transition-colors p-1"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-champagne/40" />
              <p className="font-serif text-xl text-charcoal">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">Discover our collection of demi-fine gold jewelry.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest font-medium text-champagne border border-champagne px-6 py-3 hover:bg-champagne hover:text-obsidian transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-champagne/10">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-parchment to-champagne-light/30 flex items-center justify-center">
                      <span className="font-serif text-xs text-stone/50 text-center px-1 leading-tight">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-sm uppercase tracking-wider text-charcoal hover:text-champagne transition-colors block leading-snug mb-1"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-sans text-xs text-stone mb-3">{item.variant} Tone</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-champagne/30">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-sans text-sm text-charcoal w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm font-medium text-charcoal">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          aria-label="Remove item"
                          className="text-stone/50 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={14} />
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
          <div className="px-6 py-6 border-t border-champagne/20 bg-ivory">
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-sans text-base font-medium text-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone/60 mb-5">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest font-semibold py-4 hover:bg-champagne-dark transition-colors duration-300 mb-3">
              Checkout — ${total.toFixed(2)}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-champagne/40 text-stone font-sans text-xs uppercase tracking-widest font-medium py-3 hover:border-champagne hover:text-charcoal transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
