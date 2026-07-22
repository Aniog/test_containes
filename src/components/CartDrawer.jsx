import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Lock, Minus, Plus, ShoppingBag, Truck, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { PLACEHOLDER_IMG, formatPrice, products } from "@/data/products";

const FREE_SHIPPING_THRESHOLD = 75;

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, subtotal, updateQty, removeItem } =
    useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isCartOpen, items.length]);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 ${isCartOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isCartOpen}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-espresso/50 backdrop-blur-[2px] transition-opacity duration-500 ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-[-24px_0_60px_-30px_rgba(43,33,24,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-2xl font-medium text-espresso">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-espresso transition-colors hover:bg-sand/60"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length > 0 && (
          <div className="border-b border-line bg-cream/60 px-6 py-4">
            <p className="flex items-center gap-2 text-xs tracking-wide text-cocoa">
              <Truck className="h-4 w-4 text-bronze" strokeWidth={1.5} />
              {remaining > 0 ? (
                <span>
                  You're{" "}
                  <span className="font-semibold text-espresso">
                    {formatPrice(remaining)}
                  </span>{" "}
                  away from free worldwide shipping
                </span>
              ) : (
                <span className="font-medium text-espresso">
                  Your order ships free, worldwide.
                </span>
              )}
            </p>
            <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-sand">
              <div
                className="h-full bg-bronze transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag
                className="h-10 w-10 text-sand"
                strokeWidth={1}
              />
              <p className="mt-5 font-serif text-2xl text-espresso">
                Your cart is empty
              </p>
              <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-cocoa">
                Discover demi-fine pieces crafted to be treasured every day.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-7 bg-espresso px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-bronze"
              >
                Shop Bestsellers
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {products
                .filter((product) =>
                  items.some((item) => item.productId === product.id)
                )
                .map((product) => {
                  const mainImg = product.images[0];
                  const cartRows = items.filter(
                    (item) => item.productId === product.id
                  );
                  return cartRows.map((item) => (
                  <li
                    key={`${item.productId}-${item.variant}`}
                    className="flex gap-4 py-5"
                  >
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="block h-24 w-20 shrink-0 overflow-hidden bg-sand"
                    >
                      <img
                        data-strk-img-id={`cart-${mainImg.imgId}`}
                        data-strk-img={`${mainImg.desc} ${mainImg.title}`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src={PLACEHOLDER_IMG}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${product.id}`}
                            onClick={closeCart}
                            className="font-serif text-base font-semibold uppercase tracking-[0.12em] text-espresso transition-colors hover:text-bronze"
                          >
                            {product.name}
                          </Link>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cocoa">
                            {item.variant === "gold"
                              ? "18K Gold Tone"
                              : "Silver Tone"}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            removeItem(item.productId, item.variant)
                          }
                          aria-label={`Remove ${product.name}`}
                          className="text-cocoa transition-colors hover:text-espresso"
                        >
                          <X className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-line">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              updateQty(
                                item.productId,
                                item.variant,
                                item.qty - 1
                              )
                            }
                            className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-sand/60"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-espresso">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              updateQty(
                                item.productId,
                                item.variant,
                                item.qty + 1
                              )
                            }
                            className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-sand/60"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-sm font-semibold tracking-wide text-espresso">
                          {formatPrice(product.price * item.qty)}
                        </p>
                      </div>
                    </div>
                  </li>
                  ));
                })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.25em] text-cocoa">
                Subtotal
              </span>
              <span className="font-serif text-xl font-semibold text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-cocoa">
              Shipping &amp; taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 bg-bronze px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-bronze-dark"
            >
              <Lock className="h-3.5 w-3.5" strokeWidth={2} />
              Checkout Securely
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.25em] text-cocoa transition-colors hover:text-espresso"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

