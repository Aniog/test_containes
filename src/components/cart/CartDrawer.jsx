import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext.jsx";
import { formatPrice } from "@/data/products.js";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, updateQuantity, removeItem } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const frameId = window.requestAnimationFrame(() => {
      if (drawerRef.current) {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 animate-overlay-in bg-ink/50 backdrop-blur-sm"
        onClick={closeCart}
      />
      <aside ref={drawerRef} className="absolute right-0 top-0 flex h-full w-full max-w-md animate-drawer-in flex-col bg-ivory shadow-2xl">
        <header className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <p className="font-serif text-xl font-semibold uppercase tracking-wide2 text-ink">
            Your Cart
          </p>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="text-espresso transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-sand" strokeWidth={1} />
            <p className="font-serif text-2xl text-espresso">Your cart is empty</p>
            <p className="text-sm text-taupe">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxe text-ivory transition-colors hover:bg-gold-dark"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-ink/10">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-5">
                    {item.imageSrc ? (
                      <img
                        alt={item.name}
                        src={item.imageSrc}
                        className="h-20 w-20 shrink-0 bg-cream object-cover"
                      />
                    ) : (
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.productId}`}
                        data-strk-img={`${item.tagline} ${item.name} gold jewelry product`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src={SVG_PLACEHOLDER}
                        className="h-20 w-20 shrink-0 bg-cream object-cover"
                      />
                    )}
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-serif text-base font-semibold uppercase tracking-wide2 text-ink">
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-xs text-taupe">
                            {item.variant} Tone
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-espresso">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-ink/15">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="px-3 py-1.5 text-espresso transition-colors hover:text-gold"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="min-w-8 text-center text-sm font-medium text-ink">
                            {item.quantity}
                          </span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="px-3 py-1.5 text-espresso transition-colors hover:text-gold"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          aria-label={`Remove ${item.name}`}
                          onClick={() => removeItem(item.key)}
                          className="text-taupe transition-colors hover:text-gold-dark"
                        >
                          <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="border-t border-ink/10 px-6 py-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-luxe text-espresso">
                  Subtotal
                </p>
                <p className="font-serif text-2xl font-semibold text-ink">
                  {formatPrice(subtotal)}
                </p>
              </div>
              <p className="mt-1 text-xs text-taupe">
                Free worldwide shipping · 30-day returns
              </p>
              <button className="mt-5 w-full bg-gold py-4 text-xs font-semibold uppercase tracking-luxe text-ivory transition-colors hover:bg-gold-dark">
                Proceed to Checkout
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
