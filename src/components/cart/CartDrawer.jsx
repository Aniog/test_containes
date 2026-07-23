import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, Lock } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { PLACEHOLDER_IMG, formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, subtotal, setQty, removeItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    let cleanup;
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (typeof cleanup === "function") cleanup();
    };
  }, [isCartOpen, items.length]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  useEffect(() => {
    if (isCartOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const FREE_SHIP_THRESHOLD = 75;
  const progress = Math.min(subtotal / FREE_SHIP_THRESHOLD, 1);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-400",
        isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <div
        className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
        onClick={closeCart}
      />
      <aside
        ref={containerRef}
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-out",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-champagne px-6 py-5">
          <h2 className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-espresso">
            Your Cart
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 text-espresso transition-transform duration-300 hover:rotate-90"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length > 0 && (
          <div className="border-b border-champagne bg-sand/60 px-6 py-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-mocha">
              {subtotal >= FREE_SHIP_THRESHOLD ? (
                <span className="text-gold-deep">
                  Your order ships free — enjoy.
                </span>
              ) : (
                <>
                  {formatPrice(FREE_SHIP_THRESHOLD - subtotal)} away from{" "}
                  <span className="text-gold-deep">free shipping</span>
                </>
              )}
            </p>
            <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-champagne">
              <div
                className="h-full rounded-full bg-gold transition-all duration-700 ease-out"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl text-espresso">
                Your cart is empty
              </p>
              <p className="mt-2 max-w-[240px] text-sm text-taupe">
                Discover demi-fine pieces crafted to be treasured every day.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 bg-espresso px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cream transition-colors hover:bg-gold-deep"
              >
                Shop Bestsellers
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-champagne">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="h-24 w-20 shrink-0 overflow-hidden bg-sand"
                  >
                    <img
                      src={PLACEHOLDER_IMG}
                      alt={item.product.name}
                      loading="lazy"
                      data-strk-img-id={`card-${item.productId}-main`}
                      data-strk-img={`[cart-name-${item.productId}] warm gold jewelry product photography on neutral background`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="300"
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          to={`/product/${item.productId}`}
                          onClick={closeCart}
                          id={`cart-name-${item.productId}`}
                          className="font-display text-base font-medium uppercase tracking-[0.12em] text-espresso hover:text-gold"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-taupe">
                          {item.variant} tone
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-espresso">
                        {formatPrice(item.product.price * item.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center border border-champagne">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(item.key, item.qty - 1)}
                          className="p-2 text-mocha transition-colors hover:bg-sand hover:text-espresso"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-espresso">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(item.key, item.qty + 1)}
                          className="p-2 text-mocha transition-colors hover:bg-sand hover:text-espresso"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label="Remove item"
                        onClick={() => removeItem(item.key)}
                        className="p-2 text-taupe transition-colors hover:text-espresso"
                      >
                        <Trash2 size={15} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-champagne px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-mocha">
                Subtotal
              </span>
              <span className="font-display text-xl font-semibold text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-taupe">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 bg-gold py-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-cream transition-colors duration-300 hover:bg-gold-deep"
            >
              <Lock size={13} strokeWidth={2} />
              Checkout Securely
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
