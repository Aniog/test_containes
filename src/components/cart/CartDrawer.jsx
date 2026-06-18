import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import strkImgConfig from '@/strk-img-config.json';

const resolveImage = (productId) => {
  const entry = strkImgConfig?.[`product-${productId}-img-primary`];
  if (!entry) return '';
  const picked =
    entry.results?.find((r) => r.id === entry.picked) || entry.results?.[0];
  return picked?.url || '';
};

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-espresso/40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`absolute right-0 top-0 h-full w-full sm:w-[440px] bg-ivory text-espresso shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-warm/50">
          <h2 className="font-serif text-xl tracking-[0.2em] uppercase">
            Your Bag
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
              <p className="text-sm text-mocha mt-2 max-w-xs">
                Discover quietly luxurious pieces, made to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-8 inline-block px-8 py-3 bg-espresso text-ivory text-xs uppercase tracking-eyebrow hover:bg-charcoal transition-colors duration-300"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <div className="w-24 h-28 bg-cream overflow-hidden flex-shrink-0">
                    <img
                      alt={item.name}
                      src={resolveImage(item.id)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-3">
                      <h3
                        id={`cart-name-${item.key}`}
                        className="font-serif text-sm uppercase tracking-editorial leading-snug"
                      >
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        aria-label="Remove item"
                        onClick={() => removeItem(item.key)}
                        className="text-mocha hover:text-espresso text-xs"
                      >
                        <X className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-xs uppercase tracking-eyebrow text-mocha mt-1">
                      {item.variant}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-stone-warm">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-8 h-8 grid place-items-center hover:bg-cream"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-8 h-8 grid place-items-center hover:bg-cream"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-warm/50 px-6 py-6 space-y-4 bg-ivory">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-eyebrow text-mocha">
                Subtotal
              </span>
              <span className="font-serif text-xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-mocha">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full bg-espresso text-ivory text-xs uppercase tracking-eyebrow py-4 hover:bg-charcoal transition-colors duration-300"
            >
              Checkout — {formatPrice(subtotal)}
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-eyebrow text-charcoal hover:text-gold transition-colors duration-300 py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
