import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StrkImage from "@/components/ui/StrkImage";
import { useRef } from "react";

export default function CartDrawer() {
  const { isOpen, closeCart, items, summary, updateQuantity, removeItem } = useCart();
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const frame = window.requestAnimationFrame(() => {
      // re-scan any dynamically-rendered cart thumbnails
      const evt = new Event("cart:opened");
      window.dispatchEvent(evt);
    });
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full sm:w-[440px] bg-bone text-ink shadow-elevated",
          "flex flex-col transition-transform duration-300 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl font-medium">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:text-champagne-deep transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <p className="font-serif text-2xl text-ink mb-2">Your bag is empty</p>
              <p className="text-small text-muted mb-8 max-w-[260px]">
                Discover demi-fine pieces designed to be worn — and treasured — every day.
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
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  <div className="w-20 h-24 bg-blush overflow-hidden flex-shrink-0">
                    <StrkImage
                      imgId={item.imgId}
                      query={item.query}
                      ratio="3x4"
                      width={200}
                      alt={item.name}

                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="product-name text-[11px] truncate">{item.name}</h3>
                        <p className="text-small text-muted mt-1">
                          {item.tone ? `Tone · ${item.tone}` : "One size"}
                        </p>
                      </div>
                      <p className="text-small text-ink font-medium whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="p-1.5 hover:text-champagne-deep transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-small tabular-nums">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="p-1.5 hover:text-champagne-deep transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted hover:text-ink transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-6 bg-bone">
            <dl className="space-y-2 text-small">
              <div className="flex justify-between">
                <dt className="text-muted">Subtotal</dt>
                <dd className="tabular-nums">{formatPrice(summary.subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Shipping</dt>
                <dd className="tabular-nums">
                  {summary.shipping === 0 ? "Complimentary" : formatPrice(summary.shipping)}
                </dd>
              </div>
              <div className="flex justify-between pt-3 border-t border-hairline text-ink font-medium">
                <dt>Total</dt>
                <dd className="tabular-nums">{formatPrice(summary.total)}</dd>
              </div>
            </dl>
            <button type="button" className="btn-primary w-full mt-5">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center mt-3 text-eyebrow uppercase text-muted hover:text-ink transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
