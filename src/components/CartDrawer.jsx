import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart();
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && closeCart();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-ink/40" onClick={closeCart} />
      <div
        ref={panelRef}
        className={cn(
          'absolute top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-400',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-warmgray">
          <h2 className="font-serif text-2xl tracking-wide">Your Bag</h2>
          <button aria-label="Close cart" onClick={closeCart} className="hover:opacity-70">
            <X className="w-5 h-5" strokeWidth={1.6} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="w-12 h-12 text-taupe mb-4" strokeWidth={1.2} />
            <p className="font-serif text-xl mb-2">Your bag is empty</p>
            <p className="text-sm text-clay mb-6">Discover pieces crafted to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-block bg-gold-600 text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-700 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-warmgray shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base truncate hover:text-gold-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        aria-label="Remove item"
                        onClick={() => removeItem(item.id, item.tone)}
                        className="text-taupe hover:text-gold-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.6} />
                      </button>
                    </div>
                    <p className="text-xs text-clay mt-0.5 capitalize">{item.tone} tone</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-warmgray">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-warmgray transition-colors"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.6} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-warmgray transition-colors"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.6} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-warmgray px-6 py-6 space-y-4 bg-parchment">
              <div className="flex items-center justify-between text-sm">
                <span className="text-clay">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-clay">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-gold-600 text-white py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-700 transition-colors">
                Checkout — {formatPrice(subtotal)}
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-ink text-ink py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-ink hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
