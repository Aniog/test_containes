import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { JewelryImage } from "@/components/ui/JewelryImage";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();

  // Lock body scroll while open
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
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-canvas shadow-drawer transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-line-soft px-6 py-5">
          <h3 className="font-serif text-2xl text-ink">Your Bag</h3>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-ink-secondary hover:text-ink"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-canvas-soft text-ink-secondary">
              <ShoppingBag size={22} strokeWidth={1.4} />
            </div>
            <p className="mt-6 font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="mt-2 text-sm text-ink-secondary max-w-xs">
              Discover our demi-fine pieces, designed to be worn every day.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-8 btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-line-soft">
              {items.map((line) => (
                <li key={line.key} className="flex gap-4 px-6 py-5">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden">
                    <JewelryImage
                      art={line.art}
                      palette={line.palette}
                      ratio="3/4"
                      className="h-full w-full"
                      alt={line.name}
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="product-name text-sm text-ink">
                          {line.name}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-wider2 text-ink-secondary">
                          {line.tone === "gold" ? "18K Gold" : line.tone}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="text-[11px] uppercase tracking-wider2 text-ink-muted hover:text-ink"
                        aria-label={`Remove ${line.name}`}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.key, line.quantity - 1)}
                          className="grid h-8 w-8 place-items-center text-ink-secondary hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.6} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.key, line.quantity + 1)}
                          className="grid h-8 w-8 place-items-center text-ink-secondary hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.6} />
                        </button>
                      </div>
                      <span className="text-sm text-ink tracking-wide">
                        {formatPrice(line.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line-soft bg-canvas-soft px-6 py-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-wider2 text-ink-secondary">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-xs text-ink-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/cart"
                onClick={closeCart}
                className="mt-5 block w-full text-center btn-primary"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 block w-full text-center text-[11px] uppercase tracking-wider2 text-ink-secondary hover:text-ink"
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

export default CartDrawer;
