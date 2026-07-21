import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext.jsx";
import { cn } from "@/lib/utils.js";
import { getProductBySlug, formatPrice } from "@/data/products.js";
import strkImgConfig from "@/strk-img-config.json";
import { ImageHelper } from "@strikingly/sdk";

const SHIPPING_THRESHOLD = 75; // free shipping over $75

function CartThumb({ product, name }) {
  const ref = useRef(null);
  const imgId = product?.imgId;
  const titleId = product?.titleId;
  useEffect(() => {
    if (!ref.current || !imgId) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [imgId]);
  return (
    <div
      ref={ref}
      className="relative w-20 h-24 sm:w-24 sm:h-28 flex-none overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900"
    >
      <img
        alt={name}
        data-strk-img-id={imgId}
        data-strk-img={`[${titleId || name}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="240"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    setQty,
    removeItem,
    count,
    subtotal,
    formattedSubtotal,
  } = useCart();

  const panelRef = useRef(null);

  // Lock body scroll
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const remaining = Math.max(0, SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / SHIPPING_THRESHOLD) * 100);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className="absolute inset-0 bg-ink-900/40"
        onClick={closeCart}
        aria-hidden
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[420px] bg-cream-100 text-ink-800 shadow-drawer",
          "flex flex-col",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 h-16 border-b border-hairline/70">
          <h2 className="font-serif text-xl tracking-[0.18em] uppercase">
            Your Bag
            <span className="ml-2 text-xs text-muted-500 tracking-[0.2em]">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 hover:opacity-70"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Free-shipping progress */}
        <div className="px-5 sm:px-7 py-3 border-b border-hairline/60 bg-sand-100/50">
          {remaining > 0 ? (
            <p className="text-[11px] tracking-[0.22em] uppercase text-ink-800">
              Add <span className="text-gold-500 font-medium">{formatPrice(remaining)}</span> for free shipping
            </p>
          ) : (
            <p className="text-[11px] tracking-[0.22em] uppercase text-ink-800">
              You qualify for <span className="text-gold-500 font-medium">complimentary shipping</span>
            </p>
          )}
          <div className="mt-2 h-px w-full bg-hairline/70">
            <div
              className="h-px bg-gold-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <EmptyCart onClose={closeCart} />
          ) : (
            <ul className="px-5 sm:px-7 py-4 divide-y divide-hairline/60">
              {items.map((it) => {
                const product = getProductBySlug(it.slug);
                const name = product?.name || it.name;
                return (
                  <li key={it.key} className="py-4 flex gap-4">
                    <Link
                      to={`/product/${it.slug}`}
                      onClick={closeCart}
                      className="flex-none"
                    >
                      <CartThumb product={product} name={name} />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${it.slug}`}
                            onClick={closeCart}
                            className="block"
                          >
                            <p className="product-name text-ink-800">{name}</p>
                          </Link>
                          {it.tone && (
                            <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-muted-500">
                              {it.tone === "gold" ? "18K Gold" : "Sterling Silver"}
                            </p>
                          )}
                        </div>
                        <p className="text-sm font-medium text-ink-800 whitespace-nowrap">
                          {formatPrice(it.price * it.qty)}
                        </p>
                      </div>

                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-hairline/80">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(it.key, it.qty - 1)}
                            className="w-8 h-8 flex items-center justify-center text-ink-800 hover:bg-sand-100"
                          >
                            <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-xs tracking-wider">
                            {it.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(it.key, it.qty + 1)}
                            className="w-8 h-8 flex items-center justify-center text-ink-800 hover:bg-sand-100"
                          >
                            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(it.key)}
                          className="text-[11px] tracking-[0.22em] uppercase text-muted-500 hover:text-ink-800 underline-offset-4 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline/70 px-5 sm:px-7 py-5 bg-cream-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] tracking-[0.28em] uppercase text-muted-500">Subtotal</span>
              <span className="font-serif text-2xl text-ink-800">{formattedSubtotal}</span>
            </div>
            <p className="text-[11px] text-muted-500 mb-4">
              Taxes and shipping calculated at checkout.
            </p>
            <button type="button" className="btn-primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full text-center text-[11px] tracking-[0.28em] uppercase text-muted-500 hover:text-ink-800 py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

function EmptyCart({ onClose }) {
  return (
    <div className="px-5 sm:px-7 py-14 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full border border-hairline flex items-center justify-center text-ink-800">
        <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 font-serif text-2xl text-ink-800">Your bag is empty</h3>
      <p className="mt-2 text-sm text-muted-500 max-w-[280px]">
        Discover our demi-fine gold jewelry — designed for everyday wear and forever keeps.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="btn-outline mt-6"
      >
        Shop the Collection
      </Link>
    </div>
  );
}
