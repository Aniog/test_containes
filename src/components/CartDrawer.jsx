import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 75;

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, closeCart, removeItem, updateQuantity } = useCart();

  useEffect(() => {
    if (!isCartOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, closeCart]);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-[visibility] duration-300",
        isCartOpen ? "visible" : "invisible"
      )}
      aria-hidden={!isCartOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />

      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream text-ink shadow-2xl transition-transform duration-400 ease-out",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-lg font-medium uppercase tracking-widest2">
            Your Bag
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1.5 text-espresso transition-colors hover:text-gold-deep"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length > 0 && (
          <div className="border-b border-line px-6 py-4">
            <p className="text-xs text-espresso">
              {remaining > 0 ? (
                <>
                  You're <span className="font-semibold text-gold-deep">{formatPrice(remaining)}</span>{" "}
                  away from free shipping
                </>
              ) : (
                <span className="font-semibold text-gold-deep">
                  Your order ships free — enjoy.
                </span>
              )}
            </p>
            <div className="mt-2.5 h-px w-full bg-line">
              <div
                className="h-[3px] -translate-y-px bg-gold transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag size={36} strokeWidth={1} className="text-line" />
              <p className="font-serif text-xl italic text-espresso">Your bag is empty</p>
              <p className="max-w-[240px] text-xs leading-relaxed text-taupe">
                Discover demi-fine pieces designed to be worn every day and treasured for years.
              </p>
              <Button variant="outline" size="sm" onClick={closeCart}>
                <Link to="/shop" onClick={closeCart} className="inline-flex items-center gap-2">
                  Start Shopping <ArrowRight size={13} strokeWidth={1.5} />
                </Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="relative block h-24 w-20 shrink-0 overflow-hidden rounded-sm bg-sand"
                  >
                    {item.image ? (
                      <img
                        alt={item.name}
                        src={item.image}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center bg-sand text-taupe">
                        <ShoppingBag size={20} strokeWidth={1} />
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.productId}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-medium uppercase leading-snug tracking-product text-ink transition-colors hover:text-gold-deep"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-0.5 text-[11px] uppercase tracking-widest2 text-taupe">
                          {item.variant} tone
                        </p>
                      </div>
                      <span className="font-serif text-base font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.key, -1)}
                          className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-sand hover:text-ink"
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.key, 1)}
                          className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-sand hover:text-ink"
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] uppercase tracking-widest2 text-taupe underline-offset-4 transition-colors hover:text-gold-deep hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line bg-sand/60 px-6 py-5">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest2 text-espresso">Subtotal</span>
              <span className="font-serif text-xl font-medium text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-[11px] text-taupe">
              Shipping &amp; taxes calculated at checkout.
            </p>
            <Button variant="accent" size="lg" className="w-full">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-widest2 text-espresso underline-offset-4 transition-colors hover:text-gold-deep hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
