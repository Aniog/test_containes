import React, { useEffect, useRef } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import CartLineImage from "@/components/cart/CartLineImage";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeFromCart, subtotal } =
    useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-ivory shadow-soft
          transition-transform duration-400 ease-out flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-sans uppercase tracking-eyebrow text-xs text-ink">
            Your Bag
            <span className="ml-2 text-taupe">({items.length})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-1 text-ink hover:text-gold transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <ShoppingBag
                className="w-10 h-10 text-taupe mb-6"
                strokeWidth={1.25}
              />
              <p className="font-serif text-2xl text-ink mb-2">
                Your bag is empty
              </p>
              <p className="text-sm text-taupe mb-8 max-w-xs">
                Discover pieces made to be worn — and treasured — for years.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex gap-4 p-6 animate-fadeIn"
                >
                  <div className="w-20 h-24 bg-wash overflow-hidden flex-shrink-0">
                    <CartLineImage item={item} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="product-name text-[11px] truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-taupe mt-1">
                          Tone · {item.tone === "silver" ? "Silver" : "Gold"}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.key)}
                        className="text-taupe hover:text-ink transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.key, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-wash transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.key, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-wash transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm text-ink font-medium">
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
          <footer className="border-t border-hairline px-6 py-6 bg-ivory-soft">
            <div className="flex items-center justify-between mb-1">
              <span className="eyebrow">Subtotal</span>
              <span className="text-base text-ink font-medium">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-[11px] text-taupe mb-5">
              Shipping & taxes calculated at checkout.
            </p>
            <button type="button" className="btn-ink w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full text-center text-xs text-taupe hover:text-ink mt-3 transition-colors"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
