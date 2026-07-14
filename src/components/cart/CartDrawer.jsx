import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { StrkImage } from "@/components/ui/StrkImage";
import { formatPrice, cn } from "@/lib/utils";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    updateQty,
    removeItem,
  } = useCart();
  const panelRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeCart]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-500",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        tabIndex={isOpen ? 0 : -1}
        className="absolute inset-0 bg-ink/40"
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[420px] bg-bone text-ink shadow-2xl",
          "flex flex-col transition-transform duration-500 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-[0.18em] uppercase">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-ink hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="w-10 h-10 text-gold" strokeWidth={1.2} />
            <p className="mt-6 font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="mt-2 text-sm text-muted-light max-w-xs">
              Begin with our cult-favorite huggies or treat yourself to the
              Royal Heirloom set.
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
            <div className="flex-1 overflow-y-auto px-6 divide-y divide-hairline">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.variantId}`}
                  className="py-6 flex gap-4"
                >
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="flex-shrink-0 w-20 aspect-[4/5] bg-warm-radial-soft overflow-hidden"
                  >
                    <StrkImage
                      imgId={item.product.images[0].id}
                      query={item.product.images[0].query}
                      ratio="4x5"
                      width={300}
                      alt={item.product.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="font-serif text-sm uppercase tracking-editorial font-medium text-ink hover:text-gold transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-1 text-xs text-muted-light font-sans">
                      {item.variantLabel}
                    </p>
                    <p className="mt-2 text-sm text-ink font-sans">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.id, item.variantId, item.qty - 1)
                          }
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-gold"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span
                          aria-live="polite"
                          className="w-8 text-center text-sm font-sans"
                        >
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.id, item.variantId, item.qty + 1)
                          }
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-gold"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variantId)}
                        className="text-[10px] uppercase tracking-editorial text-muted-light hover:text-ink font-sans"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <footer className="border-t border-hairline px-6 py-6 bg-bone">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-editorial text-muted-light">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-muted-light font-sans">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="mt-5 w-full btn-primary"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center font-sans text-[11px] uppercase tracking-editorial text-muted-light hover:text-ink py-2"
              >
                Continue Shopping
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
