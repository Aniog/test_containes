import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import strkImgConfig from "@/strk-img-config.json";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    detailed,
    subtotal,
    updateQty,
    removeItem,
    itemCount,
  } = useCart();
  const listRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const frame = window.requestAnimationFrame(() => {
      if (listRef.current) {
        ImageHelper.loadImages(strkImgConfig, listRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, detailed.length]);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div className="absolute inset-0 bg-ink/50" onClick={closeCart} />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cream-100 shadow-drawer flex flex-col transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-ink/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-ink" strokeWidth={1.4} />
            <h3 className="eyebrow text-ink">
              Your Cart · {itemCount}
            </h3>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-1 hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {detailed.length === 0 ? (
            <div className="px-6 py-20 text-center">
              <p className="font-serif text-3xl text-ink">Your cart is empty</p>
              <p className="mt-3 text-[14px] text-muted">
                Discover our demi-fine pieces — designed to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-outline mt-8"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul ref={listRef} className="px-6 divide-y divide-ink/10">
              {detailed.map((line) => (
                <li key={line.key} className="py-6 flex gap-4">
                  <div className="w-20 h-24 bg-cream-200 overflow-hidden flex-shrink-0">
                    <img
                      alt={line.product.name}
                      data-strk-img-id={line.product.imgIds.primary}
                      data-strk-img={`[${line.product.textIds.short}] [${line.product.textIds.name}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${line.product.slug}`}
                      onClick={closeCart}
                      className="product-name block truncate"
                    >
                      {line.product.name}
                    </Link>
                    <p className="mt-1 text-[12px] text-muted tracking-wide">
                      {line.product.category}
                    </p>
                    <p className="mt-2 price text-[18px]">
                      {formatPrice(line.product.price)}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-ink/20">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(line.key, line.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink hover:bg-ink hover:text-cream-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.6} />
                        </button>
                        <span className="w-7 text-center text-[13px]">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(line.key, line.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink hover:bg-ink hover:text-cream-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.6} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="text-[11px] tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors"
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

        {detailed.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-6 bg-cream-50">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] text-muted">Subtotal</span>
              <span className="price text-[22px]">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[12px] text-muted">
              Free worldwide shipping on orders over $80.
            </p>
            <button type="button" className="btn-primary w-full mt-5">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full mt-3 text-center text-[12px] tracking-[0.25em] uppercase text-ink hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
