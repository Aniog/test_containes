import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import strkImgConfig from "@/strk-img-config.json";

function resolveImageUrl(imgId) {
  if (!imgId) return "";
  const entry = strkImgConfig[imgId];
  if (!entry) return "";
  return entry.picked?.url || entry.results?.[0]?.url || "";
}

function LineItemImage({ product }) {
  const [src, setSrc] = useState(() => resolveImageUrl(product.imgId));
  useEffect(() => {
    setSrc(resolveImageUrl(product.imgId));
  }, [product.imgId]);
  return (
    <div className="block h-24 w-24 flex-shrink-0 overflow-hidden bg-cream-200">
      {src ? (
        <img
          src={src}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-widest text-ink-50">
          {product.category}
        </div>
      )}
    </div>
  );
}

function QuantityStepper({ value, onChange }) {
  return (
    <div className="inline-flex items-center border border-hairline text-ink-300">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(value - 1)}
        className="h-8 w-8 text-ink-100 transition-colors hover:text-ink-300"
      >
        <Minus className="mx-auto h-3.5 w-3.5" strokeWidth={1.4} />
      </button>
      <span className="min-w-7 text-center text-sm tabular-nums">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        className="h-8 w-8 text-ink-100 transition-colors hover:text-ink-300"
      >
        <Plus className="mx-auto h-3.5 w-3.5" strokeWidth={1.4} />
      </button>
    </div>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCart();
  const closeRef = useRef(null);

  // Focus the close button when the drawer opens for keyboard users.
  useEffect(() => {
    if (isOpen) {
      const t = window.setTimeout(() => {
        closeRef.current?.focus();
      }, 80);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [isOpen]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (isOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 h-full w-full bg-ink-400/45"
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream-100 shadow-soft transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-4 w-4 text-ink-300" strokeWidth={1.4} />
            <h2 className="font-serif text-2xl text-ink-300">Your Bag</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-1 text-ink-300 transition-colors hover:text-gold-300"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="eyebrow text-muted">Your bag is empty</p>
              <p className="mt-4 max-w-xs font-serif text-2xl text-ink-300">
                Discover pieces to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline mt-8"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((line) => {
                const product = line.product;
                if (!product) return null;
                return (
                  <li
                    key={`${line.productId}-${line.tone}`}
                    className="flex gap-4"
                  >
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="block h-24 w-24 flex-shrink-0 overflow-hidden bg-cream-200"
                    >
                      <LineItemImage product={product} />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            id={product.titleId}
                            className="product-name text-sm text-ink-300"
                          >
                            {product.name}
                          </p>
                          <p
                            id={product.descId}
                            className="mt-1 text-xs text-ink-50"
                          >
                            {line.tone}
                          </p>
                        </div>
                        <p className="text-sm tabular-nums text-ink-300">
                          {formatPrice(line.price * line.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <QuantityStepper
                          value={line.quantity}
                          onChange={(q) =>
                            updateQuantity(line.productId, line.tone, q)
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            removeItem(line.productId, line.tone)
                          }
                          className="text-[11px] uppercase tracking-[0.22em] text-ink-50 link-underline hover:text-ink-300"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline bg-cream-50 px-6 py-6">
            <div className="flex items-baseline justify-between">
              <span className="eyebrow text-ink-50">Subtotal</span>
              <span className="font-serif text-2xl text-ink-300">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-2 text-xs text-ink-50">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              onClick={() => alert("Checkout coming soon — connect your payment provider here.")}
              className="btn-primary mt-5 w-full"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 block w-full text-center text-[11px] uppercase tracking-[0.24em] text-ink-50 link-underline hover:text-ink-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
