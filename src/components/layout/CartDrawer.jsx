import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart, formatPrice } from "@/store/cart";
import { cn } from "@/lib/cn";

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, count, setQuantity, removeItem } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[80] bg-espresso-300/55 transition-opacity duration-400",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={closeCart}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={cn(
          "fixed top-0 right-0 z-[81] h-full w-full sm:w-[420px] bg-ivory-50 text-espresso-200 shadow-soft-lg",
          "transition-transform duration-500 ease-editorial flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b hairline-dark">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4" strokeWidth={1.4} />
            <span className="font-sans text-[11px] tracking-widest2 uppercase">
              Your bag {count > 0 && <span className="opacity-60">({count})</span>}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="px-6 py-20 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border hairline-dark flex items-center justify-center mb-6">
                <ShoppingBag className="w-5 h-5 opacity-50" strokeWidth={1.2} />
              </div>
              <p className="font-serif text-2xl text-espresso-200 mb-2">Your bag is empty</p>
              <p className="text-sm text-muted mb-8 max-w-xs">
                Begin with a quiet piece you'll wear on repeat — or browse the full collection.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Shop the collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y hairline-dark">
              {items.map((it) => {
                const product = it.product;
                if (!product) return null;
                return (
                  <li key={`${it.productId}-${it.tone}`} className="px-6 py-5 flex gap-4">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="w-20 h-24 bg-ivory-200 flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-3">
                        <div className="min-w-0">
                          <Link
                            to={`/product/${product.id}`}
                            onClick={closeCart}
                            className="block font-sans text-[11px] tracking-wider2 uppercase text-espresso-200 truncate"
                          >
                            {product.name}
                          </Link>
                          <p className="text-xs text-muted mt-1">
                            {it.tone === "silver" ? "Silver tone" : "Gold tone"}
                          </p>
                        </div>
                        <p className="font-serif text-lg text-espresso-200 whitespace-nowrap">
                          {formatPrice(product.price * it.quantity)}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center border hairline-dark">
                          <button
                            type="button"
                            onClick={() => setQuantity(it.productId, it.tone, it.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-ivory-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={1.4} />
                          </button>
                          <span className="w-8 text-center text-xs font-sans">{it.quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(it.productId, it.tone, it.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-ivory-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={1.4} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(it.productId, it.tone)}
                          className="text-[11px] tracking-wider2 uppercase text-muted hover:text-espresso-200 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t hairline-dark px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] tracking-widest2 uppercase text-muted">Subtotal</span>
              <span className="font-serif text-2xl text-espresso-200">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              onClick={() => {
                // No real checkout yet
                closeCart();
                window.alert("Checkout coming soon — your bag is saved.");
              }}
              className="btn-primary w-full"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full text-center mt-3 text-[11px] tracking-widest2 uppercase text-muted hover:text-espresso-200 transition-colors"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
