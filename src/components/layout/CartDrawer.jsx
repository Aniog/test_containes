import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { getProductById } from "@/data/products";

const FREE_SHIPPING_THRESHOLD = 75;

function CartLineRow({ line }) {
  const { updateQuantity, removeItem } = useCart();
  const product = getProductById(line.id);
  const productNameId = product ? `cart-${line.id}-name` : `cart-${line.id}-name`;
  return (
    <li className="flex gap-4 py-6 border-b border-hairline last:border-b-0">
      {/* Mini image (use strk-img) */}
      <Link
        to={product ? `/product/${product.id}` : "/shop"}
        className="shrink-0 w-20 h-24 bg-ivory-dark overflow-hidden"
      >
        {product && (
          <img
            alt={line.name}
            data-strk-img-id={`cart-${line.id}-thumb`}
            data-strk-img={`[${productNameId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        )}
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link to={product ? `/product/${product.id}` : "/shop"}>
              <p id={productNameId} className="product-name text-cocoa truncate">
                {line.name}
              </p>
            </Link>
            {line.variant && (
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted">{line.variant}</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => removeItem(line.lineId)}
            aria-label={`Remove ${line.name}`}
            className="h-7 w-7 -mr-1 flex items-center justify-center text-muted hover:text-claret transition-colors"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="inline-flex items-center border border-hairline">
            <button
              type="button"
              onClick={() => updateQuantity(line.lineId, line.quantity - 1)}
              className="h-8 w-8 flex items-center justify-center text-cocoa hover:bg-ivory-dark"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" strokeWidth={1.5} />
            </button>
            <span className="h-8 w-8 flex items-center justify-center text-xs text-cocoa tabular-nums">
              {line.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(line.lineId, line.quantity + 1)}
              className="h-8 w-8 flex items-center justify-center text-cocoa hover:bg-ivory-dark"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" strokeWidth={1.5} />
            </button>
          </div>
          <p className="text-sm text-cocoa tabular-nums">{formatPrice(line.price * line.quantity)}</p>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, itemCount } = useCart();

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-cocoa/40" onClick={closeCart} />
      <div
        role="dialog"
        aria-label="Shopping cart"
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[440px] bg-ivory-light shadow-drawer flex flex-col transition-transform duration-500 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <p className="product-name text-cocoa flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Cart{itemCount > 0 ? ` (${itemCount})` : ""}
          </p>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="h-10 w-10 flex items-center justify-center text-cocoa hover:text-claret"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-b border-hairline">
            <p className="text-xs text-cocoa-soft">
              {remaining > 0 ? (
                <>
                  You're <span className="text-claret font-medium">{formatPrice(remaining)}</span> away from free shipping.
                </>
              ) : (
                <>You've unlocked <span className="text-claret font-medium">free shipping</span>.</>
              )}
            </p>
            <div className="mt-3 h-px w-full bg-hairline overflow-hidden">
              <div
                className="h-full bg-claret transition-all duration-500 ease-editorial"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <p className="serif-display text-3xl text-cocoa">Your cart awaits.</p>
            <p className="mt-3 text-sm text-muted max-w-xs">
              Begin with our bestselling gold huggies, or explore the full collection.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-6">
            {items.map((line) => (
              <CartLineRow key={line.lineId} line={line} />
            ))}
          </ul>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-hairline bg-ivory-light">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Subtotal</p>
              <p className="serif-display text-2xl text-cocoa">{formatPrice(subtotal)}</p>
            </div>
            <button type="button" className="btn-primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-[11px] uppercase tracking-[0.18em] text-cocoa hover:text-claret transition-colors"
            >
              or continue shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
