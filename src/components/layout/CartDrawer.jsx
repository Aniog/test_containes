import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

function CartLine({ line, onInc, onDec, onRemove }) {
  const { product } = line;
  if (!product) return null;
  return (
    <li className="flex gap-4 py-6 border-b border-hairline last:border-b-0">
      <Link
        to={`/product/${product.id}`}
        className="block w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 overflow-hidden bg-ivory-200"
        aria-label={`View ${product.name}`}
      >
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="240"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex justify-between items-start gap-3">
          <div>
            <Link
              to={`/product/${product.id}`}
              className="product-name text-[11px] block hover:text-gold-400 transition-colors"
            >
              {product.name}
            </Link>
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-espresso-500">
              {line.tone === "gold" ? "Gold" : "Silver"}
            </p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="text-espresso-500 hover:text-espresso-900 transition-colors p-1 -mt-1 -mr-1"
            aria-label={`Remove ${product.name}`}
          >
            <Trash2 size={15} strokeWidth={1.4} />
          </button>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div className="inline-flex items-center border border-hairline">
            <button
              type="button"
              onClick={onDec}
              className="w-8 h-8 inline-flex items-center justify-center text-espresso-700 hover:bg-ivory-200 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-sm tabular-nums">{line.quantity}</span>
            <button
              type="button"
              onClick={onInc}
              className="w-8 h-8 inline-flex items-center justify-center text-espresso-700 hover:bg-ivory-200 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <p className="text-sm font-medium tabular-nums text-espresso-900">
            {formatPrice(product.price * line.quantity)}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const { lines, isOpen, closeCart, subtotal, updateQuantity, removeLine } = useCart();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  // Defer mount so we can run exit animation
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      const t = setTimeout(() => setMounted(false), 400);
      document.body.style.overflow = "";
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Resolve cart line thumbnails on every open (the drawer's DOM is not in the initial scan)
  useEffect(() => {
    if (!mounted) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [mounted, lines.length]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") closeCart(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping bag"
    >
      {/* Backdrop */}
      <div
        className={
          "absolute inset-0 bg-espresso-900/40 backdrop-blur-[2px] transition-opacity duration-300 " +
          (isOpen ? "opacity-100" : "opacity-0")
        }
        onClick={closeCart}
        aria-hidden="true"
      />
      {/* Panel */}
      <aside
        className={
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-ivory-50 shadow-drawer flex flex-col transition-transform duration-500 ease-elegant " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div>
            <p className="eyebrow">Your bag</p>
            <h2 className="font-serif text-2xl mt-0.5 text-espresso-900">
              {lines.length === 0 ? "Empty for now" : `${lines.length} ${lines.length === 1 ? "piece" : "pieces"}`}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="text-espresso-700 hover:text-espresso-900 p-2"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-2xl text-espresso-900">A quiet bag, waiting.</p>
            <p className="mt-3 text-sm text-espresso-500 max-w-xs">
              Begin with a piece you'll wear forever — earrings, a necklace, or a pair of huggies.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary mt-8"
            >
              Shop the collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6">
              {lines.map((line) => (
                <CartLine
                  key={line.key}
                  line={line}
                  onInc={() => updateQuantity(line.key, line.quantity + 1)}
                  onDec={() => updateQuantity(line.key, line.quantity - 1)}
                  onRemove={() => removeLine(line.key)}
                />
              ))}
            </ul>
            <div className="border-t border-hairline px-6 py-6 space-y-4 bg-ivory-100">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-[0.22em] text-[11px] text-espresso-500">Subtotal</span>
                <span className="font-medium tabular-nums text-espresso-900">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-espresso-500">
                Shipping & taxes calculated at checkout
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
                className="link-underline w-full justify-center"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
