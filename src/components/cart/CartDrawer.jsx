import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, setQuantity, removeItem, subtotal } = useCart();

  // Lock body scroll while drawer open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-500",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping bag"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={closeCart}
      />

      {/* Panel */}
      <aside
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[440px] bg-bone text-ink shadow-2xl transition-transform duration-500 ease-soft-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-line">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4" strokeWidth={1.4} />
            <span className="text-[11px] uppercase tracking-eyebrow text-ink">
              Your Bag
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-ink hover:text-ink-soft"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <p className="font-serif text-2xl font-light mb-3 text-ink">
                Your bag is empty.
              </p>
              <p className="text-sm text-ink-soft mb-8 max-w-xs">
                Discover demi-fine pieces made to be treasured — and worn on the
                quietest days.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 p-6">
                  <div className="w-20 h-24 bg-cream overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          to={`/product/${item.productId}`}
                          onClick={closeCart}
                          className="product-name text-xs block truncate hover:text-gold-deep"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-eyebrow text-ink-soft">
                          {item.variantId === "gold" ? "18K Gold" : "Sterling Silver"}
                        </p>
                      </div>
                      <span className="text-sm text-ink whitespace-nowrap">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-ink-soft"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-ink-soft"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] uppercase tracking-eyebrow text-ink-soft hover:text-ink underline underline-offset-4 decoration-1 decoration-ink/40"
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
          <div className="border-t border-line p-6 bg-bone">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-ink-soft">Subtotal</span>
              <span className="text-ink">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm mb-5">
              <span className="text-ink-soft">Shipping</span>
              <span className="text-ink">
                {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-line pt-4 mb-5">
              <span className="text-[11px] uppercase tracking-eyebrow text-ink">
                Total
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(total)}
              </span>
            </div>
            <button
              type="button"
              className="btn-primary w-full"
              onClick={() => {
                // Placeholder checkout — wire to real provider later.
                window.alert(
                  "Checkout will be connected to a real provider in production."
                );
              }}
            >
              Checkout
            </button>
            <p className="mt-4 text-[10px] uppercase tracking-eyebrow text-ink-soft text-center">
              Free worldwide shipping on orders over $75
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}