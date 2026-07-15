import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import SmartImage, { ImageHelper, strkImgConfig } from "@/components/ui/SmartImage";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

const SHIPPING_FREE_THRESHOLD = 75;
const SHIPPING_FLAT = 8;

export default function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, removeItem, subtotal } =
    useCart();
  const [closing, setClosing] = useState(false);
  const containerRef = useRef(null);

  // Animate-out before unmount.
  useEffect(() => {
    if (isOpen) setClosing(false);
  }, [isOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Esc to close.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  // The drawer is a portal-style sibling of Layout's scanned subtree, so it
  // must trigger its own image scan whenever the cart lines change.
  useEffect(() => {
    if (!isOpen) return undefined;
    const node = containerRef.current;
    if (!node) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, lines.length]);

  if (!isOpen) return null;

  const remaining = Math.max(0, SHIPPING_FREE_THRESHOLD - subtotal);
  const progress = Math.min(
    1,
    subtotal / SHIPPING_FREE_THRESHOLD
  );
  const shipping = remaining > 0 ? SHIPPING_FLAT : 0;
  const total = subtotal + shipping;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping bag"
    >
      <div
        className="absolute inset-0 bg-ink/40 animate-fade-in"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[440px] bg-ivory",
          "shadow-drawer flex flex-col animate-drawer-in"
        )}
      >
        <header className="flex items-center justify-between px-6 h-16 border-b border-tan/50">
          <h2 className="font-serif text-xl text-ink">Your Bag</h2>
          <button
            type="button"
            aria-label="Close bag"
            onClick={closeCart}
            className="p-2 -mr-2 text-ink hover:text-gold-deep transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </header>

        {/* Free-shipping progress */}
        <div className="px-6 py-4 border-b border-tan/40">
          <p className="text-[12px] uppercase tracking-eyebrow text-mauve">
            {remaining > 0 ? (
              <>
                You're <span className="text-ink font-semibold price">{formatPrice(remaining)}</span> away from free shipping
              </>
            ) : (
              <span className="text-ink">You've unlocked free shipping</span>
            )}
          </p>
          <div className="mt-3 h-1 w-full bg-tan/50 overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-500"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center px-8 py-20">
              <ShoppingBag size={28} strokeWidth={1.2} className="text-mauve" />
              <p className="mt-6 font-serif text-2xl text-ink">
                Your bag is empty
              </p>
              <p className="mt-2 text-sm text-mauve max-w-xs">
                Discover our demi-fine favorites, ready to be worn the moment
                they arrive.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary mt-8"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="px-6 py-4 divide-y divide-tan/50">
              {lines.map((line) => {
                const product = line.product;
                const hero = product.images[0];
                return (
                  <li key={line.key} className="py-5 flex gap-4">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="block w-20 h-24 flex-shrink-0"
                    >
                      <SmartImage
                        alt={product.name}
                        query={hero.query}
                        ratio={hero.ratio}
                        width={200}
                        imgId={`product-${product.id}-hero`}
                        className="w-full h-full"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${product.id}`}
                            onClick={closeCart}
                            className="product-name text-ink hover:text-gold-deep transition-colors"
                          >
                            {product.name}
                          </Link>
                          <p className="text-[12px] text-mauve mt-1 capitalize">
                            {line.tone === "default" ? "Gold" : line.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${product.name}`}
                          onClick={() => removeItem(line.key)}
                          className="text-mauve hover:text-ink p-1 -m-1"
                        >
                          <X size={14} strokeWidth={1.4} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="inline-flex items-center border border-ink/20 h-9">
                          <button
                            type="button"
                            aria-label="Decrease"
                            onClick={() =>
                              updateQuantity(line.key, line.quantity - 1)
                            }
                            className="w-8 h-full flex items-center justify-center text-ink hover:bg-ink hover:text-ivory transition-colors"
                          >
                            <Minus size={12} strokeWidth={1.6} />
                          </button>
                          <span className="w-7 text-center text-sm price text-ink">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase"
                            onClick={() =>
                              updateQuantity(line.key, line.quantity + 1)
                            }
                            className="w-8 h-full flex items-center justify-center text-ink hover:bg-ink hover:text-ivory transition-colors"
                          >
                            <Plus size={12} strokeWidth={1.6} />
                          </button>
                        </div>
                        <span className="text-sm text-ink price">
                          {formatPrice(line.lineTotal)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="px-6 py-5 border-t border-tan/50 bg-ivory">
            <dl className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-mauve">Subtotal</dt>
                <dd className="text-ink price">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-mauve">Shipping</dt>
                <dd className="text-ink price">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </dd>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-tan/50">
                <dt className="text-ink text-[15px]">Total</dt>
                <dd className="text-ink text-[15px] price font-medium">
                  {formatPrice(total)}
                </dd>
              </div>
            </dl>
            <button type="button" className="btn-primary w-full mt-5">
              Checkout
            </button>
            <p className="mt-3 text-center text-[11px] text-mauve">
              Taxes calculated at checkout. Free returns within 30 days.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
