import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import StockImage from "@/components/ui/StockImage";

export default function CartDrawer() {
  const { items, isOpen, close, setQuantity, removeItem, subtotal } = useCart();

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-500",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className="absolute inset-0 bg-espresso-300/40 backdrop-blur-sm"
        onClick={close}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[420px] bg-cream-50 shadow-drawer flex flex-col transition-transform duration-500 ease-smooth",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline/60">
          <span className="font-sans text-[12px] uppercase tracking-widest2 text-espresso-300">
            Your Bag
            <span className="ml-2 text-muted">({items.length})</span>
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="p-2 -mr-2 text-espresso-300 hover:text-gold-500 transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-3xl text-espresso-300">Your bag is empty</p>
            <p className="mt-3 text-sm text-muted max-w-xs">
              Pieces you add will be saved here. Take a look at our newest arrivals.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-8 btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.lineId} className="flex gap-4">
                    <div className="w-20 h-24 bg-cream-200 overflow-hidden flex-shrink-0">
                      <StockImage
                        imgId={item.image || item.id}
                        query={item.name}
                        ratio="3x4"
                        width="160"
                        className="w-full h-full object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="product-name">{item.name}</p>
                          {item.variant && (
                            <p className="mt-1 text-[11px] uppercase tracking-widest2 text-muted">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.lineId)}
                          className="text-muted hover:text-espresso-300 transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="inline-flex items-center border border-hairline/80">
                          <button
                            type="button"
                            onClick={() => setQuantity(item.lineId, item.quantity - 1)}
                            className="p-2 text-espresso-300 hover:text-gold-500 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                          <span className="w-7 text-center font-sans text-xs text-espresso-300">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQuantity(item.lineId, item.quantity + 1)}
                            className="p-2 text-espresso-300 hover:text-gold-500 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="font-sans text-sm text-espresso-300">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline/60 px-6 py-5 bg-cream-100">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">Subtotal</span>
                <span className="font-serif text-2xl text-espresso-300">
                  ${subtotal.toFixed(0)}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={close}
                className="mt-4 w-full btn-primary"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={close}
                className="mt-3 w-full text-center font-sans text-[12px] uppercase tracking-widest2 text-muted hover:text-espresso-300 transition-colors"
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
