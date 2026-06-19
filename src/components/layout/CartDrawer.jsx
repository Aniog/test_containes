import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { getProductById, formatPrice } from "@/lib/products";
import JewelryImage from "@/components/ui/JewelryImage";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeItem, summary, lastAdded } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-ink/50 transition-opacity duration-500 ease-editorial ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] bg-ivory shadow-drawer
                    transition-transform duration-500 ease-editorial flex flex-col
                    ${isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-line">
          <h2 className="font-serif text-xl text-ink flex items-center gap-2 flex-wrap">
            <span>Your Cart</span>
            <span className="font-sans text-xs text-mushroom tracking-widest2">
              {summary.count} {summary.count === 1 ? "ITEM" : "ITEMS"}
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 text-ink hover:opacity-70"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <EmptyCart onClose={closeCart} />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {lastAdded && (
                <div
                  key={lastAdded.ts}
                  className="mb-4 px-3 py-2 bg-cream-warm border border-line rounded-sm font-sans text-[11px] uppercase tracking-widest2 text-ink/80 animate-fadeIn"
                >
                  Added to cart
                </div>
              )}
              <ul className="divide-y divide-line">
                {items.map((item) => {
                  const product = getProductById(item.id);
                  if (!product) return null;
                  const key = `${item.id}-${item.variant || "default"}`;
                  return (
                    <li key={key} className="py-5 flex gap-4">
                      <Link
                        to={`/product/${product.id}`}
                        onClick={closeCart}
                        className="w-20 h-24 flex-shrink-0 bg-cream-warm overflow-hidden"
                      >
                        <JewelryImage
                          id={product.images[0]}
                          className="w-full h-full"
                        />
                      </Link>
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              to={`/product/${product.id}`}
                              onClick={closeCart}
                              className="product-name text-ink hover:text-gold-deep transition-colors"
                            >
                              {product.name}
                            </Link>
                            <p className="mt-1 font-sans text-xs text-mushroom">
                              {product.tagline}
                            </p>
                          </div>
                          <span className="font-sans text-sm text-ink font-medium">
                            {formatPrice(product.price * item.qty)}
                          </span>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="inline-flex items-center border border-line">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() =>
                                updateQty(item.id, item.qty - 1, item.variant)
                              }
                              className="w-7 h-7 flex items-center justify-center text-ink hover:bg-cream-warm"
                            >
                              <Minus className="w-3 h-3" strokeWidth={1.5} />
                            </button>
                            <span className="w-7 text-center font-sans text-xs text-ink">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() =>
                                updateQty(item.id, item.qty + 1, item.variant)
                              }
                              className="w-7 h-7 flex items-center justify-center text-ink hover:bg-cream-warm"
                            >
                              <Plus className="w-3 h-3" strokeWidth={1.5} />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id, item.variant)}
                            className="font-sans text-[11px] uppercase tracking-widest2 text-mushroom hover:text-ink transition-colors"
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

            <div className="px-6 py-6 border-t border-line bg-cream">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
                  Subtotal
                </span>
                <span className="font-sans text-sm text-ink font-medium">
                  {formatPrice(summary.subtotal)}
                </span>
              </div>
              <p className="font-sans text-[11px] tracking-widest2 text-mushroom uppercase">
                Free worldwide shipping
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="mt-5 block w-full text-center btn-gold"
              >
                Checkout · {formatPrice(summary.total)}
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function EmptyCart({ onClose }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
      <ShoppingBag className="w-10 h-10 text-gold" strokeWidth={1.2} />
      <p className="mt-6 font-serif text-2xl text-ink">Your cart is empty</p>
      <p className="mt-2 font-sans text-sm text-mushroom max-w-xs">
        Discover our demi-fine pieces — designed to be worn every day and treasured for years.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="mt-8 btn-outline-light"
      >
        Shop the Collection
      </Link>
    </div>
  );
}
