import { useEffect, useRef } from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import strkImgConfig from "@/strk-img-config.json";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart();
  const containerRef = useRef(null);

  // Lock body scroll while drawer open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
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

  // Trigger image loading when drawer opens and when items change
  useEffect(() => {
    if (!isOpen) return;
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <button
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-velmora-ink/40 backdrop-blur-[2px] transition-opacity"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className="slide-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-2xl"
        role="dialog"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-6 py-5">
          <div>
            <h2 className="font-serif text-2xl">Your Bag</h2>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.22em] text-velmora-taupe">
              {count} {count === 1 ? "piece" : "pieces"}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 text-velmora-ink transition-colors hover:text-velmora-gold-deep"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="font-serif text-2xl text-velmora-ink">Your bag is empty</div>
              <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-velmora-taupe">
                Discover pieces made to be worn every day, and treasured for a lifetime.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-7 inline-block bg-velmora-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-velmora-cream transition-colors hover:bg-velmora-charcoal"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <div className="h-28 w-24 flex-shrink-0 overflow-hidden bg-velmora-bone">
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imageId}
                      data-strk-img={item.imageQuery}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width={300}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={closeCart}
                          className="block text-[12px] font-medium uppercase tracking-[0.18em] text-velmora-ink hover:text-velmora-gold-deep"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-[12px] capitalize text-velmora-taupe">
                          {item.variantId} tone
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="p-1 text-velmora-taupe transition-colors hover:text-velmora-ink"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.4} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-end justify-between pt-3">
                      <div className="inline-flex items-center border border-velmora-ink/15">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2.5 py-1.5 text-velmora-ink transition-colors hover:bg-velmora-bone"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.6} />
                        </button>
                        <span className="min-w-[28px] text-center text-[13px] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2.5 py-1.5 text-velmora-ink transition-colors hover:bg-velmora-bone"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.6} />
                        </button>
                      </div>
                      <span className="text-[14px] tabular-nums text-velmora-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-ink/10 bg-velmora-cream px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-[12px] uppercase tracking-[0.22em] text-velmora-taupe">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-velmora-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-[12px] text-velmora-taupe">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-5 w-full bg-velmora-ink py-4 text-[12px] uppercase tracking-[0.24em] text-velmora-cream transition-colors hover:bg-velmora-charcoal"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full py-3 text-[12px] uppercase tracking-[0.22em] text-velmora-ink transition-colors hover:text-velmora-gold-deep"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
