import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { findProductById } from "@/data/products";

function CartItem({ item, onInc, onDec, onRemove }) {
  const product = findProductById(item.id);
  return (
    <div className="flex gap-4 py-6 border-b border-dune last:border-b-0">
      <Link
        to={`/product/${item.id}`}
        className="block w-20 h-24 md:w-24 md:h-28 flex-none bg-surface overflow-hidden"
      >
        <img
          alt={item.name}
          data-strk-img-id={`cart-${item.key}`}
          data-strk-img={`[cart-name-${item.key}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="240"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover img-fade"
        />
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p
              id={`cart-name-${item.key}`}
              className="font-serif text-sm md:text-base uppercase tracking-[0.18em] text-espresso truncate"
            >
              {item.name}
            </p>
            <p className="text-[11px] uppercase tracking-widest2 text-taupe mt-1">
              {item.tone === "gold" ? "18K Gold Plated" : item.tone}
            </p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${item.name} from cart`}
            className="p-1 text-taupe hover:text-espresso transition-colors"
          >
            <X className="h-4 w-4" strokeWidth={1.25} />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="inline-flex items-center border border-dune">
            <button
              type="button"
              onClick={onDec}
              aria-label="Decrease quantity"
              className="h-8 w-8 inline-flex items-center justify-center text-taupe hover:text-espresso transition-colors"
            >
              <Minus className="h-3 w-3" strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <button
              type="button"
              onClick={onInc}
              aria-label="Increase quantity"
              className="h-8 w-8 inline-flex items-center justify-center text-taupe hover:text-espresso transition-colors"
            >
              <Plus className="h-3 w-3" strokeWidth={1.5} />
            </button>
          </div>
          <span className="text-sm text-espresso tracking-wide">
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, totals, updateQuantity, removeItem } = useCart();
  const drawerRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  // Re-scan images for cart items when items change
  useEffect(() => {
    if (!isOpen || items.length === 0) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items.length]);

  const shippingNote =
    totals.subtotal >= 75
      ? "Complimentary shipping unlocked."
      : `Add ${formatPrice(75 - totals.subtotal)} more for free shipping.`;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside
        ref={drawerRef}
        role={isOpen ? "dialog" : undefined}
        aria-label="Shopping cart"
        aria-modal={isOpen ? "true" : undefined}
        aria-hidden={isOpen ? undefined : "true"}
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] bg-canvas text-espresso shadow-drawer flex flex-col transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-dune">
          <h2 className="font-serif text-xl tracking-[0.2em] uppercase">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-taupe hover:text-espresso transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <ShoppingBag className="h-7 w-7 text-taupe mb-6" strokeWidth={1.25} />
            <p className="font-serif text-2xl text-espresso mb-2">Your bag is empty</p>
            <p className="text-sm text-taupe mb-8 max-w-xs">
              Begin your collection — quiet heirlooms, made for the everyday.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-flex items-center justify-center bg-espresso text-canvas h-12 px-8 text-[11px] uppercase tracking-widest2 font-medium hover:bg-espresso/90 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((it) => (
                <CartItem
                  key={it.key}
                  item={it}
                  onInc={() => updateQuantity(it.key, it.quantity + 1)}
                  onDec={() => updateQuantity(it.key, it.quantity - 1)}
                  onRemove={() => removeItem(it.key)}
                />
              ))}
            </div>
            <div className="border-t border-dune px-6 py-6 bg-surface">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-taupe uppercase tracking-widest2 text-[11px]">
                  Subtotal
                </span>
                <span className="text-espresso tracking-wide">{formatPrice(totals.subtotal)}</span>
              </div>
              <p className="text-xs text-taupe mb-5">{shippingNote}</p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="w-full inline-flex items-center justify-center bg-espresso text-canvas h-12 px-8 text-[11px] uppercase tracking-widest2 font-medium hover:bg-espresso/90 transition-colors"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="w-full mt-3 inline-flex items-center justify-center text-[11px] uppercase tracking-widest2 text-taupe hover:text-espresso h-10 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
