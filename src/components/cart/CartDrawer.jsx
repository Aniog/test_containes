import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag, Lock } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import { Button } from "@/components/ui/Buttons";

export default function CartDrawer() {
  const {
    lines,
    subtotal,
    isCartOpen,
    closeCart,
    setQty,
    removeFromCart,
  } = useCart();
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  useEffect(() => {
    if (!isCartOpen) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, panelRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isCartOpen, lines]);

  const FREE_SHIP_THRESHOLD = 75;
  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100);

  return (
    <div
      className={`fixed inset-0 z-50 ${isCartOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isCartOpen}
    >
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`drawer-overlay absolute inset-0 bg-ink/50 backdrop-blur-[2px] ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        className={`drawer-panel absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <p className="font-serif text-xl font-semibold uppercase tracking-[0.2em] text-ink">
            Your Bag {lines.length > 0 && `(${lines.length})`}
          </p>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 text-ink/60 transition-colors hover:text-ink"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free shipping progress */}
        {lines.length > 0 && (
          <div className="border-b border-line px-6 py-4">
            <p className="text-xs text-bronze">
              {remaining > 0 ? (
                <>
                  You're{" "}
                  <span className="font-semibold text-gold-deep">
                    {formatPrice(remaining)}
                  </span>{" "}
                  away from free shipping
                </>
              ) : (
                <span className="font-semibold text-gold-deep">
                  Your order ships free — enjoy.
                </span>
              )}
            </p>
            <div className="mt-2 h-[3px] w-full bg-line">
              <div
                className="h-full bg-gold transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Lines */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line text-taupe">
                <ShoppingBag size={24} strokeWidth={1.25} />
              </span>
              <div>
                <p className="font-serif text-2xl text-ink">Your bag is empty</p>
                <p className="mt-2 text-sm text-bronze">
                  Discover pieces crafted to be treasured.
                </p>
              </div>
              <Link to="/shop" onClick={closeCart}>
                <Button variant="secondary">Shop the Collection</Button>
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4">
                  <Link
                    to={`/product/${line.productId}`}
                    onClick={closeCart}
                    className="block h-28 w-22 shrink-0 overflow-hidden border border-line bg-sand"
                  >
                    <img
                      data-strk-img-id={`search-${line.productId}`}
                      data-strk-img={`[shop-${line.productId}-name] [bestsellers-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="300"
                      src={PLACEHOLDER_SRC}
                      alt={line.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                          {line.name}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-wider text-taupe">
                          {line.variant} Tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(line.id)}
                        aria-label={`Remove ${line.name}`}
                        className="p-1 text-taupe transition-colors hover:text-ink"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() => setQty(line.id, line.qty - 1)}
                          className="px-2.5 py-1.5 text-ink/60 hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold text-ink">
                          {line.qty}
                        </span>
                        <button
                          onClick={() => setQty(line.id, line.qty + 1)}
                          className="px-2.5 py-1.5 text-ink/60 hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-ink">
                        {formatPrice(line.price * line.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-line bg-cream px-6 py-6">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze">
                Subtotal
              </p>
              <p className="font-serif text-2xl font-semibold text-ink">
                {formatPrice(subtotal)}
              </p>
            </div>
            <p className="mt-1 text-[11px] text-taupe">
              Shipping and taxes calculated at checkout.
            </p>
            <Button variant="primary" className="mt-5 w-full">
              <Lock size={13} /> Secure Checkout
            </Button>
            <button
              onClick={closeCart}
              className="mt-4 w-full text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze underline underline-offset-4 hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
