import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function LineThumbVividAura() {
  return (
    <img
      alt="Vivid Aura Jewels"
      className="w-20 h-24 bg-champagne/40 overflow-hidden flex-shrink-0 object-cover"
      data-strk-img-id="vivid-aura-1-7f2a9c"
      data-strk-img="[vivid-aura-desc] [vivid-aura-title]"
      data-strk-img-ratio="4x5"
      data-strk-img-width="200"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  );
}

function LineThumbMajesticFlora() {
  return (
    <img
      alt="Majestic Flora Nectar"
      className="w-20 h-24 bg-champagne/40 overflow-hidden flex-shrink-0 object-cover"
      data-strk-img-id="majestic-flora-1-4a8c12"
      data-strk-img="[majestic-flora-desc] [majestic-flora-title]"
      data-strk-img-ratio="4x5"
      data-strk-img-width="200"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  );
}

function LineThumbGoldenSphere() {
  return (
    <img
      alt="Golden Sphere Huggies"
      className="w-20 h-24 bg-champagne/40 overflow-hidden flex-shrink-0 object-cover"
      data-strk-img-id="golden-sphere-1-8d3e6a"
      data-strk-img="[golden-sphere-desc] [golden-sphere-title]"
      data-strk-img-ratio="4x5"
      data-strk-img-width="200"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  );
}

function LineThumbAmberLace() {
  return (
    <img
      alt="Amber Lace Earrings"
      className="w-20 h-24 bg-champagne/40 overflow-hidden flex-shrink-0 object-cover"
      data-strk-img-id="amber-lace-1-5f9a3b"
      data-strk-img="[amber-lace-desc] [amber-lace-title]"
      data-strk-img-ratio="4x5"
      data-strk-img-width="200"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  );
}

function LineThumbRoyalHeirloom() {
  return (
    <img
      alt="Royal Heirloom Set"
      className="w-20 h-24 bg-champagne/40 overflow-hidden flex-shrink-0 object-cover"
      data-strk-img-id="royal-heirloom-1-3a7f2c"
      data-strk-img="[royal-heirloom-desc] [royal-heirloom-title]"
      data-strk-img-ratio="4x5"
      data-strk-img-width="200"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  );
}

function LineThumb({ product, tone }) {
  if (!product) return <div className="w-20 h-24 bg-champagne" />;
  switch (product.id) {
    case 'vivid-aura-jewels':
      return <LineThumbVividAura />;
    case 'majestic-flora-nectar':
      return <LineThumbMajesticFlora />;
    case 'golden-sphere-huggies':
      return <LineThumbGoldenSphere />;
    case 'amber-lace-earrings':
      return <LineThumbAmberLace />;
    case 'royal-heirloom-set':
      return <LineThumbRoyalHeirloom />;
    default:
      return <div className="w-20 h-24 bg-champagne" />;
  }
}

export default function CartDrawer() {
  const { isOpen, closeCart, detailedLines, subtotal, setLineQuantity, removeLine, itemCount } = useCart();
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef(null);

  // delay unmount so close animation can play
  useEffect(() => {
    if (isOpen) setMounted(true);
  }, [isOpen]);

  // run image loader on the cart panel when it's open and contents change
  useEffect(() => {
    if (!isOpen || !mounted || !panelRef.current) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, panelRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, mounted, detailedLines]);

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (!isOpen) setMounted(false);
  };

  const show = mounted || isOpen;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-500 ease-editorial',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/50 cursor-default"
        tabIndex={-1}
      />

      {/* panel */}
      <aside
        ref={panelRef}
        className={cn(
          'absolute top-0 right-0 h-full w-full sm:w-[440px] bg-ivory text-ink shadow-soft-lg flex flex-col transition-transform duration-500 ease-editorial',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        {/* header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
          <p className="font-serif text-xl">Your Bag</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-widest-2 text-muted">
              {itemCount} item{itemCount === 1 ? '' : 's'}
            </span>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="inline-flex items-center justify-center w-9 h-9 -mr-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>

        {/* lines */}
        <div className="flex-1 overflow-y-auto">
          {detailedLines.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="font-serif text-2xl text-ink-soft">Your bag is empty</p>
              <p className="mt-3 text-sm text-muted">
                Discover pieces made to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-8 inline-flex btn-primary"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {detailedLines.map((line) => (
                <li key={line.key} className="flex gap-4 px-6 py-5">
                  <LineThumb product={line.product} tone={line.tone} />
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="product-name">{line.product?.title || line.productId}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-widest-2 text-muted">
                          {line.tone === 'silver' ? 'Silver tone' : 'Gold tone'}
                        </p>
                      </div>
                      <p className="font-sans text-sm text-ink-soft whitespace-nowrap">
                        {formatPrice(line.lineTotal)}
                      </p>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => setLineQuantity(line.key, line.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 inline-flex items-center justify-center text-ink-soft hover:text-ink"
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-xs font-sans text-ink-soft">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setLineQuantity(line.key, line.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 inline-flex items-center justify-center text-ink-soft hover:text-ink"
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeLine(line.key)}
                        aria-label={`Remove ${line.product?.title || line.productId}`}
                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest-2 text-muted hover:text-ink transition-colors duration-300 ease-editorial"
                      >
                        <Trash2 className="w-3.5 h-3.5" strokeWidth={1.4} />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* footer / checkout */}
        {detailedLines.length > 0 && (
          <div className="border-t border-hairline px-6 py-6 bg-ivory">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[11px] uppercase tracking-widest-2 text-muted">Subtotal</p>
              <p className="font-serif text-2xl text-ink-soft">{formatPrice(subtotal)}</p>
            </div>
            <p className="text-xs text-muted">
              Shipping & taxes calculated at checkout.
            </p>
            <button type="button" className="mt-5 w-full btn-accent">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-widest-2 text-muted hover:text-ink transition-colors duration-300 ease-editorial"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
