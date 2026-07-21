import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 80;

function PlaceholderImg({ id, query, ratio = "1x1", width = 400, alt }) {
  // Lightweight fallback for cart line items (where we don't run ImageHelper).
  // Uses a CSS gradient + monogram — feels editorial without external assets.
  return (
    <div
      className="w-full h-full relative"
      style={{ background: "linear-gradient(160deg, #2C1F19 0%, #1F1612 60%, #15100D 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(212,178,124,0.45) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(176,138,74,0.35) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-serif text-ivory/80 text-xl tracking-[0.18em] product-title"
          aria-hidden
        >
          {(query || alt || "V").slice(0, 1)}
        </span>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lines,
    subtotal,
    count,
    setQuantity,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80] transition-opacity duration-500",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-espresso/55 backdrop-blur-sm"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[420px] bg-ivory text-espresso shadow-lift flex flex-col transition-transform duration-500 ease-velmora",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-5 sm:px-6 h-16 border-b border-espresso/10">
          <h2 className="font-serif text-xl tracking-[0.18em] product-title">
            Your Bag
            <span className="ml-2 text-xs tracking-normal text-mocha align-middle font-sans">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="h-16 w-16 rounded-full border border-espresso/15 flex items-center justify-center mb-6">
              <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <p className="font-serif text-2xl mb-2">Your bag is empty</p>
            <p className="text-sm text-mocha mb-6 max-w-xs">
              A piece you wear every day is closer than you think. Begin with
              our bestsellers.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="px-5 sm:px-6 py-4 border-b border-espresso/10">
              {remainingForFree > 0 ? (
                <p className="text-xs text-mocha">
                  You're{" "}
                  <span className="text-espresso font-medium">
                    {formatPrice(remainingForFree)}
                  </span>{" "}
                  away from free worldwide shipping.
                </p>
              ) : (
                <p className="text-xs text-espresso font-medium">
                  Complimentary shipping unlocked.
                </p>
              )}
              <div className="mt-2 h-1 w-full bg-espresso/10 overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-700 ease-velmora"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 overflow-y-auto divide-y divide-espresso/10">
              {lines.map((line) => (
                <li
                  key={`${line.id}-${line.variant}`}
                  className="flex gap-4 px-5 sm:px-6 py-5"
                >
                  <Link
                    to={`/product/${line.id}`}
                    onClick={closeCart}
                    className="block h-24 w-20 sm:h-28 sm:w-24 flex-shrink-0 overflow-hidden bg-sand"
                  >
                    <PlaceholderImg query={line.product.name} alt={line.product.name} />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          to={`/product/${line.id}`}
                          onClick={closeCart}
                          className="block"
                        >
                          <p className="product-title text-[12px] sm:text-[13px] truncate">
                            {line.product.name}
                          </p>
                        </Link>
                        <p className="mt-1 text-xs text-mocha">
                          {line.variant}
                        </p>
                      </div>
                      <p className="text-sm tabular-nums flex-shrink-0">
                        {formatPrice(line.lineTotal)}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-espresso/15">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(line.id, line.variant, line.qty - 1)
                          }
                          aria-label="Decrease quantity"
                          className="h-8 w-8 inline-flex items-center justify-center hover:bg-espresso/5"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(line.id, line.variant, line.qty + 1)
                          }
                          aria-label="Increase quantity"
                          className="h-8 w-8 inline-flex items-center justify-center hover:bg-espresso/5"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(line.id, line.variant)}
                        className="text-xs text-mocha hover:text-espresso inline-flex items-center gap-1.5"
                        aria-label={`Remove ${line.product.name}`}
                      >
                        <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-espresso/10 px-5 sm:px-6 py-5 bg-ivory">
              <div className="flex items-center justify-between mb-1 text-sm">
                <span className="text-mocha">Subtotal</span>
                <span className="tabular-nums font-medium">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-mocha">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn btn-primary w-full mt-5"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="btn btn-ghost w-full mt-1"
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
