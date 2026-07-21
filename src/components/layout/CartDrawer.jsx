import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Truck, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { getProductById, formatPrice } from '@/data/products';

const FREE_SHIPPING_THRESHOLD = 75;

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, updateQuantity, removeItem, subtotal, toast } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isCartOpen) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isCartOpen, items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isCartOpen) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isCartOpen, closeCart]);

  const progress = Math.min(subtotal / FREE_SHIPPING_THRESHOLD, 1);
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/50 backdrop-blur-sm transition-opacity duration-400 ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory shadow-[0_20px_60px_-20px_rgba(30,21,13,0.45)] transition-transform duration-500 ease-out-soft ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
            Your Cart {items.length > 0 && <span className="text-taupe">({items.length})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-bronze"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-hairline text-bronze">
              <ShoppingBag className="h-6 w-6" strokeWidth={1.25} />
            </span>
            <p className="font-serif text-2xl font-light text-ink">Your cart is empty</p>
            <p className="text-sm leading-relaxed text-taupe">
              Discover demi-fine pieces crafted to be treasured every day.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-bronze px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-bronze-deep"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="border-b border-hairline px-6 py-4">
              <p className="flex items-center gap-2 text-xs text-cocoa">
                {remaining > 0 ? (
                  <>
                    <Truck className="h-4 w-4 text-bronze" strokeWidth={1.5} />
                    You’re <strong>{formatPrice(remaining)}</strong> away from free express shipping
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4 text-bronze" strokeWidth={1.5} />
                    You’ve unlocked free express shipping
                  </>
                )}
              </p>
              <div className="mt-2.5 h-px bg-hairline">
                <div
                  className="h-px bg-bronze transition-all duration-700 ease-out-soft"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;
                return (
                  <div key={item.key} className="flex gap-4 border-b border-hairline/70 py-5">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="block h-28 w-24 shrink-0 overflow-hidden bg-sand"
                    >
                      <img
                        data-strk-img-id={`cart-${product.imgIds.main}`}
                        data-strk-img={`[${product.textIds.tagline}] [${product.textIds.name}] gold jewelry product photo`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="240"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                            {product.name}
                          </p>
                          <p className="mt-1 text-[11px] capitalize tracking-wide text-taupe">
                            {item.variant} tone
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-cocoa">
                          {formatPrice(product.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-hairline">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:text-bronze"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold text-ink">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:text-bronze"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          className="text-[11px] uppercase tracking-[0.2em] text-taupe underline-offset-4 transition-colors hover:text-bronze hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-hairline bg-cream px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-cocoa">Subtotal</span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-taupe">
                Shipping and taxes calculated at checkout. Complimentary gift wrapping included.
              </p>
              <button
                type="button"
                className="mt-4 w-full bg-bronze py-4 text-[11px] uppercase tracking-[0.3em] text-ivory transition-colors duration-300 hover:bg-bronze-deep"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.25em] text-cocoa underline-offset-4 transition-colors hover:text-bronze hover:underline"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>

      {/* Toast */}
      {toast && (
        <div
          key={toast.id}
          className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 animate-toast-in items-center gap-3 bg-espresso px-5 py-3.5 shadow-[0_20px_50px_-16px_rgba(30,21,13,0.6)]"
          role="status"
        >
          <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
          <p className="whitespace-nowrap text-xs tracking-wide text-ivory">{toast.message}</p>
        </div>
      )}
    </>
  );
}
