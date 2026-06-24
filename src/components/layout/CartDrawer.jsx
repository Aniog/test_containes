import React, { useEffect, useRef } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, close, updateQty, removeItem, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!drawerRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden={!isOpen}
        onClick={close}
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-50 h-[100dvh] w-full sm:w-[440px] bg-bone text-ink shadow-[0_20px_60px_-20px_rgba(26,22,20,0.45)] transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <h2 className="text-[11px] tracking-[0.3em] uppercase">
            Your Bag · {items.length}
          </h2>
          <button aria-label="Close cart" onClick={close} className="p-2 -mr-2">
            <X size={18} />
          </button>
        </div>

        <div className="h-[calc(100dvh-4rem-13rem)] overflow-y-auto px-6 py-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <ShoppingBag size={28} className="text-mute" />
              <p className="mt-6 font-serif text-2xl text-ink">Your bag is empty</p>
              <p className="mt-2 text-sm text-mute max-w-xs">
                Discover a piece you'll wear every day.
              </p>
              <Link
                to="/shop"
                onClick={close}
                className="mt-8 inline-block bg-ink text-bone hover:bg-gold-deep transition-colors px-8 py-4 text-[11px] tracking-[0.25em] uppercase"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            items.map((it) => (
              <div key={it.key} className="flex gap-4">
                <div className="relative w-24 aspect-[4/5] bg-cream overflow-hidden shrink-0">
                  <img
                    alt={it.name}
                    data-strk-img-id={`cart-thumb-${it.id}-${it.variant || "g"}`}
                    data-strk-img={`[cart-q-${it.id}-${it.variant || "g"}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="240"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="sr-only"
                    id={`cart-q-${it.id}-${it.variant || "g"}`}
                  >
                    {it.imageQuery || it.name}
                  </span>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        to={`/product/${it.id}`}
                        onClick={close}
                        className="text-[11px] tracking-[0.2em] uppercase font-medium hover:text-gold-deep transition-colors"
                      >
                        {it.name}
                      </Link>
                      <p className="text-xs text-mute mt-1">{it.variant}</p>
                    </div>
                    <button
                      aria-label="Remove item"
                      onClick={() => removeItem(it.key)}
                      className="text-mute hover:text-ink transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="inline-flex items-center border border-hairline">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQty(it.key, it.qty - 1)}
                        className="px-2 py-1.5 text-mute hover:text-ink"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-xs">{it.qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateQty(it.key, it.qty + 1)}
                        className="px-2 py-1.5 text-mute hover:text-ink"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-ink">
                      {formatPrice(it.price * it.qty)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 border-t border-hairline bg-bone px-6 py-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-mute">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-mute mt-1">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="mt-5 w-full bg-ink text-bone hover:bg-gold-deep transition-colors py-4 text-[11px] tracking-[0.3em] uppercase">
              Checkout
            </button>
            <button
              onClick={close}
              className="mt-3 w-full text-[11px] tracking-[0.25em] uppercase text-mute hover:text-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
