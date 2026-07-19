import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCT_IMAGES } from "@/data/realImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, updateQty, removeItem, justAdded } =
    useCart();
  const drawerRef = useRef(null);

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape.
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
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping bag"
    >
      <div
        className="absolute inset-0 bg-ink/50 transition-opacity duration-300"
        onClick={closeCart}
      />
      <aside
        ref={drawerRef}
        className={cn(
          "absolute right-0 top-0 h-full w-full sm:w-[440px] bg-bone text-ink shadow-card flex flex-col transition-transform duration-500 ease-velvet",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between h-16 px-5 sm:px-7 border-b border-line">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4" strokeWidth={1.25} />
            <h2 className="product-name">
              {justAdded ? "Added to Bag" : "Your Bag"}
            </h2>
            <span className="text-xs text-taupe">({lines.length})</span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-3xl font-light">Your bag is empty.</p>
            <p className="mt-3 text-sm text-taupe max-w-xs">
              Begin with a bestseller — designed to be lived in.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-outline mt-8"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 sm:px-7 divide-y divide-line">
              {lines.map((line) => {
                const imgs = PRODUCT_IMAGES[line.product.id];
                const imgUrl = imgs?.primary || PLACEHOLDER;
                return (
                  <div
                    key={`${line.id}-${line.variant}`}
                    className="flex gap-4 py-5"
                  >
                    <Link
                      to={`/product/${line.id}`}
                      onClick={closeCart}
                      className="block w-20 h-24 sm:w-24 sm:h-28 bg-cream overflow-hidden shrink-0"
                    >
                      <img
                        alt={line.product.name}
                        src={imgUrl}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="product-name truncate">
                            {line.product.name}
                          </p>
                          <p className="mt-1 text-xs text-taupe">
                            {line.variant}
                          </p>
                        </div>
                        <p className="text-sm font-medium shrink-0">
                          {formatPrice(line.product.price * line.qty)}
                        </p>
                      </div>
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() =>
                              updateQty(line.id, line.variant, line.qty - 1)
                            }
                            className="w-8 h-8 inline-flex items-center justify-center hover:bg-ink hover:text-bone transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={1.25} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQty(line.id, line.variant, line.qty + 1)
                            }
                            className="w-8 h-8 inline-flex items-center justify-center hover:bg-ink hover:text-bone transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={1.25} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(line.id, line.variant)}
                          className="text-[11px] uppercase tracking-[0.18em] text-taupe hover:text-ink transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <footer className="px-5 sm:px-7 py-6 border-t border-line bg-bone">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-ink/80">Subtotal</span>
                <span className="font-serif text-2xl font-light">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-xs text-taupe">
                Shipping and taxes calculated at checkout. Free worldwide
                shipping over $75.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary mt-5 w-full"
              >
                Checkout
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-[11px] uppercase tracking-[0.18em] text-taupe hover:text-ink transition-colors"
              >
                Continue shopping
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
