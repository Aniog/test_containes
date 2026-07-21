import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import strkImgConfig from "@/strk-img-config.json";

const FALLBACK_IMG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

function pickImgUrl(id) {
  const entry = strkImgConfig?.[id];
  if (!entry) return "";
  const pickedId = entry.picked;
  if (!pickedId) return "";
  const result = (entry.results || []).find((r) => r && r.id === pickedId);
  return result?.url || "";
}

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, updateQuantity, removeItem } =
    useCart();

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={[
        "fixed inset-0 z-[70] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!isOpen}
      role={isOpen ? "dialog" : undefined}
      aria-modal={isOpen ? "true" : undefined}
      aria-label={isOpen ? "Shopping bag" : undefined}
      inert={!isOpen ? "" : undefined}
    >
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-[1px]"
        onClick={closeCart}
      />
      <aside
        className={[
          "absolute inset-y-0 right-0 w-full sm:w-[420px] bg-ivory-50 shadow-drawer flex flex-col transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <h2 className="font-sans text-[11px] uppercase tracking-widest2 text-espresso">
            Your Bag
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 hover:text-gold-500 transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag
              className="w-10 h-10 text-taupe-400 mb-4"
              strokeWidth={1}
            />
            <p className="font-serif text-2xl text-espresso mb-1">
              Your bag is empty
            </p>
            <p className="text-sm text-taupe-500 mb-6 max-w-[260px]">
              Discover our bestsellers and find your next everyday piece.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-2 divide-y divide-hairline">
              {lines.map((line) => {
                const { product, variant, quantity, lineTotal } = line;
                const thumbUrl = pickImgUrl(`${product.id}-img-1`);
                return (
                  <div
                    key={line.key}
                    className="py-5 flex gap-4 animate-fade-in"
                  >
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="shrink-0 w-20 h-24 bg-ivory-200 overflow-hidden"
                    >
                      <img
                        alt={product.name}
                        src={thumbUrl || FALLBACK_IMG}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3
                            id={`${product.id}-name`}
                            className="product-name text-[13px] truncate"
                          >
                            {product.name}
                          </h3>
                          <p className="mt-1 text-xs text-taupe-500">
                            {variant?.label || "Gold"}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            removeItem(product.id, line.variantId)
                          }
                          aria-label={`Remove ${product.name}`}
                          className="text-taupe-400 hover:text-espresso transition-colors"
                        >
                          <X className="w-4 h-4" strokeWidth={1.25} />
                        </button>
                      </div>

                      <div className="mt-auto flex items-end justify-between">
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                product.id,
                                line.variantId,
                                quantity - 1
                              )
                            }
                            aria-label="Decrease quantity"
                            className="w-7 h-7 flex items-center justify-center text-espresso hover:text-gold-500"
                          >
                            <Minus className="w-3 h-3" strokeWidth={1.5} />
                          </button>
                          <span className="w-7 text-center text-xs font-sans tabular-nums">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                product.id,
                                line.variantId,
                                quantity + 1
                              )
                            }
                            aria-label="Increase quantity"
                            className="w-7 h-7 flex items-center justify-center text-espresso hover:text-gold-500"
                          >
                            <Plus className="w-3 h-3" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-sm font-sans tabular-nums">
                          {formatPrice(lineTotal)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-hairline px-6 py-5 space-y-4 bg-ivory-50">
              <div className="flex items-center justify-between text-sm">
                <span className="text-taupe-500 uppercase tracking-widest2 text-[11px]">
                  Subtotal
                </span>
                <span className="font-sans tabular-nums text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-taupe-500">
                Shipping & taxes calculated at checkout. Free worldwide shipping on orders over $80.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="btn-ghost w-full"
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
