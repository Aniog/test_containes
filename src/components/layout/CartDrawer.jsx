import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

function PlaceholderThumb({ name }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-ivory-deep to-ivory-soft flex items-center justify-center">
      <span className="font-serif text-2xl text-bronze/70 select-none">
        {name?.charAt(0) || "V"}
      </span>
    </div>
  );
}

export default function CartDrawer() {
  const { isOpen, close, lineItems, subtotal, setQty, remove, itemCount } =
    useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-500 ease-editorial",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping cart"
    >
      <div
        className="absolute inset-0 bg-espresso-deep/60"
        onClick={close}
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[420px] bg-ivory",
          "flex flex-col",
          "transform transition-transform duration-500 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div>
            <h2 className="font-serif text-xl text-espresso">Your Bag</h2>
            <p className="text-xs text-muted mt-0.5">
              {itemCount === 0
                ? "Nothing here yet"
                : `${itemCount} item${itemCount === 1 ? "" : "s"}`}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={close}
            className="p-2 -mr-2 text-espresso"
          >
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </div>

        {lineItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-14 h-14 rounded-full bg-ivory-deep flex items-center justify-center mb-6">
              <ShoppingBag className="w-6 h-6 text-espresso" strokeWidth={1.25} />
            </div>
            <p className="font-serif text-2xl text-espresso mb-2">Your bag is empty</p>
            <p className="text-sm text-muted mb-8 max-w-xs text-pretty">
              Discover our demi-fine pieces, designed for the everyday edit.
            </p>
            <Link to="/shop" onClick={close} className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-hairline">
                {lineItems.map((line) => {
                  const { product, color, size, qty, lineTotal } = line;
                  const key = `${product.id}-${color}-${size}`;
                  return (
                    <li key={key} className="py-5 flex gap-4">
                      <Link
                        to={`/product/${product.id}`}
                        onClick={close}
                        className="block w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 overflow-hidden bg-card"
                        aria-label={product.name}
                      >
                        <PlaceholderThumb name={product.name} />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link
                              to={`/product/${product.id}`}
                              onClick={close}
                              className="product-name hover:text-bronze-deep transition-colors"
                            >
                              {product.name}
                            </Link>
                            <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted">
                              {color} · {size}
                            </p>
                          </div>
                          <p className="product-price whitespace-nowrap">
                            {formatPrice(lineTotal)}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="inline-flex items-center border border-hairline">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() =>
                                setQty({
                                  id: product.id,
                                  color,
                                  size,
                                  qty: qty - 1,
                                })
                              }
                              className="w-8 h-8 flex items-center justify-center text-espresso hover:text-bronze-deep transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </button>
                            <span className="w-8 text-center text-sm tabular-nums text-espresso">
                              {qty}
                            </span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() =>
                                setQty({
                                  id: product.id,
                                  color,
                                  size,
                                  qty: qty + 1,
                                })
                              }
                              className="w-8 h-8 flex items-center justify-center text-espresso hover:text-bronze-deep transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              remove({ id: product.id, color, size })
                            }
                            className="text-[11px] uppercase tracking-[0.2em] text-muted hover:text-espresso transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-hairline px-6 py-5 bg-ivory-soft">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-muted mt-2 text-pretty">
                Shipping and taxes calculated at checkout. Free worldwide
                shipping over $75.
              </p>
              <button type="button" className="btn-primary w-full mt-5">
                Checkout
              </button>
              <button
                type="button"
                onClick={close}
                className="block w-full text-center mt-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-espresso transition-colors"
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
