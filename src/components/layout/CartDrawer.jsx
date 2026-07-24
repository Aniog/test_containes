import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, X, Check } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import StockImage from "@/components/ui/StockImage";

export default function CartDrawer() {
  const { items, summary, isOpen, closeCart, updateQuantity, removeItem, lastAdded } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e) {
      if (e.key === "Escape") closeCart();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const freeShipThreshold = 75;
  const progress = Math.min(100, (summary.subtotal / freeShipThreshold) * 100);
  const remaining = Math.max(0, freeShipThreshold - summary.subtotal);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-all duration-500",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping bag"
    >
      <div
        className={cn(
          "absolute inset-0 bg-onyx-900/60 transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={closeCart}
      />

      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cream-100 shadow-drawer flex flex-col transition-transform duration-500 ease-smooth",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-onyx-800/10">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.4} className="text-onyx-800" />
            <h2 className="font-sans uppercase tracking-widest-2 text-[12px] text-onyx-800">
              Your Bag · {summary.count}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 text-onyx-800 hover:text-gold-500 transition-colors"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="px-5 sm:px-6 pt-5">
            <p className="text-[12px] text-mocha-600 mb-2">
              {remaining > 0 ? (
                <>
                  You're <span className="text-onyx-800 font-medium">${remaining.toFixed(0)}</span> away
                  from free worldwide shipping.
                </>
              ) : (
                <span className="text-onyx-800">You've unlocked free worldwide shipping.</span>
              )}
            </p>
            <div className="h-px bg-onyx-800/10 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gold-400 transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">
          {lastAdded && items.find((i) => i.lineId === lastAdded.lineId) && (
            <div className="mb-5 flex items-center gap-2 px-3 py-2.5 bg-gold-50 border border-gold-200 text-[12px] text-onyx-800">
              <Check size={14} strokeWidth={2} className="text-gold-500" />
              <span className="uppercase tracking-widest-2">
                Added — {lastAdded.name}
              </span>
            </div>
          )}

          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <span className="font-display text-[64px] text-onyx-800/20 leading-none">∅</span>
              <p className="mt-6 font-display text-[24px] text-onyx-800">Your bag is empty.</p>
              <p className="mt-2 text-[13px] text-mocha-500 max-w-[28ch]">
                Begin with a bestseller — or discover our new arrivals.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary mt-7"
              >
                Shop the collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4">
                  <div className="w-20 sm:w-24 shrink-0">
                    <StockImage
                      query={item.img1}
                      ratio="3x4"
                      width={300}
                      imgId={`cart-${item.lineId}`}
                      className="w-full"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="product-name text-[11px] sm:text-[12px] leading-snug">
                        {item.name}
                      </h3>
                      <span className="text-[13px] tabular-nums text-onyx-800">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <p className="font-display italic text-[13px] text-mocha-500 mt-1">
                      {item.tone === "silver" ? "Sterling Silver" : "18K Gold Plated"}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-onyx-800/20">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center text-onyx-800 hover:bg-onyx-800/5"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-[12px] tabular-nums text-onyx-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center text-onyx-800 hover:bg-onyx-800/5"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        aria-label={`Remove ${item.name}`}
                        className="p-1.5 text-mocha-500 hover:text-onyx-800 transition-colors"
                      >
                        <Trash2 size={14} strokeWidth={1.4} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / totals */}
        {items.length > 0 && (
          <div className="border-t border-onyx-800/10 p-5 sm:p-6 bg-cream-50">
            <dl className="space-y-2 mb-5 text-[13px]">
              <div className="flex justify-between text-mocha-600">
                <dt>Subtotal</dt>
                <dd className="tabular-nums text-onyx-800">{formatPrice(summary.subtotal)}</dd>
              </div>
              <div className="flex justify-between text-mocha-600">
                <dt>Shipping</dt>
                <dd className="tabular-nums text-onyx-800">
                  {summary.shipping === 0 ? "Free" : formatPrice(summary.shipping)}
                </dd>
              </div>
              <div className="flex justify-between pt-3 border-t border-onyx-800/10">
                <dt className="font-sans uppercase tracking-widest-2 text-[11px] text-onyx-800">
                  Total
                </dt>
                <dd className="text-[18px] tabular-nums text-onyx-800 font-medium">
                  {formatPrice(summary.total)}
                </dd>
              </div>
            </dl>
            <button
              type="button"
              className="btn-primary w-full"
              onClick={() => alert("Checkout coming soon — this is a demo storefront.")}
            >
              Checkout
            </button>
            <p className="mt-3 text-center text-[11px] text-mocha-500">
              Taxes calculated at checkout · 30-day returns
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
