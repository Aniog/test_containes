import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { getProductImageUrl } from "@/hooks/useStrkImages";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { items, subtotal, count, isCartOpen, closeCart, setQty, removeItem } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <div className={cn("fixed inset-0 z-[60]", !isCartOpen && "pointer-events-none")}>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          "absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Panel */}
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-[0_20px_50px_-20px_rgba(33,26,20,0.4)] transition-transform duration-500 ease-luxe",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-stone px-6 py-5">
          <p className="font-serif text-lg font-medium uppercase tracking-[0.2em] text-ink">
            Your Cart {count > 0 && <span className="text-taupe">({count})</span>}
          </p>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 text-ink-soft transition-colors hover:text-gold">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag size={36} strokeWidth={1} className="text-stone" />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-taupe">Pieces you treasure will appear here.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-stone">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-5">
                    <Link to={`/product/${item.productId}`} onClick={closeCart} className="shrink-0">
                      <img
                        src={getProductImageUrl(item.productId, "a1")}
                        alt={item.name}
                        className="h-24 w-[72px] bg-sand object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to={`/product/${item.productId}`}
                            onClick={closeCart}
                            className="font-serif text-[13px] font-medium uppercase tracking-[0.14em] text-ink hover:text-gold"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-0.5 text-xs text-taupe">{item.variant} tone</p>
                        </div>
                        <p className="font-serif text-base font-medium text-ink">{formatPrice(item.price * item.qty)}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-stone">
                          <button
                            onClick={() => setQty(item.key, item.qty - 1)}
                            className="px-2.5 py-1.5 text-ink-soft transition-colors hover:text-gold"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-sm text-ink">{item.qty}</span>
                          <button
                            onClick={() => setQty(item.key, item.qty + 1)}
                            className="px-2.5 py-1.5 text-ink-soft transition-colors hover:text-gold"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="p-1.5 text-taupe transition-colors hover:text-ink"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={15} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone bg-sand/50 px-6 py-6">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-soft">Subtotal</p>
                <p className="font-serif text-xl font-medium text-ink">{formatPrice(subtotal)}</p>
              </div>
              <p className="mt-1 text-xs text-taupe">Shipping and taxes calculated at checkout. Free worldwide shipping.</p>
              <button className="mt-5 w-full bg-gold py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-gold-deep">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-[12px] font-medium uppercase tracking-[0.18em] text-ink-soft underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
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
