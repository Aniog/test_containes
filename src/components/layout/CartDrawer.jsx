import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { findProduct } from "@/data/products";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, totals } = useCart();
  const closeRef = useRef(null);

  // Focus close button on open, lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => closeRef.current?.focus(), 50);
      return () => {
        document.body.style.overflow = "";
        clearTimeout(t);
      };
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping bag"
    >
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 w-full max-w-md bg-cream shadow-2xl",
          "flex flex-col transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div>
            <p className="eyebrow">Your bag</p>
            <h3 className="font-serif text-2xl mt-1 text-ink">
              {totals.count === 0
                ? "Empty for now"
                : `${totals.count} ${totals.count === 1 ? "piece" : "pieces"}`}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="p-2 -mr-2 text-ink hover:text-accent-deep transition-colors"
            aria-label="Close cart"
            onClick={closeCart}
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {items.length === 0 ? (
            <div className="px-6 py-16 text-center flex flex-col items-center">
              <ShoppingBag className="w-10 h-10 text-taupe mb-5" strokeWidth={1.2} />
              <p className="font-serif text-2xl text-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-ink-muted max-w-xs">
                Begin with our most-loved pieces — free worldwide shipping over $75.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-8 btn-accent"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => {
                const product = findProduct(item.productId);
                return (
                  <li key={item.key} className="px-6 py-5 flex gap-4">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="shrink-0 w-20 h-24 bg-sand overflow-hidden relative"
                      aria-label={item.name}
                    >
                      {/* Decorative gold-leaf motif as visual swatch */}
                      <svg
                        viewBox="0 0 40 48"
                        className="absolute inset-0 w-full h-full text-accent/40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        aria-hidden="true"
                      >
                        <ellipse cx="20" cy="18" rx="9" ry="11" />
                        <ellipse cx="20" cy="18" rx="4" ry="5" />
                        <path d="M20 7 L20 3" />
                        <path d="M11 18 L7 18" />
                        <path d="M29 18 L33 18" />
                        <path d="M14 26 L10 30" />
                        <path d="M26 26 L30 30" />
                      </svg>
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="product-name truncate">{item.name}</p>
                          <p className="mt-1 text-[12px] text-ink-muted truncate">
                            {item.subtitle}
                          </p>
                          {item.variantLabel && (
                            <p className="mt-1 text-[11px] uppercase tracking-wider-2 text-taupe">
                              {item.variantLabel}
                            </p>
                          )}
                        </div>
                        <p className="font-sans text-[14px] text-ink font-medium shrink-0">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            type="button"
                            className="w-8 h-8 inline-flex items-center justify-center text-ink hover:bg-sand"
                            onClick={() => updateQty(item.key, item.qty - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={1.6} />
                          </button>
                          <span className="w-8 text-center text-[13px] tabular-nums text-ink">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            className="w-8 h-8 inline-flex items-center justify-center text-ink hover:bg-sand"
                            onClick={() => updateQty(item.key, item.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={1.6} />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-[11px] uppercase tracking-widest-2 text-taupe hover:text-ink underline underline-offset-4"
                          onClick={() => removeItem(item.key)}
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
          <div className="border-t border-hairline bg-ivory px-6 py-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-ink-muted">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatPrice(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between text-ink-muted">
                <span>Shipping</span>
                <span className="tabular-nums">
                  {totals.shipping === 0 ? "Complimentary" : formatPrice(totals.shipping)}
                </span>
              </div>
              <div className="pt-3 mt-1 border-t border-hairline flex justify-between text-ink font-medium">
                <span className="text-[12px] uppercase tracking-widest-2">Total</span>
                <span className="font-sans text-base tabular-nums">
                  {formatPrice(totals.total)}
                </span>
              </div>
            </div>
            <button type="button" className="mt-5 w-full btn-primary">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full text-center text-[11px] uppercase tracking-widest-2 text-taupe hover:text-ink py-3"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
