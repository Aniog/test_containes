import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, shipping, total } = useCart();
  const [imgSrcs, setImgSrcs] = useState({});

  // Listen for stock image resolution for any product we don't have yet.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (event) => {
      const t = event.target;
      if (t && t.tagName === "IMG" && t.dataset.strkImgId) {
        setImgSrcs((prev) => ({ ...prev, [t.dataset.strkImgId]: t.currentSrc || t.src }));
      }
    };
    document.addEventListener("load", handler, true);
    return () => document.removeEventListener("load", handler, true);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 animate-fade-in-soft"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 h-full w-full sm:w-[440px] bg-ivory border-l border-hairline flex flex-col transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.4} className="text-ink" />
            <h2 className="font-serif text-xl">Your Bag</h2>
            <span className="text-[11px] uppercase tracking-ui text-taupe">
              ({items.length})
            </span>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 text-ink hover:text-gold transition-colors"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <p className="font-serif text-2xl text-ink">Your bag is empty.</p>
            <p className="mt-2 text-[14px] text-taupe max-w-xs">
              Discover pieces you’ll reach for on a Tuesday — and again on Saturday.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center justify-center h-12 px-8 bg-ink text-paper uppercase tracking-ui text-[12px] font-medium hover:bg-ink-soft transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 divide-y divide-hairline">
              {items.map((item) => {
                const primary = item.product.images[0];
                const src = imgSrcs[primary.id] || null;
                return (
                  <li key={`${item.productId}-${item.variantId}`} className="py-5 flex gap-4">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="relative w-20 h-24 flex-shrink-0 overflow-hidden bg-paper block"
                    >
                      <img
                        alt={item.product.name}
                        data-strk-img-id={primary.id}
                        data-strk-img={primary.query}
                        data-strk-img-ratio={primary.ratio}
                        data-strk-img-width="320"
                        src={
                          src ||
                          "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        }
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <Link
                            to={`/product/${item.productId}`}
                            onClick={closeCart}
                            className="product-name block truncate hover:text-gold-deep transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="mt-1 text-[12px] text-taupe">
                            {item.variant.label}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label="Remove item"
                          onClick={() => removeItem(item.productId, item.variantId)}
                          className="p-1 -mr-1 text-taupe hover:text-ink transition-colors"
                        >
                          <X size={14} strokeWidth={1.4} />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              updateQuantity(item.productId, item.variantId, item.quantity - 1)
                            }
                            className="h-8 w-8 inline-flex items-center justify-center text-ink hover:bg-paper transition-colors"
                          >
                            <Minus size={12} strokeWidth={1.4} />
                          </button>
                          <span className="w-8 text-center text-[13px] font-medium text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              updateQuantity(item.productId, item.variantId, item.quantity + 1)
                            }
                            className="h-8 w-8 inline-flex items-center justify-center text-ink hover:bg-paper transition-colors"
                          >
                            <Plus size={12} strokeWidth={1.4} />
                          </button>
                        </div>
                        <p className="text-[14px] text-ink font-medium">
                          {formatPrice(item.lineTotal)}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-hairline px-6 py-5 space-y-3">
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-taupe">Subtotal</span>
                <span className="text-ink">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-taupe">Shipping</span>
                <span className="text-ink">
                  {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-hairline">
                <span className="text-[11px] uppercase tracking-ui text-taupe">Total</span>
                <span className="font-serif text-xl text-ink">{formatPrice(total)}</span>
              </div>
              <button
                type="button"
                className="mt-3 w-full inline-flex items-center justify-center h-12 bg-ink text-paper uppercase tracking-ui text-[12px] font-medium hover:bg-ink-soft transition-colors"
                onClick={() => alert("Checkout is not connected in this preview.")}
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-center text-[11px] uppercase tracking-ui text-taupe hover:text-ink transition-colors py-2"
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
