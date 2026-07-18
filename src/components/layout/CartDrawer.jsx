import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import CartItemImage from "./CartItemImage";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, summary } = useCart();

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-500",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[420px] bg-surface-elevated border-l border-hairline flex flex-col transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between px-6 h-16 border-b border-hairline shrink-0">
          <h2 className="font-serif text-xl tracking-product uppercase text-ivory">
            Your Bag
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-ivory-muted hover:text-ivory transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <ShoppingBag className="w-10 h-10 text-ivory-dim mb-6" strokeWidth={1.25} />
            <p className="font-serif text-2xl text-ivory mb-2">Your bag is empty</p>
            <p className="text-sm text-ivory-muted max-w-xs mb-8">
              Begin with a piece you'll reach for every day.
            </p>
            <Link to="/shop" onClick={closeCart} className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 divide-y divide-hairline">
              {items.map((it) => (
                <div key={it.key} className="py-6 flex gap-4 animate-fade-in">
                  <div className="w-20 h-24 bg-surface shrink-0 overflow-hidden">
                    <CartItemImage imageQuery={it.imageQuery} name={it.name} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="product-name text-[12px] truncate">
                          {it.name}
                        </h3>
                        <p className="mt-1 text-[11px] text-ivory-muted uppercase tracking-button">
                          {it.variant === "gold" ? "18K Gold" : "Sterling Silver"}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(it.key)}
                        className="text-[11px] text-ivory-dim hover:text-ivory transition-colors uppercase tracking-button"
                        aria-label={`Remove ${it.name}`}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => updateQuantity(it.key, it.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ivory-muted hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm text-ivory tabular-nums">
                          {it.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(it.key, it.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ivory-muted hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm text-ivory tabular-nums">
                        ${(it.price * it.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <footer className="border-t border-hairline px-6 py-6 space-y-4 shrink-0">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between text-ivory-muted">
                  <span>Subtotal</span>
                  <span className="text-ivory tabular-nums">${summary.subtotal.toFixed(0)}</span>
                </div>
                <div className="flex items-center justify-between text-ivory-muted">
                  <span>Shipping</span>
                  <span className="text-ivory">
                    {summary.shipping === 0 ? "Complimentary" : `$${summary.shipping.toFixed(0)}`}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-hairline">
                  <span className="text-ivory uppercase tracking-button text-[12px]">Total</span>
                  <span className="font-serif text-xl text-ivory tabular-nums">
                    ${summary.total.toFixed(0)}
                  </span>
                </div>
              </div>
              <button type="button" className="btn-primary w-full">
                Checkout
              </button>
              <p className="text-[11px] text-ivory-dim text-center tracking-wide">
                Free worldwide shipping on orders over $50. 30-day returns.
              </p>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
