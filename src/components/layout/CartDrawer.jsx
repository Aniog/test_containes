import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { clsx } from 'clsx';
import { useCart, formatPrice } from '@/context/CartContext';
import { useStrkImages } from '@/lib/useStrkImages';
import JewelryImage from '@/components/ui/JewelryImage';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    setQuantity,
    subtotal,
    itemCount,
  } = useCart();
  const containerRef = useRef(null);

  useStrkImages(containerRef, [items, isOpen]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 transition-all duration-500',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={clsx(
          'absolute inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity duration-500',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* Drawer panel */}
      <aside
        ref={containerRef}
        className={clsx(
          'absolute top-0 right-0 h-full w-full sm:w-[440px] bg-porcelain shadow-[0_0_40px_-10px_rgba(0,0,0,0.25)] flex flex-col transform transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
              Your Cart
            </p>
            <h3 className="font-serif text-2xl text-espresso mt-0.5">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso hover:text-gold p-2 -mr-2 transition-colors"
          >
            <X size={22} strokeWidth={1.4} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-3xl text-espresso mb-3">
              Your cart is quiet.
            </p>
            <p className="text-sm text-mute mb-8 font-sans max-w-xs leading-relaxed">
              Begin with a piece you’ll wear every day — or a gift that arrives
              ready to give.
            </p>
            <Button as={Link} to="/shop" onClick={closeCart} variant="primary">
              Shop the Collection
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <article
                  key={item.key}
                  className="flex gap-4 border-b border-hairline pb-6 last:border-b-0 last:pb-0"
                >
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="block w-20 h-24 flex-shrink-0"
                  >
                    <JewelryImage
                      imgId={`cart-${item.key}`}
                      query={`[cart-${item.key}-name]`}
                      ratio="3x4"
                      width={200}
                      kind="earring"
                      theme="warm"
                      className="w-20 h-24"
                      alt={item.name}
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      id={`cart-${item.key}-name`}
                      className="block font-sans uppercase tracking-[0.2em] text-[11px] text-espresso hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-xs text-mute font-sans">
                      {item.variantLabel}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="p-1.5 text-espresso hover:text-gold disabled:opacity-30"
                          onClick={() =>
                            setQuantity(item.key, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={12} strokeWidth={1.6} />
                        </button>
                        <span className="px-3 text-xs font-sans tabular-nums text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="p-1.5 text-espresso hover:text-gold"
                          onClick={() =>
                            setQuantity(item.key, item.quantity + 1)
                          }
                        >
                          <Plus size={12} strokeWidth={1.6} />
                        </button>
                      </div>
                      <span className="font-sans text-sm text-espresso tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="mt-3 text-[10px] uppercase tracking-[0.25em] text-mute hover:text-gold transition-colors font-sans"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <footer className="px-6 py-6 border-t border-hairline bg-linen/40">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-espresso tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-mute font-sans mb-5">
                Shipping and taxes calculated at checkout.
              </p>
              <Button variant="primary" size="lg" className="w-full">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-gold transition-colors font-sans py-2"
              >
                Continue browsing
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
