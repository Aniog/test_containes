import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart, formatPrice } from "@/context/CartContext.jsx";
import { useStrkImages } from "@/lib/imageLoader.js";
import Hairline from "@/components/common/Hairline.jsx";

/**
 * Slide-in cart drawer.
 * - Open/closed state is driven by `useCart().isOpen`.
 * - Body scroll is locked while the drawer is open.
 * - Esc closes the drawer.
 */
export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, itemCount, setQuantity, removeFromCart } =
    useCart();
  const containerRef = useRef(null);

  useStrkImages(containerRef, [isOpen, lines.length]);

  // Body scroll lock.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isOpen]);

  // Esc to close.
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
        className={[
          "fixed inset-0 z-50 bg-ink/40 transition-opacity duration-500 ease-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={[
          "fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] bg-surface shadow-drawer transform transition-transform duration-500 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        ref={containerRef}
      >
        <header className="px-6 md:px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-ink font-light">Your bag</h2>
            <p className="font-sans text-xs text-ink-muted tracking-wide mt-1">
              {itemCount === 0
                ? "Nothing here yet"
                : `${itemCount} ${itemCount === 1 ? "piece" : "pieces"}`}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-ink hover:text-gold transition-colors"
            aria-label="Close bag"
          >
            <X strokeWidth={1.5} className="w-5 h-5" />
          </button>
        </header>

        <Hairline />

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center px-8 py-20 gap-4">
              <ShoppingBag
                strokeWidth={1}
                className="w-10 h-10 text-ink-soft"
              />
              <p className="font-serif text-2xl font-light text-ink">
                Your bag is empty
              </p>
              <p className="font-sans text-sm text-ink-muted max-w-xs">
                Begin with a best-loved piece — every order arrives in our
                signature gift packaging.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary mt-4"
              >
                Shop the collection
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col">
              {lines.map((line) => {
                const img = line.product.images[0];
                return (
                  <li
                    key={line.lineId}
                    className="flex gap-4 px-6 md:px-8 py-6 border-b border-line-soft"
                  >
                    <Link
                      to={`/product/${line.product.id}`}
                      onClick={closeCart}
                      className="block w-20 h-24 flex-shrink-0 overflow-hidden bg-surface-warm"
                    >
                      <img
                        alt={line.product.name}
                        data-strk-img-id={img.id}
                        data-strk-img={img.query}
                        data-strk-img-ratio={img.ratio}
                        data-strk-img-width="400"
                        loading="lazy"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to={`/product/${line.product.id}`}
                            onClick={closeCart}
                            className="product-name text-ink hover:text-gold transition-colors"
                          >
                            {line.product.name}
                          </Link>
                          <p className="font-sans text-xs text-ink-muted mt-1">
                            {line.variant.label}
                          </p>
                        </div>
                        <p className="font-sans text-sm text-ink">
                          {formatPrice(line.lineTotal)}
                        </p>
                      </div>
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(line.lineId, line.quantity - 1)
                            }
                            className="p-1.5 text-ink hover:text-gold"
                            aria-label="Decrease quantity"
                          >
                            <Minus strokeWidth={1.5} className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 font-sans text-sm tabular-nums text-ink">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(line.lineId, line.quantity + 1)
                            }
                            className="p-1.5 text-ink hover:text-gold"
                            aria-label="Increase quantity"
                          >
                            <Plus strokeWidth={1.5} className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(line.lineId)}
                          className="font-sans text-xs uppercase tracking-[0.18em] text-ink-muted hover:text-ink"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-line bg-cream px-6 md:px-8 py-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-ink-muted uppercase tracking-[0.18em]">
                Subtotal
              </span>
              <span className="font-sans text-base text-ink font-medium">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="font-sans text-xs text-ink-muted">
              Shipping and taxes calculated at checkout. Free worldwide shipping on orders over $75.
            </p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="btn-primary btn-block"
            >
              Checkout
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="btn-ghost self-center"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
