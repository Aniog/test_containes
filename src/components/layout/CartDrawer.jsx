import React, { useEffect, useRef } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQty, remove } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] animate-fade-in"
      />
      <aside ref={containerRef} className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
        <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div>
            <p className="eyebrow">Your Bag</p>
            <h2 className="font-serif text-2xl text-ink mt-1">
              {items.length} {items.length === 1 ? "item" : "items"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-ink hover:text-gold-deep transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-5">
                <ShoppingBag className="w-6 h-6 text-taupe" strokeWidth={1.25} />
              </div>
              <p className="font-serif text-2xl text-ink">Your bag is empty</p>
              <p className="text-sm text-taupe mt-2 max-w-[28ch]">
                Begin with a piece designed to be worn for years.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-outline mt-8"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((line) => (
                <li key={line.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream overflow-hidden flex-shrink-0">
                    <img
                      alt={line.product.name}
                      className="w-full h-full object-cover"
                      data-strk-img-id={line.product.imgId1}
                      data-strk-img={`[${line.product.titleId}] [${line.product.descId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${line.product.id}`}
                      onClick={closeCart}
                      className="product-name text-[13px] block truncate hover:text-gold-deep transition-colors"
                    >
                      {line.product.name}
                    </Link>
                    <p className="text-xs text-taupe mt-1">
                      {line.variant === "gold" ? "18K Gold Plated" : "Sterling Silver"}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(line.key, line.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">{line.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(line.key, line.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium tabular-nums text-ink">
                        {formatPrice(line.lineTotal)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(line.key)}
                      className="text-[11px] uppercase tracking-[0.18em] text-taupe hover:text-ink mt-3 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-hairline px-6 py-6 space-y-4 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="font-serif text-2xl text-ink tabular-nums">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-taupe">
              Shipping & taxes calculated at checkout
            </p>
            <button type="button" className="btn-primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="btn-ghost w-full"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
