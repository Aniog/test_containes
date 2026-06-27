import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart();

  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [isOpen, items.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        type="button"
        onClick={closeCart}
        aria-label="Close cart"
        className="absolute inset-0 bg-ink/60 velmora-fade-in"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl velmora-slide-in"
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-2xl text-espresso">
            Your Bag
            <span className="ml-2 text-sm text-muted">({itemCount})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-1 text-espresso transition-colors hover:text-gold-deep"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-serif text-3xl text-espresso">Your bag is empty.</p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Pieces you love will appear here, ready to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-8 border border-espresso bg-espresso px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream transition-colors duration-300 hover:bg-gold hover:border-gold"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              <ul className="divide-y divide-hairline">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-5">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="block h-24 w-20 flex-shrink-0 overflow-hidden bg-cream-soft"
                    >
                      <img
                        alt={item.name}
                        data-strk-img-id={item.imgPrimaryId}
                        data-strk-img={item.primaryQuery}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={closeCart}
                          className="font-sans text-[11px] uppercase tracking-[0.22em] text-espresso hover:text-gold-deep"
                        >
                          {item.name}
                        </Link>
                        <span className="font-sans text-sm text-espresso">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted">{item.variant}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            type="button"
                            aria-label="Decrease"
                            onClick={() =>
                              updateQuantity(item.key, item.quantity - 1)
                            }
                            className="px-2 py-1 text-espresso transition-colors hover:text-gold-deep"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-xs">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase"
                            onClick={() =>
                              updateQuantity(item.key, item.quantity + 1)
                            }
                            className="px-2 py-1 text-espresso transition-colors hover:text-gold-deep"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          aria-label="Remove"
                          className="text-muted transition-colors hover:text-espresso"
                        >
                          <Trash2 className="h-4 w-4" strokeWidth={1.4} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline bg-cream-soft px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-5 w-full bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream transition-colors duration-300 hover:bg-gold-deep"
              >
                Checkout — {formatPrice(subtotal)}
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full px-8 py-3 text-[11px] uppercase tracking-[0.28em] text-espresso underline-offset-8 transition-colors hover:underline"
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
