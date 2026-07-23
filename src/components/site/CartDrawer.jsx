import React, { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, totals } = useCart();

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

  const shippingNote =
    totals.subtotal >= 80
      ? "You qualify for complimentary shipping."
      : `Add $${(80 - totals.subtotal).toFixed(0)} more for free shipping.`;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 drawer-mask" onClick={closeCart} />
      <div
        role="dialog"
        aria-label="Shopping cart"
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[440px] bg-ivory-50 shadow-2xl flex flex-col transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-cocoa-900/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-cocoa-900" strokeWidth={1.4} />
            <h2 className="font-display text-lg tracking-[0.14em] uppercase text-cocoa-900">
              Your Cart
            </h2>
            <span className="text-sm text-taupe-500">
              {totals.count} {totals.count === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 text-cocoa-900 hover:text-brass-700 transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-16 h-16 mb-6 rounded-full bg-ivory-100 flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 text-taupe-500" strokeWidth={1.2} />
            </div>
            <p className="font-display text-2xl text-cocoa-900 mb-2">
              Your cart is quiet for now
            </p>
            <p className="text-sm text-taupe-500 mb-8 max-w-xs">
              Add a piece you can imagine wearing — and we'll keep it safe here.
            </p>
            <Link to="/shop" onClick={closeCart} className="btn-primary">
              Discover the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 divide-y divide-cocoa-900/8">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  <div className="w-20 h-24 bg-ivory-100 overflow-hidden rounded-sm flex-shrink-0">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <h3 className="product-name text-cocoa-900 truncate">
                          {item.name}
                        </h3>
                        {item.tone && (
                          <p className="text-xs text-taupe-500 mt-1.5 tracking-wide uppercase">
                            {item.tone}
                          </p>
                        )}
                      </div>
                      <p className="text-cocoa-900 text-sm whitespace-nowrap">
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="qty-control" style={{ height: 36 }}>
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          style={{ width: 32, height: 36 }}
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={1.6} />
                        </button>
                        <span className="w-9 text-center text-sm text-cocoa-900">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          style={{ width: 32, height: 36 }}
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-xs uppercase tracking-button text-taupe-500 hover:text-cocoa-900 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-cocoa-900/10 px-6 py-6 bg-ivory-100/40">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-cocoa-700">Subtotal</span>
                <span className="font-display text-2xl text-cocoa-900">
                  {formatPrice(totals.subtotal)}
                </span>
              </div>
              <p className="text-xs text-taupe-500 mb-5">{shippingNote}</p>
              <button type="button" className="btn-primary w-full">
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="block mx-auto mt-3 text-xs uppercase tracking-button text-taupe-500 hover:text-cocoa-900 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
