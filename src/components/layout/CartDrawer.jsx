import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart, useUI } from "@/context/CartContext";
import { formatPrice } from "@/lib/cn";
import StockImage from "@/components/ui/StockImage";

export default function CartDrawer() {
  const { cartOpen, setCartOpen } = useUI();
  const { items, subtotal, count, progress, freeShippingThreshold, setQty, remove } = useCart();
  const closeRef = useRef(null);

  useEffect(() => {
    if (cartOpen && closeRef.current) {
      const t = setTimeout(() => closeRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [cartOpen]);

  const remaining = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div
      aria-hidden={!cartOpen}
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-ink/60" onClick={() => setCartOpen(false)} />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={`absolute right-0 top-0 h-full w-full sm:w-[460px] bg-cream shadow-lift flex flex-col transition-transform duration-500 ease-editorial ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-6 h-16 border-b border-ink/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-ink" strokeWidth={1.4} />
            <h2 className="vm-serif text-xl text-ink">Your Bag</h2>
            <span className="text-xs text-ink-muted">({count})</span>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="p-2 text-ink hover:text-gold-dark"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </header>

        {/* Free shipping progress */}
        <div className="px-6 pt-5">
          {remaining > 0 ? (
            <p className="text-[11px] tracking-[0.18em] uppercase text-ink-soft">
              You're <span className="text-gold-dark font-medium">{formatPrice(remaining)}</span> away from free shipping
            </p>
          ) : (
            <p className="text-[11px] tracking-[0.18em] uppercase text-gold-dark font-medium">
              Complimentary shipping unlocked
            </p>
          )}
          <div className="mt-3 h-[2px] w-full bg-ink/10 overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-700 ease-editorial"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <EmptyState onClose={() => setCartOpen(false)} />
          ) : (
            <ul className="space-y-7">
              {items.map((line) => (
                <li key={line.key} className="flex gap-4">
                  <Link
                    to={`/product/${line.id}`}
                    onClick={() => setCartOpen(false)}
                    className="block w-24 h-28 flex-shrink-0 bg-cream-200 vm-img-zoom"
                  >
                    <StockImage
                      alt={line.name}
                      imgId={`cart-${line.key}`}
                      query={line.imageQuery || line.name}
                      ratio="4x5"
                      width="240"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${line.id}`}
                        onClick={() => setCartOpen(false)}
                        className="block"
                      >
                        <p className="vm-product-name text-ink truncate">{line.name}</p>
                        <p className="text-xs text-ink-muted mt-0.5 capitalize">{line.tone} · {line.tagline}</p>
                      </Link>
                      <p className="text-sm text-ink whitespace-nowrap">{formatPrice(line.price * line.qty)}</p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-ink/20">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          className="w-8 h-8 grid place-items-center text-ink hover:text-gold-dark"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.6} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink tabular-nums">{line.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          className="w-8 h-8 grid place-items-center text-ink hover:text-gold-dark"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.6} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(line.key)}
                        className="text-[11px] tracking-[0.18em] uppercase text-ink-muted hover:text-gold-dark transition-colors"
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
          <div className="border-t border-ink/10 px-6 py-5 bg-cream">
            <div className="flex items-baseline justify-between mb-4">
              <span className="vm-eyebrow text-ink-muted">Subtotal</span>
              <span className="vm-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-ink-muted mb-4">
              Shipping & taxes calculated at checkout. Free worldwide shipping on orders over {formatPrice(freeShippingThreshold)}.
            </p>
            <button type="button" className="vm-btn vm-btn--primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(false)}
              className="vm-btn vm-btn--ghost w-full mt-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

function EmptyState({ onClose }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-2">
      <div className="w-16 h-16 grid place-items-center rounded-full bg-cream-200 mb-5">
        <ShoppingBag className="w-6 h-6 text-ink-soft" strokeWidth={1.4} />
      </div>
      <p className="vm-serif text-3xl text-ink">Your bag is empty.</p>
      <p className="text-sm text-ink-muted mt-2 max-w-xs">
        Begin with our bestsellers, or browse the new arrivals — each piece arrives in our signature cream box.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="vm-btn vm-btn--primary mt-7"
      >
        Shop the Collection
      </Link>
    </div>
  );
}
