import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCurrency, cn } from "@/lib/utils";
import { PRODUCTS } from "@/data/products";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart();

  // Lock body scroll while open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 bg-ink/40 z-40 transition-opacity duration-400",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-ivory shadow-2xl",
          "flex flex-col transition-transform duration-500 ease-elegant",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-hairline">
          <div className="flex items-baseline gap-3">
            <h2 className="font-serif text-2xl text-ink">Your Cart</h2>
            <span className="eyebrow text-muted">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-accent transition-colors p-1 -m-1"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-2">
          {items.length === 0 ? (
            <EmptyCart onClose={closeCart} />
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <CartLine
                  key={item.id}
                  item={item}
                  onRemove={() => removeItem(item.id)}
                  onUpdateQty={(qty) => updateQuantity(item.id, qty)}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer / subtotal */}
        {items.length > 0 && (
          <footer className="border-t border-hairline px-6 sm:px-8 py-6 bg-ivory">
            <div className="flex items-baseline justify-between mb-5">
              <span className="eyebrow text-ink">Subtotal</span>
              <span className="font-serif text-2xl text-ink">
                {formatCurrency(subtotal)}
              </span>
            </div>
            <p className="font-serif text-sm text-muted leading-[1.6] mb-5 italic">
              Shipping and taxes calculated at checkout. Free worldwide shipping on orders over $80.
            </p>
            <button
              type="button"
              className="btn-primary w-full"
              onClick={() => alert("Checkout coming soon — this is a demo storefront.")}
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-3 text-center text-xs uppercase tracking-[0.22em] text-muted hover:text-ink transition-colors py-3"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}

function CartLine({ item, onRemove, onUpdateQty }) {
  // Resolve the image robustly: prefer item.image (set when added); fall back
  // to the current product record (covers older persisted carts that don't
  // carry the image field).
  const product = PRODUCTS.find((p) => p.id === item.productId);
  const imageSrc = item.image || product?.image;
  const imageAlt = item.imageAlt || product?.imageAlt || item.name;
  return (
    <li className="flex gap-4 py-5">
      <Link
        to={`/product/${item.slug}`}
        className="block shrink-0 w-20 h-24 bg-sand overflow-hidden"
      >
        {imageSrc ? (
          <img
            alt={imageAlt}
            loading="lazy"
            src={imageSrc}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-sand" aria-hidden="true" />
        )}
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/product/${item.slug}`}
              className="block font-serif text-[0.95rem] uppercase tracking-[0.16em] text-ink leading-[1.3] font-medium truncate"
            >
              {item.name}
            </Link>
            {item.variantLabel && (
              <p className="mt-1 text-xs text-muted">
                <span className="uppercase tracking-[0.18em]">{item.variantLabel}</span>
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${item.name}`}
            className="text-muted hover:text-ink transition-colors p-1 -m-1"
          >
            <X className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <QuantityStepper
            quantity={item.quantity}
            onChange={onUpdateQty}
            ariaLabel={item.name}
          />
          <span className="font-sans text-sm font-medium text-ink">
            {formatCurrency(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </li>
  );
}

function QuantityStepper({ quantity, onChange, ariaLabel }) {
  return (
    <div className="inline-flex items-center border border-hairline">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        aria-label={`Decrease quantity of ${ariaLabel}`}
        className="w-8 h-8 flex items-center justify-center text-ink hover:bg-sand transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
        disabled={quantity <= 1}
      >
        <Minus className="w-3 h-3" strokeWidth={1.5} />
      </button>
      <span
        className="w-8 text-center font-sans text-sm text-ink tabular-nums"
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        aria-label={`Increase quantity of ${ariaLabel}`}
        className="w-8 h-8 flex items-center justify-center text-ink hover:bg-sand transition-colors"
      >
        <Plus className="w-3 h-3" strokeWidth={1.5} />
      </button>
    </div>
  );
}

function EmptyCart({ onClose }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-16">
      <ShoppingBag className="w-10 h-10 text-muted mb-5" strokeWidth={1.25} />
      <h3 className="font-serif text-2xl text-ink mb-2">Your cart is empty</h3>
      <p className="font-serif text-sm text-muted italic mb-7 max-w-[28ch]">
        Pieces you'll want to keep close — start with a bestseller.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="btn-primary"
      >
        Shop the Collection
      </Link>
    </div>
  );
}
