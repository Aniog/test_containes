import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Artwork from "@/components/ui/Artwork";
import { cn, formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, setQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping cart"
    >
      <div
        className="absolute inset-0 bg-ink/50"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute top-0 right-0 bottom-0 w-full sm:w-[440px] bg-ivory text-ink shadow-2xl flex flex-col transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)" }}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-line">
          <div className="label-eyebrow text-ink">Your Cart</div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:opacity-70"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="w-10 h-10 text-mute mb-4" strokeWidth={1.2} />
            <h3 className="font-display text-2xl">Your cart is empty</h3>
            <p className="mt-2 text-sm text-mute max-w-xs">
              Discover our demi-fine pieces — crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-2">
              <ul className="divide-y divide-line">
                {items.map((item) => (
                  <li key={item.lineId} className="py-5 flex gap-4">
                    <div className="w-20 h-24 bg-bone flex-shrink-0 overflow-hidden">
                      <Artwork variant={item.art} tone="deep" className="w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <Link
                            to={`/product/${item.id}`}
                            onClick={closeCart}
                            className="product-name text-ink hover:text-gold-dark transition-colors"
                          >
                            {item.name}
                          </Link>
                          <div className="mt-1 text-xs text-mute tracking-wide">
                            {item.tone}
                          </div>
                        </div>
                        <div className="text-sm font-medium whitespace-nowrap">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() => setQuantity(item.lineId, item.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="w-8 h-8 flex items-center justify-center hover:bg-bone"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQuantity(item.lineId, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="w-8 h-8 flex items-center justify-center hover:bg-bone"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.lineId)}
                          className="text-xs text-mute underline-grow hover:text-ink"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line bg-ivory px-6 py-6">
              <div className="flex items-center justify-between mb-1 text-sm text-mute">
                <span>Subtotal</span>
                <span className="text-ink font-medium tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-mute">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <button type="button" onClick={handleCheckout} className="mt-5 w-full btn-primary">
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full text-center text-xs tracking-widest uppercase text-mute hover:text-ink py-2"
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
