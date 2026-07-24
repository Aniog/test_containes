import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ProductArt } from "@/components/decor/JewelryArt";
import { formatCurrency, cn } from "@/lib/utils";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
  } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

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
        aria-hidden="true"
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 w-full max-w-md bg-bone shadow-drawer flex flex-col transition-transform duration-500 ease-elegant",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl text-ink">Your Cart</h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 text-ink hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-14 h-14 rounded-full border border-hairline flex items-center justify-center text-cocoa">
              <ShoppingBag className="w-6 h-6" strokeWidth={1.4} />
            </div>
            <p className="mt-6 font-serif text-2xl text-ink">Your cart is empty</p>
            <p className="mt-2 text-sm text-cocoa max-w-xs">
              Discover the new collection — small batches of demi-fine pieces, made to wear.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center justify-center px-7 py-3.5 bg-ink text-bone text-[11px] font-medium tracking-wide-3 uppercase hover:bg-ink/85 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.lineKey} className="flex gap-4 p-6">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="block w-20 h-24 flex-shrink-0 overflow-hidden bg-cream-dark"
                  >
                    <ProductArt imageKey={item.imageKey} />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          to={`/product/${item.productId}`}
                          onClick={closeCart}
                          className="font-serif text-[15px] uppercase tracking-wide-2 text-ink leading-tight hover:text-gold transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-wide-2 text-cocoa">
                          {item.tone === "silver" ? "Silver tone" : "Gold tone"}
                        </p>
                      </div>
                      <p className="font-serif text-base text-ink whitespace-nowrap">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.lineKey, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream-dark transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.lineKey, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream-dark transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineKey)}
                        className="text-[11px] uppercase tracking-wide-2 text-cocoa hover:text-ink transition-colors underline-offset-4 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-hairline px-6 py-6 bg-cream">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-wide-2 text-[11px] text-cocoa">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-2 text-[11px] text-cocoa">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-5 w-full inline-flex items-center justify-center px-7 py-4 bg-ink text-bone text-[11px] font-medium tracking-wide-3 uppercase hover:bg-ink/85 transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full inline-flex items-center justify-center py-2 text-[11px] uppercase tracking-wide-2 text-cocoa hover:text-ink transition-colors"
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
