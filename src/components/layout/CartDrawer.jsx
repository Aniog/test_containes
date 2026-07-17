import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function CartDrawer() {
  const { isOpen, closeCart, detailedItems, subtotal, updateQuantity, removeItem, itemCount } = useCart();
  const drawerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const previousFocus = useRef(null);

  // Lock body scroll, focus first element, trap focus, ESC to close
  useEffect(() => {
    if (!isOpen) return undefined;
    previousFocus.current = typeof document !== "undefined" ? document.activeElement : null;
    if (typeof document !== "undefined") document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 60);

    const onKey = (e) => {
      if (e.key === "Escape") {
        closeCart();
        return;
      }
      if (e.key !== "Tab") return;
      const root = drawerRef.current;
      if (!root) return;
      const focusable = root.querySelectorAll(FOCUSABLE);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      if (typeof document !== "undefined") document.body.style.overflow = "";
      const prev = previousFocus.current;
      if (prev && typeof prev.focus === "function") {
        prev.focus();
      }
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-ink-deep/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute inset-y-0 right-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-xl transition-transform duration-300 ease-editorial ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <div>
            <p className="eyebrow">Your Bag</p>
            <h2 className="mt-1 font-serif text-2xl text-ink">
              {itemCount === 0 ? "Nothing here yet" : `${itemCount} item${itemCount === 1 ? "" : "s"}`}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="grid h-9 w-9 place-items-center text-ink transition-colors hover:text-gold-deep"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </header>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {detailedItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-4 h-10 w-10 text-ink-soft" strokeWidth={1.2} />
              <p className="font-serif text-2xl text-ink">Your bag is empty</p>
              <p className="mt-2 max-w-[28ch] text-sm text-ink-soft">
                Browse the collection and find something to treasure.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 cta-label text-ivory transition-colors hover:bg-gold-deep"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {detailedItems.map((item) => (
                <li
                  key={item.productId}
                  className="flex gap-4 border-b border-hairline pb-5"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-bone">
                    <img
                      data-strk-img-id={`cart-${item.productId}`}
                      data-strk-img={item.product.imgQuery}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="240"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="product-label text-ink">
                          {item.product.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-ink-soft">
                          {item.product.material.split("·")[0].trim()}
                        </p>
                      </div>
                      <p className="text-sm font-medium tabular-nums text-ink">
                        {formatPrice(item.lineTotal)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.product.name}`}
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="grid h-8 w-8 place-items-center text-ink transition-colors hover:text-gold-deep"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="grid h-8 w-8 place-items-center text-sm tabular-nums text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.product.name}`}
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="grid h-8 w-8 place-items-center text-ink transition-colors hover:text-gold-deep"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="text-xs uppercase tracking-[0.18em] text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
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

        {/* Footer / subtotal */}
        {detailedItems.length > 0 && (
          <footer className="border-t border-hairline bg-cream/60 px-6 py-5">
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                Subtotal
              </span>
              <span className="font-serif text-2xl tabular-nums text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-xs text-ink-soft">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full bg-gold py-4 cta-label text-ivory transition-colors hover:bg-gold-deep"
              onClick={() => {
                // Placeholder: would route to /checkout when backend is wired.
                window.alert("Checkout is coming soon — your bag is saved.");
              }}
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 block w-full py-1 text-center text-xs uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;
