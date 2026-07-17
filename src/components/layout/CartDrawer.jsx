import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

function CartItemImage({ alt }) {
  // Static placeholder: a soft gold jewelry thumbnail.
  // (Cart-line images are small; we use one cohesive placeholder instead of
  // per-product dynamic IDs so the build remains statically resolvable.)
  return (
    <div className="relative w-20 h-24 bg-ivory-soft overflow-hidden shrink-0">
      <img
        alt={alt}
        className="w-full h-full object-cover"
        data-strk-img-id="cart-line-thumb-static-f8a3"
        data-strk-img="gold jewelry product thumbnail"
        data-strk-img-ratio="3x4"
        data-strk-img-width="200"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
      />
    </div>
  );
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    setQuantity,
    subtotal,
  } = useCart();
  const [rendered, setRendered] = useState(isOpen);

  // Allow exit animation before unmount
  useEffect(() => {
    if (isOpen) {
      setRendered(true);
      document.body.style.overflow = "hidden";
    } else {
      const t = setTimeout(() => setRendered(false), 400);
      document.body.style.overflow = "";
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  if (!rendered) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className={cn(
          "absolute inset-0 bg-espresso/50 transition-opacity duration-400",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 w-full max-w-md bg-ivory text-ink flex flex-col transition-transform duration-400 ease-out-soft",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-wider-2 uppercase font-medium">
            Your Bag
          </h2>
          <button
            type="button"
            aria-label="Close bag"
            onClick={closeCart}
            className="p-2 -mr-2"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="w-10 h-10 text-ink-muted mb-6" strokeWidth={1} />
            <p className="font-serif text-2xl font-light mb-2 text-balance">
              Your bag is empty.
            </p>
            <p className="text-sm text-ink-muted mb-8 text-pretty">
              Begin with a piece you'll wear forever.
            </p>
            <Link to="/shop" onClick={closeCart} className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-hairline">
              {items.map((it) => (
                <li
                  key={it.lineId}
                  id={`cart-line-${it.lineId}`}
                  className="flex gap-4 px-6 py-5"
                >
                  <CartItemImage alt={it.name} />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${it.id}`}
                      onClick={closeCart}
                      className="product-name block truncate hover:text-gold transition-colors"
                    >
                      {it.name}
                    </Link>
                    <p className="text-xs text-ink-muted mt-1 uppercase tracking-wider-2">
                      {it.tone}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(it.lineId, it.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-ivory-soft transition-colors"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span
                          className="w-8 text-center text-sm tabular-nums"
                          aria-live="polite"
                        >
                          {it.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(it.lineId, it.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-ivory-soft transition-colors"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm font-medium tabular-nums">
                        ${(it.price * it.quantity).toFixed(2)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(it.lineId)}
                      className="mt-3 text-[11px] uppercase tracking-wider-2 text-ink-muted hover:text-ink transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="px-6 py-6 border-t border-hairline bg-ivory-soft/50">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs uppercase tracking-wider-2 text-ink-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl font-light tabular-nums">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-ink-muted mb-5">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="block w-full mt-3 text-center text-[11px] uppercase tracking-wider-2 text-ink-muted hover:text-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
