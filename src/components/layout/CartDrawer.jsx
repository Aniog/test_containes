import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import strkImgConfig from "@/strk-img-config.json";

const TONE_LABEL = { gold: "Gold Tone", silver: "Silver Tone" };

function LineRow({ item }) {
  const { setQuantity, removeFromCart } = useCart();
  const product = getProductById(item.id);
  // Cart thumbnails share a single static placeholder image since the cart
  // line items are dynamic and the stock image system needs a static ID.
  // The placeholder is registered via the data-strk-img-id below and
  // resolved by ImageHelper at runtime.
  return (
    <li className="flex gap-4 border-b border-hairline py-5">
      <Link
        to={`/product/${item.id}`}
        className="relative block h-24 w-20 flex-shrink-0 overflow-hidden bg-bone"
      >
        <img
          alt={item.name}
          data-strk-img-id="cart-line-thumb"
          data-strk-img="[cart-line-tone-label] [cart-line-product-name] gold jewelry on warm cream linen editorial"
          data-strk-img-ratio="3x4"
          data-strk-img-width="240"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              to={`/product/${item.id}`}
              id="cart-line-product-name"
              className="font-serif text-[13px] uppercase tracking-[0.22em] text-ink hover:text-gold"
            >
              {item.name}
            </Link>
            <p id="cart-line-tone-label" className="mt-1 font-sans text-[11px] tracking-[0.18em] uppercase text-taupe">
              {TONE_LABEL[item.tone] || item.tone}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(item.lineId)}
            aria-label={`Remove ${item.name}`}
            className="text-taupe transition-colors hover:text-ink"
          >
            <X className="h-4 w-4" strokeWidth={1.25} />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center border border-hairline">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity(item.lineId, item.quantity - 1)}
              className="p-2 text-ink transition-colors hover:text-gold"
            >
              <Minus className="h-3 w-3" strokeWidth={1.5} />
            </button>
            <span className="w-7 text-center font-sans text-[12px] text-ink">{item.quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity(item.lineId, item.quantity + 1)}
              className="p-2 text-ink transition-colors hover:text-gold"
            >
              <Plus className="h-3 w-3" strokeWidth={1.5} />
            </button>
          </div>
          <p className="font-sans text-[13px] tracking-wide text-ink">
            ${(item.price * item.quantity).toFixed(0)}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, totals } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  useEffect(() => {
    if (!isOpen) return;
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items]);

  return (
    <div
      aria-hidden={!isOpen}
      className={[
        "fixed inset-0 z-[100]",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={[
          "absolute inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ease-editorial",
          isOpen ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
      {/* Panel */}
      <aside
        ref={containerRef}
        role="dialog"
        aria-label="Shopping bag"
        className={[
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream text-ink shadow-soft transition-transform duration-500 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl tracking-[0.22em] uppercase">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close bag"
            className="text-ink transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-taupe" strokeWidth={1} />
            <div>
              <p className="font-serif text-2xl text-ink">Your bag is empty</p>
              <p className="mt-2 font-sans text-[13px] text-taupe">
                Discover pieces made to be worn everyday.
              </p>
            </div>
            <Link to="/shop" onClick={closeCart} className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6">
              {items.map((item) => (
                <LineRow key={item.lineId} item={item} />
              ))}
            </ul>
            <div className="border-t border-hairline px-6 py-6">
              <div className="flex items-center justify-between font-sans text-[13px] text-ink">
                <span className="tracking-[0.18em] uppercase">Subtotal</span>
                <span className="font-medium">${totals.subtotal.toFixed(0)}</span>
              </div>
              <p className="mt-2 font-sans text-[11px] tracking-wide text-taupe">
                Shipping & taxes calculated at checkout
              </p>
              <button
                type="button"
                className="btn-primary mt-5 w-full"
                onClick={() => alert("Checkout would go here. Hook up your provider of choice.")}
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center font-sans text-[11px] tracking-[0.28em] uppercase text-ink/70 transition-colors hover:text-ink"
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
