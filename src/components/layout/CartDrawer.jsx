import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatPrice, cn } from "../../lib/utils";
import { getProductById } from "../../data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

function CartLine({ line, onUpdate, onRemove }) {
  const { product, variant, qty, key, lineTotal } = line;
  const productRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, productRef.current);
  }, [key, product.id]);

  return (
    <li
      ref={productRef}
      className="flex gap-4 py-6 border-b border-sand last:border-b-0"
    >
      <div className="w-20 h-24 md:w-24 md:h-28 bg-champagne overflow-hidden flex-shrink-0">
        <img
          alt={product.name}
          data-strk-img-id="cart-line-img"
          data-strk-img="[cart-line-anchor] demi-fine gold jewelry editorial"
          data-strk-img-ratio="4x5"
          data-strk-img-width="320"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              to={`/product/${product.id}`}
              className="product-name block hover:text-gold-deep transition-colors duration-300"
            >
              {product.name}
            </Link>
            <p
              id="cart-line-anchor"
              className="mt-1 font-sans text-[11px] uppercase tracking-widest2 text-ink-soft"
            >
              {variant.label}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRemove(key)}
            aria-label={`Remove ${product.name}`}
            className="text-ink-soft hover:text-espresso transition-colors duration-300"
          >
            <X className="h-4 w-4" strokeWidth={1.4} />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center border border-sand">
            <button
              type="button"
              onClick={() => onUpdate(key, qty - 1)}
              aria-label="Decrease quantity"
              className="w-8 h-8 grid place-items-center text-espresso hover:bg-sand/40 transition-colors duration-300"
            >
              <Minus className="h-3 w-3" strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-sans text-xs">{qty}</span>
            <button
              type="button"
              onClick={() => onUpdate(key, qty + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 grid place-items-center text-espresso hover:bg-sand/40 transition-colors duration-300"
            >
              <Plus className="h-3 w-3" strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-sans text-sm text-espresso">
            {formatPrice(lineTotal)}
          </span>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    detailedLines,
    subtotal,
    count,
    updateQty,
    removeItem,
  } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-500 ease-out-soft",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-espresso/50 transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={closeCart}
      />
      <aside
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute right-0 top-0 h-full w-full sm:w-[420px] bg-ivory shadow-soft-lg flex flex-col transition-transform duration-500 ease-out-soft",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide text-espresso">
            Your Bag
            <span className="ml-2 font-sans text-xs uppercase tracking-widest2 text-ink-soft align-middle">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close bag"
            className="text-espresso hover:text-gold-deep transition-colors duration-300"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {detailedLines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-14 h-14 rounded-full border border-sand grid place-items-center text-gold-deep">
                <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
              </div>
              <p className="mt-6 font-serif text-2xl text-espresso">
                Your bag is empty
              </p>
              <p className="mt-2 font-sans text-sm text-ink-soft max-w-xs">
                Discover pieces crafted to be treasured — start with our
                bestsellers.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline mt-6"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul>
              {detailedLines.map((line) => (
                <CartLine
                  key={line.key}
                  line={line}
                  onUpdate={updateQty}
                  onRemove={removeItem}
                />
              ))}
            </ul>
          )}
        </div>

        {detailedLines.length > 0 && (
          <div className="px-6 py-6 border-t border-sand bg-champagne/40">
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink-soft">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="font-sans text-[11px] text-ink-soft">
              Shipping and taxes calculated at checkout.
            </p>
            <button type="button" className="btn-primary w-full mt-5">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center font-sans text-[11px] uppercase tracking-widest2 text-ink-soft hover:text-espresso transition-colors duration-300"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
