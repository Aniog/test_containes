import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, setQty, removeItem, itemCount } = useCart();
  const panelRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e) {
      if (e.key === "Escape") closeCart();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  // Focus the panel when opened (a11y)
  useEffect(() => {
    if (isOpen && panelRef.current) panelRef.current.focus();
  }, [isOpen]);

  const shippingNote = subtotal >= 75 ? "Free shipping" : "Add $15 for free shipping";
  const progressPct = Math.min(100, (subtotal / 75) * 100);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-[1px]"
        onClick={closeCart}
      />
      <aside
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[440px] bg-bone-100",
          "flex flex-col shadow-drawer",
          "transition-transform duration-500 ease-out-soft",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe-light/60">
          <h2 className="display-serif text-2xl">
            Your Bag <span className="text-espresso/50 text-base align-middle">({itemCount})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-espresso/70 hover:text-espresso transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Free-shipping nudge */}
        {items.length > 0 && (
          <div className="px-6 py-3 border-b border-taupe-light/60">
            <p className="text-[11px] uppercase tracking-widest2 text-espresso/65 mb-2">
              {subtotal >= 75 ? "You've unlocked" : "Almost there —"} {shippingNote.toLowerCase()}
            </p>
            <div className="h-1 w-full bg-taupe-light/60 overflow-hidden">
              <div
                className="h-full bg-gold-300 transition-all duration-500 ease-out-soft"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <EmptyState onClose={closeCart} />
          ) : (
            <ul className="px-6 py-4 divide-y divide-taupe-light/60">
              {items.map((item) => (
                <CartLine
                  key={`${item.id}-${item.tone || "gold"}`}
                  item={item}
                  onQty={(q) => setQty(item.id, q, item.tone)}
                  onRemove={() => removeItem(item.id, item.tone)}
                  onClose={closeCart}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer / totals */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-taupe-light/60 bg-bone-50/60">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-[11px] uppercase tracking-widest2 text-espresso/65">Subtotal</span>
              <span className="display-serif text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[11px] text-espresso/55 mb-4">
              Taxes and shipping calculated at checkout.
            </p>
            <button type="button" className="btn btn-primary w-full">
              Checkout
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full text-center text-[11px] uppercase tracking-widest2 text-espresso/60 hover:text-espresso py-2 transition-colors"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

function CartLine({ item, onQty, onRemove, onClose }) {
  const { product, qty, tone, image: cachedImage } = item;
  return (
    <li className="flex gap-4 py-4">
      <Link
        to={`/product/${product.slug}`}
        onClick={onClose}
        className="block w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 image-placeholder bg-bone-50"
        aria-label={product.name}
      >
        {cachedImage ? (
          <img
            alt={product.name}
            src={cachedImage}
            className="relative z-10 w-full h-full object-cover"
            loading="lazy"
          />
        ) : null}
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="product-name" id={`${product.id}-name`}>{product.name}</p>
            <p id={`${product.id}-tagline`} className="text-xs text-espresso/55 mt-1">{product.tagline}</p>
            <p className="text-[11px] uppercase tracking-widest2 text-espresso/50 mt-1">
              Tone: <span className="text-espresso/80">{tone === "silver" ? "Silver" : "Gold"}</span>
            </p>
          </div>
          <p className="price text-sm whitespace-nowrap">{formatPrice(product.price * qty)}</p>
        </div>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <div className="inline-flex items-center border border-taupe-light">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => onQty(qty - 1)}
              className="h-8 w-8 flex items-center justify-center text-espresso/70 hover:text-espresso transition-colors"
            >
              <Minus size={13} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-sm tabular-nums">{qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => onQty(qty + 1)}
              className="h-8 w-8 flex items-center justify-center text-espresso/70 hover:text-espresso transition-colors"
            >
              <Plus size={13} strokeWidth={1.5} />
            </button>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="text-[11px] uppercase tracking-widest2 text-espresso/55 hover:text-espresso transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

function EmptyState({ onClose }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8 py-16">
      <div className="w-16 h-16 rounded-full bg-bone-50 flex items-center justify-center text-espresso/60">
        <ShoppingBag size={22} strokeWidth={1.2} />
      </div>
      <h3 className="display-serif text-2xl mt-6">Your bag is empty</h3>
      <p className="text-sm text-espresso/60 mt-2 max-w-xs">
        Discover demi-fine pieces made to live with you, every day.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="btn btn-outline mt-6"
      >
        Shop the Collection
      </Link>
    </div>
  );
}
