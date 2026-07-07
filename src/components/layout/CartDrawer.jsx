import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    setQuantity,
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

  // Close on Escape
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
        "fixed inset-0 z-[60] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-ink/50"
        onClick={closeCart}
        aria-label="Close cart"
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[420px] bg-ivory text-ink shadow-2xl flex flex-col transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <h2 className="font-serif text-lg tracking-[0.25em]">YOUR BAG</h2>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 hover:opacity-60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-2xl">Your bag is empty</p>
            <p className="mt-3 text-sm text-muted">
              Discover pieces made to be lived in.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-block bg-ink text-ivory text-[12px] uppercase tracking-editorial px-8 py-3.5 hover:bg-champagne transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 p-5">
                  <div className="w-20 h-24 bg-sand overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="product-name text-xs">{item.name}</p>
                        {item.variant && (
                          <p className="mt-1 text-[11px] uppercase tracking-editorial text-muted">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <p className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() =>
                            setQuantity(item.key, item.quantity - 1)
                          }
                          className="w-8 h-8 grid place-items-center hover:bg-sand transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() =>
                            setQuantity(item.key, item.quantity + 1)
                          }
                          className="w-8 h-8 grid place-items-center hover:bg-sand transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        aria-label="Remove from cart"
                        onClick={() => removeItem(item.key)}
                        className="p-1.5 text-muted hover:text-ink"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.4} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-hairline p-6 space-y-4 bg-ivory">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-editorial text-muted">
                  Subtotal
                </span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-[11px] text-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full text-center bg-ink text-ivory text-[12px] uppercase tracking-editorial py-4 hover:bg-champagne transition-colors"
              >
                Checkout
              </Link>
              <button
                onClick={closeCart}
                className="block w-full text-center text-[12px] uppercase tracking-editorial text-muted py-2 hover:text-ink"
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
