import { useEffect, useRef } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { IMG_PLACEHOLDER } from "@/lib/placeholder";
import Button from "@/components/Button";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, setQuantity, subtotal, count } = useCart();
  const panelRef = useRef(null);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  // Re-scan images when items change
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, panelRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        className="absolute right-0 top-0 h-full w-full sm:w-[440px] bg-ivory text-ink drawer-in flex flex-col shadow-[0_8px_30px_rgb(26,22,18,0.12)]"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl tracking-wide">
            Your Bag <span className="text-taupe text-base">({count})</span>
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={closeCart}
            className="hover:text-champagne transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <ShoppingBag size={32} strokeWidth={1} className="text-taupe mb-4" />
              <p className="font-serif text-2xl mb-2">Your bag is empty</p>
              <p className="text-sm text-taupe mb-8 max-w-xs">
                Start the search for your next treasure.
              </p>
              <Button as={Link} to="/shop" onClick={closeCart} variant="primary">
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="w-20 h-24 flex-shrink-0 bg-sand overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-item-${item.id}-c9`}
                      data-strk-img={`[cart-item-${item.id}-name]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={IMG_PLACEHOLDER}
                      className="w-full h-full object-cover bg-sand"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        id={`cart-item-${item.id}-name`}
                        className="text-[11px] uppercase tracking-[0.18em] font-medium text-ink hover:text-champagne transition-colors block leading-snug"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        aria-label="Remove"
                        onClick={() => removeItem(item.key)}
                        className="text-taupe hover:text-ink transition-colors"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-xs text-taupe mt-1">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-cream transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-xs">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-cream transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.22em] text-taupe">Subtotal</span>
              <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-taupe">
              Shipping and taxes calculated at checkout. Free worldwide shipping included.
            </p>
            <Button variant="primary" size="lg" className="w-full">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full text-center text-xs uppercase tracking-[0.22em] text-taupe hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
