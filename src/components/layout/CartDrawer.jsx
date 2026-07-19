import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import { getStrkImageUrl } from "@/lib/imageUrl";

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();
  const product = getProductById(item.id);
  const imgId = `${item.id}-primary`;
  const resolvedSrc = getStrkImageUrl(imgId) || PLACEHOLDER_SRC;

  return (
    <li className="flex gap-4 py-5 border-b border-taupe last:border-b-0">
      <div className="w-20 h-24 md:w-24 md:h-28 bg-cream overflow-hidden flex-shrink-0 relative">
        {product && (
          <img
            alt={item.name}
            data-strk-img-id={imgId}
            data-strk-img={`[${item.id}-name] [${item.id}-desc]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src={resolvedSrc}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 id={`${item.id}-name`} className="product-name truncate">
              {item.name}
            </h3>
            {item.tone && (
              <p className="text-[11px] uppercase tracking-wider-2 text-mocha mt-1">
                {item.tone === "gold" ? "Gold Tone" : "Silver Tone"}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.variantKey)}
            aria-label={`Remove ${item.name}`}
            className="text-mocha hover:text-espresso transition-colors p-1 -m-1"
          >
            <X className="w-4 h-4" strokeWidth={1.4} />
          </button>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div className="inline-flex items-center border border-taupe">
            <button
              type="button"
              onClick={() => updateQuantity(item.variantKey, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="w-8 h-8 grid place-items-center hover:bg-cream transition-colors"
            >
              <Minus className="w-3 h-3" strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(item.variantKey, item.quantity + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 grid place-items-center hover:bg-cream transition-colors"
            >
              <Plus className="w-3 h-3" strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-serif text-lg">${(item.price * item.quantity).toFixed(0)}</span>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, summary } = useCart();

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  const drawerRef = useRef(null);

  useEffect(() => {
    if (!drawerRef.current || items.length === 0) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [items.length, items.map((i) => i.id).join("|")]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-espresso/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping cart"
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-ivory text-espresso shadow-2xl transition-transform duration-400 ease-out-soft flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
          <h2 className="font-serif text-2xl">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 hover:opacity-70"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 grid place-items-center text-center px-8">
            <div>
              <ShoppingBag
                className="w-10 h-10 mx-auto mb-5 text-mocha"
                strokeWidth={1.2}
              />
              <p className="font-serif text-2xl mb-2">Your bag is empty</p>
              <p className="text-sm text-mocha mb-8">
                Pieces worth keeping are waiting.
              </p>
              <Link to="/shop" onClick={closeCart} className="btn-primary">
                Shop the Collection
              </Link>
            </div>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6">
              {items.map((item) => (
                <CartItem key={item.variantKey} item={item} />
              ))}
            </ul>
            <div className="px-6 py-6 border-t border-taupe bg-ivory">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-mocha uppercase tracking-wider-2">
                  Subtotal
                </span>
                <span className="font-serif text-2xl">
                  ${summary.subtotal.toFixed(0)}
                </span>
              </div>
              <p className="text-xs text-mocha mb-5">
                Shipping and taxes calculated at checkout.
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
                className="w-full mt-3 text-center text-[12px] uppercase tracking-wider-2 text-mocha hover:text-espresso py-2 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
