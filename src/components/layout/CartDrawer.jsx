import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

function formatPrice(n) {
  return `$${n.toFixed(2)}`;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, summary } = useCart();
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
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
        "fixed inset-0 z-50 transition-opacity duration-500",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <div
        className="absolute inset-0 bg-ink/50"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cream shadow-2xl flex flex-col transition-transform duration-500 ease-elegant",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-ink" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-widest2 font-medium text-ink">
              Your bag
              <span className="text-taupe ml-2">({summary.count})</span>
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 text-ink hover:text-gold-600 transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-8 py-16">
              <div className="w-14 h-14 rounded-full border border-hairline flex items-center justify-center mb-6">
                <ShoppingBag className="w-5 h-5 text-taupe" strokeWidth={1.5} />
              </div>
              <p className="font-serif text-2xl text-ink">Your bag is empty.</p>
              <p className="text-sm text-taupe mt-2 max-w-xs">
                Begin with a quiet everyday piece, or browse our most-loved collections.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline mt-8"
              >
                Shop the collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4 p-6">
                  <Link
                    to={`/product/${it.id}`}
                    onClick={closeCart}
                    className="block w-20 h-24 bg-hairline/40 overflow-hidden flex-shrink-0"
                  >
                    {imageErrors[it.id] ? (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-taupe">
                        {it.name}
                      </div>
                    ) : (
                      <img
                        src={it.image}
                        alt={it.name}
                        onError={() => setImageErrors((s) => ({ ...s, [it.id]: true }))}
                        className="w-full h-full object-cover"
                        style={{ filter: "sepia(0.15) saturate(1.1) brightness(0.98)" }}
                      />
                    )}
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${it.id}`}
                        onClick={closeCart}
                        className="product-name text-ink hover:text-gold-600 transition-colors leading-relaxed"
                      >
                        {it.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(it.id)}
                        aria-label={`Remove ${it.name}`}
                        className="text-taupe hover:text-ink p-1 -mt-1 -mr-1"
                      >
                        <X className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="text-[11px] uppercase tracking-widest2 text-taupe mt-1">
                      {it.category}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => updateQuantity(it.id, it.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="p-1.5 hover:text-gold-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" strokeWidth={2} />
                        </button>
                        <span className="px-3 text-xs tabular-nums">{it.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(it.id, it.quantity + 1)}
                          aria-label="Increase quantity"
                          className="p-1.5 hover:text-gold-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" strokeWidth={2} />
                        </button>
                      </div>
                      <div className="text-sm text-ink font-medium tabular-nums">
                        {formatPrice(it.price * it.quantity)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / totals */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-6 bg-surface">
            <div className="space-y-2 mb-5">
              <div className="flex justify-between text-sm text-taupe">
                <span>Subtotal</span>
                <span className="tabular-nums text-ink">{formatPrice(summary.subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-taupe">
                <span>Shipping</span>
                <span className="tabular-nums text-ink">
                  {summary.shipping === 0 ? "Complimentary" : formatPrice(summary.shipping)}
                </span>
              </div>
              <div className="hairline my-3" />
              <div className="flex justify-between text-base text-ink font-medium">
                <span>Total</span>
                <span className="tabular-nums">{formatPrice(summary.total)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="btn-gold w-full"
            >
              Checkout
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-widest2 text-taupe hover:text-ink py-3 mt-1 transition-colors"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
