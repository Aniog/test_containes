import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StockImage from "@/components/ui/StockImage";

function LineImage({ item }) {
  return (
    <div className="relative w-20 h-24 bg-espresso stock-skeleton overflow-hidden shrink-0">
      <StockImage
        query={item.imageQuery || item.name}
        imageId={`cart-line-${item.id}-${item.tone}`}
        ratio="3x4"
        width={300}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function CartDrawer() {
  const { items, summary, isOpen, closeCart, updateQuantity, removeItem } = useCart();
  const drawerRef = useRef(null);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-espresso/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full md:w-[440px] bg-bone shadow-soft transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-display text-2xl tracking-[0.12em] text-espresso">
            Your Bag
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-espresso hover:text-gold transition-colors"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <ShoppingBag
              size={36}
              strokeWidth={1.2}
              className="text-muted mb-6"
            />
            <p className="font-display text-2xl text-espresso">
              Your bag is empty
            </p>
            <p className="mt-2 text-[13px] text-muted max-w-[260px]">
              Begin with our bestsellers, or browse the full collection.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-primary mt-7"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            {summary.remainingForFree > 0 && (
              <div className="px-6 py-3 bg-ivory border-b border-hairline">
                <p className="text-[11px] tracking-widest2 uppercase text-charcoal text-center">
                  Add <span className="text-gold">{formatPrice(summary.remainingForFree)}</span> for free shipping
                </p>
                <div className="mt-2 h-[2px] bg-linen">
                  <div
                    className="h-full bg-gold transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (summary.subtotal / summary.freeShippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto cart-scroll px-6 py-5">
              <ul className="space-y-6">
                {items.map((item) => {
                  const key = `${item.id}-${item.tone}`;
                  const lineTotal = item.price * item.qty;
                  return (
                    <li key={key} className="flex gap-4 pb-6 border-b border-hairline last:border-b-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="block"
                      >
                        <LineImage item={item} />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              to={`/product/${item.id}`}
                              onClick={closeCart}
                              className="product-name text-[13px] hover:text-gold transition-colors block"
                            >
                              {item.name}
                            </Link>
                            <p className="mt-1 text-[10px] tracking-widest3 uppercase text-muted">
                              {item.tone === "gold" ? "18k Gold" : "Sterling Silver"}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id, item.tone)}
                            aria-label={`Remove ${item.name}`}
                            className="text-muted hover:text-espresso transition-colors -mt-1"
                          >
                            <X size={14} strokeWidth={1.5} />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center border border-hairline">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.tone, item.qty - 1)
                              }
                              aria-label="Decrease quantity"
                              className="w-8 h-8 inline-flex items-center justify-center text-espresso hover:bg-ivory transition-colors"
                              disabled={item.qty <= 1}
                            >
                              <Minus size={12} strokeWidth={1.5} />
                            </button>
                            <span className="w-8 text-center text-[12px] tabular-nums">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.tone, item.qty + 1)
                              }
                              aria-label="Increase quantity"
                              className="w-8 h-8 inline-flex items-center justify-center text-espresso hover:bg-ivory transition-colors"
                            >
                              <Plus size={12} strokeWidth={1.5} />
                            </button>
                          </div>
                          <p className="text-[13px] text-charcoal">
                            {formatPrice(lineTotal)}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <footer className="border-t border-hairline px-6 py-5 bg-bone">
              <div className="flex justify-between text-[13px] text-charcoal mb-2">
                <span className="tracking-wide">Subtotal</span>
                <span className="tabular-nums">{summary.formattedSubtotal}</span>
              </div>
              <div className="flex justify-between text-[13px] text-charcoal mb-4">
                <span className="tracking-wide">Shipping</span>
                <span className="tabular-nums">{summary.formattedShipping}</span>
              </div>
              <div className="flex justify-between text-[15px] text-espresso font-medium mb-5 pt-4 border-t border-hairline">
                <span className="tracking-widest2 uppercase text-[11px]">Total</span>
                <span className="tabular-nums">{summary.formattedTotal}</span>
              </div>
              <button
                type="button"
                className="btn btn-primary w-full"
                onClick={closeCart}
              >
                Checkout · {summary.formattedTotal}
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="block w-full mt-3 text-center text-[11px] tracking-widest3 uppercase text-muted hover:text-espresso transition-colors"
              >
                Continue Shopping
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}