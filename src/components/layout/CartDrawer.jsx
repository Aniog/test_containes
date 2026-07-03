import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useRef } from "react";
import strkImgConfig from "../../strk-img-config.json";
import { useCart } from "../../context/CartContext.jsx";
import { formatPrice, VARIANT_TONES } from "../../data/products.js";
import Button from "../ui/Button.jsx";
import { cn } from "../../lib/cn.js";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    setQuantity,
    removeItem,
    subtotal,
  } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [isOpen, items.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />
      <aside
        ref={containerRef}
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ink-950 shadow-soft transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex h-16 items-center justify-between border-b border-ink-800 px-6">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold-300" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-ink-100">
              Your Bag · {items.length}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center text-ink-200 hover:text-gold-300"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-10 text-center">
            <p className="font-serif text-[28px] font-light text-ink-100">
              Your bag is empty
            </p>
            <p className="mt-3 max-w-xs font-sans text-[13px] leading-relaxed text-ink-300">
              Discover demi-fine pieces, made to be layered and lived in.
            </p>
            <Button as={Link} to="/shop" onClick={closeCart} variant="primary" className="mt-8">
              Shop the collection
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => {
                const tone = VARIANT_TONES.find((t) => t.id === item.variantId);
                return (
                  <li
                    key={item.lineId}
                    className="flex gap-4 border-b border-ink-800 py-5"
                  >
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={closeCart}
                      className="relative block h-28 w-24 flex-shrink-0 overflow-hidden bg-ink-900"
                    >
                      <img
                        data-strk-img-id={item.product.imgIds.primary}
                        data-strk-img={`[${item.product.id}-name] [cart-drawer-tag]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="300"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.product.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-[14px] font-medium uppercase tracking-wider2 text-ink-100">
                            {item.product.name}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            {tone && (
                              <span
                                className="inline-block h-3 w-3 rounded-full border border-ink-700"
                                style={{ background: tone.swatch }}
                                aria-hidden
                              />
                            )}
                            <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink-400">
                              {tone?.label || item.variantId}
                            </span>
                          </div>
                        </div>
                        <span className="font-sans text-[13px] font-medium text-gold-300">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="inline-flex items-center border border-ink-700">
                          <button
                            type="button"
                            onClick={() => setQuantity(item.lineId, item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center text-ink-200 hover:text-gold-300"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} strokeWidth={1.8} />
                          </button>
                          <span className="w-8 text-center font-sans text-[12px] text-ink-100">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQuantity(item.lineId, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center text-ink-200 hover:text-gold-300"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} strokeWidth={1.8} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.lineId)}
                          className="font-sans text-[10px] uppercase tracking-widest2 text-ink-400 underline-offset-4 hover:text-gold-300 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-ink-800 bg-ink-950 px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink-300">
                  Subtotal
                </span>
                <span className="font-serif text-[20px] font-light text-ink-100">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 font-sans text-[11px] text-ink-400">
                Shipping and taxes calculated at checkout.
              </p>
              <Button variant="primary" size="lg" fullWidth className="mt-5">
                Checkout · {formatPrice(subtotal)}
              </Button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center font-sans text-[10px] uppercase tracking-widest2 text-ink-300 hover:text-gold-300"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
