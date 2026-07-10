import React, { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal } = useCart();

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

  return (
    <div
      className={`fixed inset-0 z-[70] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-cream shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-hairline">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-ink hover:text-gold transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mb-6">
              <ShoppingBag size={22} strokeWidth={1.4} className="text-muted" />
            </div>
            <p className="font-serif text-2xl text-ink mb-2">Your cart is empty</p>
            <p className="text-sm text-muted mb-8 max-w-xs">
              Find something to treasure — explore our latest collections.
            </p>
            <Button as={Link} to="/shop" onClick={closeCart} variant="primary">
              Shop the Collection
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-2">
              {items.map((it) => (
                <div
                  key={it.lineId}
                  className="flex gap-4 py-5 border-b border-hairline last:border-b-0"
                >
                  <div className="w-20 h-24 bg-cream-200 flex-shrink-0 overflow-hidden">
                    <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="product-name text-ink line-clamp-1">{it.name}</p>
                        <p className="text-[0.7rem] text-muted mt-1 tracking-wide">
                          {it.tone}
                        </p>
                      </div>
                      <p className="font-serif text-base text-ink">
                        {formatPrice(it.price * it.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(it.lineId, it.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-gold"
                        >
                          <Minus size={12} strokeWidth={1.6} />
                        </button>
                        <span className="w-8 text-center text-sm">{it.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(it.lineId, it.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-gold"
                        >
                          <Plus size={12} strokeWidth={1.6} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(it.lineId)}
                        className="text-[0.65rem] tracking-widest2 uppercase text-muted hover:text-ink underline-offset-2 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-6 border-t border-hairline bg-cream-50">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-sans text-[0.7rem] tracking-widest2 uppercase text-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-[0.7rem] text-muted mb-5">
                Shipping & taxes calculated at checkout. Free shipping over $75.
              </p>
              <Button as={Link} to="/checkout" onClick={closeCart} variant="primary" fullWidth>
                Checkout
              </Button>
              <button
                type="button"
                onClick={closeCart}
                className="block w-full mt-3 text-center text-[0.7rem] tracking-widest2 uppercase text-muted hover:text-ink"
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
