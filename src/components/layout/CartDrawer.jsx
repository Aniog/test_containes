import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { formatPriceWithCents } from '@/lib/utils';

const FREE_SHIP_THRESHOLD = 60;

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQty, subtotal } =
    useCart();
  const containerRef = useRef(null);
  const itemsKey = items.map((i) => `${i.lineId}:${i.imgId}`).join('|');

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, itemsKey]);

  if (!isOpen) return null;

  const remaining = Math.max(FREE_SHIP_THRESHOLD - subtotal, 0);
  const progress = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100);

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] animate-fade"
      />
      <aside
        ref={containerRef}
        className="absolute top-0 right-0 h-full w-full sm:w-[460px] bg-cream text-ink flex flex-col animate-drawer shadow-[0_0_60px_rgba(26,23,20,0.15)]"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-[0.18em] uppercase">
            Your Bag
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close"
            className="p-1 hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="px-6 py-4 border-b border-hairline">
          {remaining > 0 ? (
            <p className="text-xs text-ink-soft tracking-wide">
              You are{' '}
              <span className="font-semibold text-ink">
                {formatPriceWithCents(remaining)}
              </span>{' '}
              away from free worldwide shipping.
            </p>
          ) : (
            <p className="text-xs text-ink-soft tracking-wide">
              Congratulations — you have unlocked free worldwide shipping.
            </p>
          )}
          <div className="mt-2 h-[2px] bg-hairline rounded-full overflow-hidden">
            <div
              className="h-full bg-champagne transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-6 py-16">
              <ShoppingBag
                className="w-10 h-10 text-mute mb-4"
                strokeWidth={1.2}
              />
              <p className="font-serif text-2xl text-ink mb-2">
                Your bag is empty
              </p>
              <p className="text-sm text-ink-soft mb-8 max-w-xs">
                Discover our most-loved demi-fine pieces, from everyday huggies
                to gift-ready heirlooms.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="bg-champagne text-cream hover:bg-champagne-deep px-7 py-3 text-xs tracking-[0.25em] uppercase transition-colors"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-5 first:pt-0">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="flex-shrink-0 w-20 h-24 bg-bone overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[cart-line-${item.lineId}-name] gold demi fine ${item.tagline}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        id={`cart-line-${item.lineId}-name`}
                        className="font-serif text-sm uppercase tracking-[0.18em] text-ink hover:text-champagne-deep transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        aria-label="Remove"
                        className="text-mute hover:text-ink transition-colors text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-mute mt-1">{item.variant}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease"
                          onClick={() => updateQty(item.lineId, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream-deep transition-colors"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase"
                          onClick={() => updateQty(item.lineId, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream-deep transition-colors"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPriceWithCents(item.price * item.qty)}
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
          <div className="border-t border-hairline px-6 py-6 bg-cream-deep/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-[0.25em] text-mute">
                Subtotal
              </span>
              <span className="font-serif text-xl text-ink">
                {formatPriceWithCents(subtotal)}
              </span>
            </div>
            <p className="text-xs text-mute mb-5">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full bg-ink text-cream hover:bg-champagne-deep py-4 text-xs tracking-[0.3em] uppercase transition-colors"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-3 text-xs tracking-[0.25em] uppercase text-ink-soft hover:text-ink py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
