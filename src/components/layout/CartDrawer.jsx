import { Link } from "react-router-dom";
import { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import StockImage from "@/components/ui/StockImage";
import { useRef } from "react";
import { useStrkImage } from "@/hooks/useStrkImage";
import Button from "@/components/ui/Button";

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, updateQty, removeItem } = useCart();
  const ref = useRef(null);
  useStrkImage(ref, [isOpen]);

  // Lock body scroll while open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const freeShipThreshold = 75;
  const remaining = Math.max(0, freeShipThreshold - subtotal);
  const progress = Math.min(100, (subtotal / freeShipThreshold) * 100);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-500 ease-elegant",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!isOpen}
      ref={ref}
    >
      <div
        className="absolute inset-0 bg-espresso/40"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cream shadow-drawer",
          "flex flex-col transition-transform duration-500 ease-elegant",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between px-6 md:px-8 h-16 border-b border-espresso/10">
          <h2 className="font-serif text-2xl font-light text-espresso">
            Your Bag
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-espresso transition-opacity duration-300 hover:opacity-60"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Free shipping progress */}
        <div className="px-6 md:px-8 py-4 border-b border-espresso/10">
          <p className="text-[11px] uppercase tracking-eyebrow text-taupe">
            {remaining > 0
              ? `${formatPrice(remaining)} away from free shipping`
              : "You've unlocked free shipping"}
          </p>
          <div className="mt-2.5 h-px w-full bg-espresso/10 relative overflow-hidden">
            <span
              className="absolute inset-y-0 left-0 bg-champagne transition-all duration-700 ease-elegant"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-2">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="h-14 w-14 rounded-full bg-cream-deep flex items-center justify-center mb-5">
                <ShoppingBag className="h-5 w-5 text-espresso-soft" strokeWidth={1.4} />
              </div>
              <p className="font-serif text-2xl font-light text-espresso">
                Your bag is empty
              </p>
              <p className="mt-2 text-sm text-taupe max-w-xs">
                Discover the new collection — pieces designed to be worn every day.
              </p>
              <Button
                as={Link}
                to="/shop"
                onClick={closeCart}
                size="md"
                className="mt-7"
              >
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-espresso/10">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="py-5 flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="block w-20 h-24 flex-shrink-0"
                  >
                    <StockImage
                      id={`cart-${item.id}-${item.tone}`}
                      query={item.product.imageQuery}
                      alt={item.product.name}
                      ratio="4x5"
                      width={200}
                      className="w-full h-full"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="block text-xs uppercase tracking-product font-medium text-espresso hover:text-champagne-deep transition-colors duration-300"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-xs text-taupe capitalize">
                          {item.tone === "gold" ? "Gold tone" : "Silver tone"}
                        </p>
                      </div>
                      <p className="text-sm text-espresso font-medium whitespace-nowrap">
                        {formatPrice(item.lineTotal)}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-espresso/15">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.tone, item.qty - 1)}
                          className="h-8 w-8 flex items-center justify-center text-espresso hover:bg-espresso/5 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.6} />
                        </button>
                        <span className="w-8 text-center text-xs text-espresso">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.tone, item.qty + 1)}
                          className="h-8 w-8 flex items-center justify-center text-espresso hover:bg-espresso/5 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.tone)}
                        className="text-[11px] uppercase tracking-eyebrow text-taupe hover:text-espresso transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer summary */}
        {items.length > 0 && (
          <div className="border-t border-espresso/10 px-6 md:px-8 py-6 bg-ivory">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-eyebrow text-taupe">Subtotal</span>
              <span className="font-serif text-2xl font-light text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-taupe">
              Shipping & taxes calculated at checkout
            </p>
            <Button size="block" className="mt-5" onClick={closeCart}>
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full text-center mt-3 text-[11px] uppercase tracking-eyebrow text-taupe hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
