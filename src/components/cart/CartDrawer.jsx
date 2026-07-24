import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { useStrkImages } from "@/lib/useStrkImages";
import { useRef } from "react";

// Stable, statically-known image id and query for the small cart line thumbnail.
// The build-time stock-image resolver cannot trace `line.product.images[0].imgId`
// because the data is hydrated at runtime from localStorage, so we use a
// hardcoded id + a query that references the product name (rendered into a
// stable, slug-derived element id) for context.
const CART_THUMB_IMG_ID = "cart-line-thumb-7f3a1b";
const CART_THUMB_QUERY = "[cart-line-name] [cart-eyebrow] [site-title]";

function CartLine({ line }) {
  const { updateQty, removeItem } = useCart();
  const ref = useRef(null);
  useStrkImages(ref, [line.product.slug]);

  return (
    <li ref={ref} className="flex gap-4 py-5 border-b border-ink-800/10 last:border-0">
      <Link to={`/product/${line.product.slug}`} className="block w-20 h-24 flex-shrink-0 overflow-hidden bg-ivory-100">
        <img
          alt={line.product.name}
          data-strk-img-id={CART_THUMB_IMG_ID}
          data-strk-img={CART_THUMB_QUERY}
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/product/${line.product.slug}`}
              className="product-name block truncate"
            >
              {line.product.name}
            </Link>
            <p className="mt-1 text-[11px] font-sans uppercase tracking-widest2 text-ink-500">
              {line.product.variants?.find((v) => v.id === line.variantId)?.label || "Gold"}
            </p>
          </div>
          <p className="font-sans text-[14px] text-ink-800 whitespace-nowrap">
            {formatPrice(line.lineTotal)}
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="inline-flex items-center border border-ink-800/15">
            <button
              type="button"
              onClick={() => updateQty(line.product.slug, line.variantId, line.qty - 1)}
              className="h-8 w-8 inline-flex items-center justify-center text-ink-800 hover:text-gold-500"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-8 text-center text-[13px] font-sans">{line.qty}</span>
            <button
              type="button"
              onClick={() => updateQty(line.product.slug, line.variantId, line.qty + 1)}
              className="h-8 w-8 inline-flex items-center justify-center text-ink-800 hover:text-gold-500"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(line.product.slug, line.variantId)}
            className="text-[11px] font-sans uppercase tracking-widest2 text-ink-500 hover:text-gold-500"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[80] ${isOpen ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink-900/40 transition-opacity duration-500 ease-luxe ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory-50 text-ink-800 shadow-soft transition-transform duration-500 ease-luxe ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Stable, build-time-visible text refs the cart line thumb query interpolates */}
        <span id="cart-line-name" className="sr-only">Velmora demi-fine gold jewelry cart item</span>
        <span id="cart-eyebrow" className="sr-only">Your Cart · Velmora Fine Jewelry</span>
        <div className="flex items-center justify-between border-b border-ink-800/10 px-6 py-5">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-9 w-9 items-center justify-center text-ink-800 hover:text-gold-500"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-ink-500" strokeWidth={1.2} />
            <p className="mt-6 font-serif text-2xl text-ink-800">Your cart is empty</p>
            <p className="mt-2 text-sm text-ink-500">Begin with a piece you'll wear on repeat.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary mt-8"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6">
              {items.map((line) => (
                <CartLine
                  key={`${line.product.slug}-${line.variantId}`}
                  line={line}
                />
              ))}
            </ul>
            <div className="border-t border-ink-800/10 bg-ivory-100 px-6 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="font-sans uppercase tracking-widest2 text-[11px] text-ink-500">
                  Subtotal
                </span>
                <span className="font-sans text-base text-ink-800">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-ink-500">
                Shipping & taxes calculated at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary mt-5 w-full"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center font-sans uppercase tracking-widest2 text-[11px] text-ink-500 hover:text-gold-500"
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
