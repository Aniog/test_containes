import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { resolveImageUrl } from "@/lib/stockImages";

export default function CartDrawer() {
  const { items, totals, isOpen, closeCart, removeItem, setQty } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute inset-0 bg-ink/50" onClick={closeCart} />
      <aside
        ref={containerRef}
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cream",
          "flex flex-col shadow-drawer",
          "transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-line">
          <div className="flex items-center gap-3">
            <ShoppingBag strokeWidth={1.25} className="w-5 h-5 text-ink" />
            <h2 className="font-serif text-xl text-ink">Your Bag</h2>
            <span className="text-[11px] uppercase tracking-wider-3 text-muted font-sans">
              {totals.count} {totals.count === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 text-ink hover:text-gold-deep transition-colors"
          >
            <X strokeWidth={1.25} className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center px-8 text-center py-20">
              <div
                className="w-16 h-16 rounded-full border border-line flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <ShoppingBag strokeWidth={1.25} className="w-6 h-6 text-muted" />
              </div>
              <p className="font-serif text-2xl text-ink mb-2">Your bag is empty</p>
              <p className="text-muted text-sm font-sans font-light mb-8 max-w-xs">
                Discover demi-fine pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-primary"
              >
                Shop the Collection
              </button>
            </div>
          ) : (
            <ul className="px-6 divide-y divide-line">
              {items.map((line) => (
                <li key={line.key} className="py-6 flex gap-4">
                  <Link
                    to={`/product/${line.id}`}
                    onClick={closeCart}
                    className="block w-24 h-28 shrink-0 bg-ivory border border-line overflow-hidden"
                  >
                    <img
                      alt={line.product.name}
                      data-strk-img-id={`${line.id}-main`}
                      data-strk-img={`[${line.id}-name] [${line.id}-subtitle]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="300"
                      src={line.product.imgPrimaryUrl || resolveImageUrl(`${line.id}-primary`)}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <Link
                      to={`/product/${line.id}`}
                      onClick={closeCart}
                      className="block"
                    >
                      <h3
                        id={`${line.id}-name`}
                        className="font-sans text-[11px] uppercase tracking-wider-2 text-ink font-medium truncate"
                      >
                        {line.product.name}
                      </h3>
                      <p
                        id={`${line.id}-subtitle`}
                        className="text-xs text-muted font-sans font-light mt-0.5"
                      >
                        {line.product.subtitle}
                        {line.variant ? ` · ${line.variant}` : ""}
                      </p>
                    </Link>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink hover:text-gold-deep"
                        >
                          <Minus strokeWidth={1.5} className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-sans">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink hover:text-gold-deep"
                        >
                          <Plus strokeWidth={1.5} className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-base text-ink">
                          {formatPrice(line.product.price * line.qty)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(line.key)}
                          className="text-[10px] uppercase tracking-wider-3 text-muted hover:text-ink font-sans"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-line bg-ivory px-6 py-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider-3 font-sans text-muted">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(totals.subtotal)}
              </span>
            </div>
            <p className="text-xs text-muted font-sans font-light mb-5">
              Shipping & taxes calculated at checkout. Free worldwide shipping over $75.
            </p>
            <button type="button" className="btn-primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-wider-3 font-sans text-muted hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
