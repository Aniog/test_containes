import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 75;

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  useEffect(() => {
    if (!isCartOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isCartOpen, closeCart]);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80]",
        isCartOpen ? "" : "pointer-events-none",
      )}
      aria-hidden={!isCartOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-out",
          isCartOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-ink">
            Your Bag
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="-mr-2 p-2 text-espresso transition-colors hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length > 0 && (
          <div className="border-b border-sand px-6 py-4">
            <p className="text-xs text-espresso">
              {remaining > 0 ? (
                <>
                  You’re{" "}
                  <span className="font-semibold text-gold">
                    {formatPrice(remaining)}
                  </span>{" "}
                  away from complimentary gift wrapping
                </>
              ) : (
                <span className="font-semibold text-gold">
                  Complimentary gift wrapping unlocked
                </span>
              )}
            </p>
            <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-sand">
              <div
                className="h-full bg-gold transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-sand bg-ivory">
                <ShoppingBag className="h-6 w-6 text-taupe" />
              </span>
              <div>
                <p className="font-serif text-2xl text-ink">
                  Your bag is empty
                </p>
                <p className="mt-2 text-sm text-taupe">
                  Discover pieces made to be treasured.
                </p>
              </div>
              <Link
                to="/shop"
                onClick={closeCart}
                className="bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold-deep"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-sand">
              {items.map((item) => (
                <li key={`${item.productId}-${item.variant}`} className="py-5">
                  <div className="flex gap-4">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="flex h-24 w-20 shrink-0 items-center justify-center border border-sand bg-ivory"
                    >
                      <span className="font-serif text-3xl italic text-gold">
                        {item.product.name.charAt(0)}
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${item.productId}`}
                            onClick={closeCart}
                            className="font-serif text-base uppercase tracking-[0.12em] text-ink transition-colors hover:text-gold"
                          >
                            {item.product.name}
                          </Link>
                          <p className="mt-1 text-xs text-taupe">
                            {item.variant} tone
                          </p>
                        </div>
                        <p className="text-sm font-medium text-ink">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-sand">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="p-2 text-espresso transition-colors hover:text-gold"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variant,
                                item.quantity - 1,
                              )
                            }
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="p-2 text-espresso transition-colors hover:text-gold"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variant,
                                item.quantity + 1,
                              )
                            }
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${item.product.name}`}
                          className="p-2 text-taupe transition-colors hover:text-gold"
                          onClick={() =>
                            removeItem(item.productId, item.variant)
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-sand bg-ivory px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.25em] text-espresso">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-2 text-xs text-taupe">
              Shipping calculated at checkout · Free worldwide
            </p>
            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold"
            >
              Checkout <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-xs text-taupe underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
