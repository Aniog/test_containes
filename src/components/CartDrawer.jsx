import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
// @ts-ignore — runtime JSON populated by the Vite plugin
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";

function formatPrice(n) {
  return `$${n.toFixed(0)}`;
}

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart, setQty, removeItem } = useCart();
  const closeBtnRef = useRef(null);
  const containerRef = useRef(null);

  // Re-scan the drawer for stock images every time it opens or the contents change
  useEffect(() => {
    if (!isOpen) return;
    const node = containerRef.current;
    if (!node) return;
    const config = strkImgConfig && Object.keys(strkImgConfig).length
      ? strkImgConfig
      : {};
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(config, node);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // focus close button for accessibility
    setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <div
      ref={containerRef}
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-espresso/50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-ivory shadow-soft-lg transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-2xl text-espresso">
            Your Bag
            <span className="ml-2 align-middle font-sans text-xs tracking-wider-2 text-stone">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-espresso transition-colors hover:bg-bone"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-2xl text-espresso">Your bag is empty.</p>
            <p className="mt-2 font-sans text-sm text-stone">
              Begin with our bestsellers.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center justify-center bg-espresso px-8 py-4 font-sans text-[11px] uppercase tracking-wider-2 text-ivory transition-colors hover:bg-mocha"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex gap-4 border-b border-line py-5 last:border-b-0"
                >
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="block h-24 w-20 flex-shrink-0 overflow-hidden bg-bone"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-${item.id}-${item.variant.id}`}
                      data-strk-img={item.image}
                      data-strk-img-ratio={item.imageRatio || "4x5"}
                      data-strk-img-width={item.imageWidth || 240}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={closeCart}
                          className="font-sans text-[11px] uppercase tracking-wider-2 text-espresso hover:text-gold-deep"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 font-sans text-[11px] text-stone">
                          {item.variant.label}
                        </p>
                      </div>
                      <p className="font-sans text-sm text-espresso">
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => setQty(item.key, item.qty - 1)}
                          aria-label="Decrease quantity"
                          className="inline-flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-bone"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="inline-flex h-8 w-8 items-center justify-center font-sans text-xs text-espresso">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(item.key, item.qty + 1)}
                          aria-label="Increase quantity"
                          className="inline-flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-bone"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="inline-flex items-center gap-1 font-sans text-[11px] uppercase tracking-wider-2 text-stone transition-colors hover:text-espresso"
                      >
                        <Trash2 size={12} strokeWidth={1.5} />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line bg-ivory px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-wider-2 text-stone">
                  Subtotal
                </span>
                <span className="font-sans text-base text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 font-sans text-[11px] text-stone">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex w-full items-center justify-center bg-espresso px-8 py-4 font-sans text-[11px] uppercase tracking-wider-2 text-ivory transition-colors hover:bg-mocha"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 inline-flex w-full items-center justify-center font-sans text-[11px] uppercase tracking-wider-2 text-stone transition-colors hover:text-espresso"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
