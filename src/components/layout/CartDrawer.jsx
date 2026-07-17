import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StrkImage from "@/components/ui/StrkImage";
import { useStrkImageLoader } from "@/components/ui/StrkImage";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, summary, updateQty, removeItem } = useCart();
  const ref = useStrkImageLoader([isOpen, items.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink-deep/55 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full sm:w-[440px] flex-col bg-cream-soft text-ink shadow-soft transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-line">
          <div>
            <p className="eyebrow">Your Bag</p>
            <h2 className="font-display text-2xl mt-1">
              {summary.count > 0
                ? `${summary.count} ${summary.count === 1 ? "piece" : "pieces"}`
                : "Empty"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center text-ink hover:text-gold transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </header>

        <div ref={ref} className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-16">
              <ShoppingBag className="h-10 w-10 text-ink-soft" strokeWidth={1.25} />
              <p className="mt-4 font-display text-2xl">Your bag is empty</p>
              <p className="mt-2 text-sm text-ink-soft max-w-[260px]">
                Begin a quiet collection — discover our demi-fine pieces designed for everyday ritual.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 btn-outline"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((it) => (
                <li
                  key={it.variantKey}
                  className="flex gap-4 pb-5 border-b border-line last:border-b-0"
                >
                  <div className="relative h-24 w-24 flex-none overflow-hidden bg-cream-warm">
                    <StrkImage
                      imgId={it.imgId}
                      query={`[cart-item-name-${it.variantKey}] [cart-item-tone-${it.variantKey}]`}
                      ratio="1x1"
                      width={200}
                      alt={it.name}
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          id={`cart-item-name-${it.variantKey}`}
                          className="product-name text-[12px]"
                        >
                          {it.name}
                        </p>
                        <p
                          id={`cart-item-tone-${it.variantKey}`}
                          className="mt-1 text-[11px] tracking-eyebrow uppercase text-ink-soft"
                        >
                          {it.tone === "gold" ? "18K Gold Tone" : "Sterling Silver"}
                        </p>
                      </div>
                      <p className="font-display text-lg">
                        {formatPrice(it.price * it.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQty(it.variantKey, it.qty - 1)}
                          aria-label="Decrease quantity"
                          className="inline-flex h-8 w-8 items-center justify-center text-ink hover:text-gold"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-sm">{it.qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(it.variantKey, it.qty + 1)}
                          aria-label="Increase quantity"
                          className="inline-flex h-8 w-8 items-center justify-center text-ink hover:text-gold"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(it.variantKey)}
                        className="inline-flex items-center gap-1.5 text-[11px] tracking-eyebrow uppercase text-ink-soft hover:text-ink transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-line bg-cream-soft px-6 py-5">
            <dl className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-soft">Subtotal</dt>
                <dd>{formatPrice(summary.subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Shipping</dt>
                <dd>
                  {summary.shipping === 0 ? "Complimentary" : formatPrice(summary.shipping)}
                </dd>
              </div>
              <div className="my-2 hairline-ink" />
              <div className="flex justify-between text-base">
                <dt className="font-medium">Total</dt>
                <dd className="font-display text-xl">{formatPrice(summary.total)}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={() => {
                closeCart();
                window.alert(
                  "Checkout is not connected in this preview — your cart state is preserved in localStorage."
                );
              }}
              className="mt-4 btn-primary btn-gold w-full"
            >
              Proceed to Checkout
            </button>
            <p className="mt-3 text-center text-[11px] tracking-eyebrow uppercase text-ink-soft">
              Free worldwide shipping over $80
            </p>
          </footer>
        )}
      </aside>
    </div>
  );
}
