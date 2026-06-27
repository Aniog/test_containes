import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart, formatPrice } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const FREE_SHIP_THRESHOLD = 75;

export default function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem, setQuantity, subtotal } = useCart();
  const containerRef = useRef(null);

  // Load stock images for cart line items whenever the drawer opens or lines change
  useEffect(() => {
    if (!isOpen) return undefined;
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, lines.length]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  const progress = Math.min(subtotal / FREE_SHIP_THRESHOLD, 1);
  const remaining = Math.max(FREE_SHIP_THRESHOLD - subtotal, 0);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        'fixed inset-0 z-[60] transition-opacity duration-500',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />

      {/* Panel */}
      <aside
        ref={containerRef}
        className={cn(
          'absolute top-0 right-0 h-full w-full sm:max-w-md bg-ivory text-ink flex flex-col',
          'shadow-[0_0_60px_rgba(31,26,20,0.15)] transition-transform duration-500',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl tracking-wide">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close"
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </header>

        {/* Free shipping progress */}
        <div className="px-6 py-4 border-b border-hairline">
          {remaining > 0 ? (
            <p className="text-xs text-ink-soft mb-2">
              You&rsquo;re <span className="text-ink font-medium">{formatPrice(remaining)}</span> away from complimentary shipping.
            </p>
          ) : (
            <p className="text-xs text-gold-deep mb-2 uppercase tracking-[0.2em]">
              Complimentary shipping unlocked
            </p>
          )}
          <div className="h-px bg-hairline relative">
            <div
              className="absolute inset-y-0 left-0 bg-gold transition-all duration-500"
              style={{ width: `${progress * 100}%`, height: '1px' }}
            />
          </div>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
              <p className="font-serif text-2xl text-ink">Your bag is empty.</p>
              <p className="text-sm text-ink-soft max-w-xs">
                Start with our bestsellers — quiet pieces made to wear forever.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 inline-flex items-center bg-ink text-ivory px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-deep transition-colors duration-300"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {lines.map((line) => (
                <li key={line.key} className="py-5 flex gap-4">
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={line.imgId}
                      data-strk-img={line.imgQuery}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="240"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={line.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-line-name-${line.key}`}
                      className="font-serif text-base uppercase tracking-[0.2em] text-ink leading-snug"
                    >
                      {line.name}
                    </p>
                    <p className="text-xs text-ink-soft mt-1">{line.variant}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(line.key, line.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream transition-colors"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.4} />
                        </button>
                        <span className="w-8 text-center text-sm">{line.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(line.key, line.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream transition-colors"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.4} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-ink">
                        {formatPrice(line.price * line.quantity)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Remove"
                    onClick={() => removeItem(line.key)}
                    className="self-start p-1 text-ink-soft hover:text-ink transition-colors"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={1.4} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / totals */}
        {lines.length > 0 && (
          <footer className="px-6 py-6 border-t border-hairline space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-ink-soft">
                Subtotal
              </span>
              <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-ink-soft">
              Taxes and shipping calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full bg-ink text-ivory py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-deep transition-colors duration-300"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
