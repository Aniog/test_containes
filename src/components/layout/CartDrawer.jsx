import { useEffect, useRef } from "react";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal } = useCart();
  const panelRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // re-scan images that mount in the drawer
      const id = window.requestAnimationFrame(() => {
        if (panelRef.current) {
          ImageHelper.loadImages(strkImgConfig, panelRef.current);
        }
      });
      return () => {
        document.body.style.overflow = "";
        window.cancelAnimationFrame(id);
      };
    }
    return undefined;
  }, [isOpen, items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[60] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute top-0 right-0 h-full w-full sm:max-w-md bg-cream text-ink shadow-xl flex flex-col transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-mist/40">
          <h2 className="font-serif text-2xl tracking-wide">Your Bag</h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 hover:text-gold transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                Empty
              </p>
              <p className="font-serif text-2xl text-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-ink/60 max-w-xs">
                Add a piece of forever to your collection.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-8 px-7 py-3.5 text-[12px] tracking-[0.25em] uppercase bg-ink text-cream hover:bg-espresso transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <div className="w-24 aspect-[4/5] bg-bone overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img
                        alt={item.name}
                        data-strk-img-id={item.image.imgId}
                        data-strk-img-ratio={item.image.ratio || "4x5"}
                        data-strk-img-width="240"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    ) : null}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          id={`cart-item-name-${item.key}`}
                          className="text-[11px] tracking-[0.22em] uppercase font-medium"
                        >
                          {item.name}
                        </p>
                        <p className="text-xs text-ink/60 mt-1">
                          {item.variantLabel}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove"
                        className="text-xs text-ink/50 hover:text-gold underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-ink/30">
                        <button
                          type="button"
                          aria-label="Decrease"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="px-2.5 py-1.5 hover:text-gold"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="px-2.5 py-1.5 hover:text-gold"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-mist/40 px-6 py-6 space-y-4 bg-cream">
            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-[0.3em] uppercase text-ink/60">
                Subtotal
              </span>
              <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-ink/55">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full py-4 bg-ink text-cream hover:bg-espresso transition-colors text-[12px] tracking-[0.25em] uppercase"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] tracking-[0.25em] uppercase text-ink/70 hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
