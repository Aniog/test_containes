import React, { useEffect, useRef } from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    removeItem,
    updateQuantity,
    itemCount,
  } = useCart();

  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [isOpen, items.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <aside
        ref={containerRef}
        className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-cream text-ink flex flex-col animate-slideInRight shadow-2xl"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div>
            <p className="font-sans uppercase tracking-widest2 text-[10px] text-taupe">
              Your bag
            </p>
            <h2 className="font-serif text-2xl mt-1">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 hover:text-champagne transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <p className="font-serif text-3xl text-ink">Your bag is empty.</p>
              <p className="mt-3 text-sm text-taupe max-w-xs">
                Discover quietly luxurious pieces, made to be treasured.
              </p>
              <Button
                variant="primary"
                size="md"
                className="mt-8"
                onClick={closeCart}
              >
                Continue shopping
              </Button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li
                  key={item.lineKey}
                  className="flex gap-4 pb-6 border-b border-hairline last:border-b-0"
                >
                  <div className="w-24 h-32 bg-bone overflow-hidden flex-shrink-0">
                    <img
                      alt={item.name}
                      data-strk-img-id={`${item.imgId}-cart-${item.variant}`}
                      data-strk-img={`[${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="240"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif uppercase tracking-wider2 text-sm leading-tight">
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineKey)}
                        aria-label={`Remove ${item.name}`}
                        className="text-taupe hover:text-ink transition-colors"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-xs text-taupe mt-1">{item.variant}</p>
                    <div className="mt-auto flex items-end justify-between pt-3">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center hover:text-champagne"
                          onClick={() =>
                            updateQuantity(item.lineKey, item.quantity - 1)
                          }
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center hover:text-champagne"
                          onClick={() =>
                            updateQuantity(item.lineKey, item.quantity + 1)
                          }
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="font-sans text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <div className="border-t border-hairline px-6 py-6 bg-bone/40">
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans uppercase tracking-widest2 text-[11px] text-taupe">
                Subtotal
              </span>
              <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-taupe mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <Button variant="accent" size="block">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-3 text-xs uppercase tracking-widest2 text-taupe hover:text-ink transition-colors py-2"
            >
              Continue shopping
            </button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
