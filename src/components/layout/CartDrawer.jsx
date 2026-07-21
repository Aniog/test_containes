import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

function CartThumb({ product }) {
  switch (product.id) {
    case "vivid-aura-jewels":
      return (
        <img
          data-strk-img-id="cart-img-vivid-aura-jewels"
          data-strk-img="Vivid Aura Jewels gold ear cuff with crystal accent, studio still life on warm neutral silk"
          data-strk-img-ratio="3x4"
          data-strk-img-width="300"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      );
    case "majestic-flora-nectar":
      return (
        <img
          data-strk-img-id="cart-img-majestic-flora-nectar"
          data-strk-img="Majestic Flora Nectar multicolor floral crystal necklace, studio still life on warm neutral silk"
          data-strk-img-ratio="3x4"
          data-strk-img-width="300"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      );
    case "golden-sphere-huggies":
      return (
        <img
          data-strk-img-id="cart-img-golden-sphere-huggies"
          data-strk-img="Golden Sphere Huggies chunky gold dome huggie earrings, studio still life on warm neutral silk"
          data-strk-img-ratio="3x4"
          data-strk-img-width="300"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      );
    case "amber-lace-earrings":
      return (
        <img
          data-strk-img-id="cart-img-amber-lace-earrings"
          data-strk-img="Amber Lace Earrings textured gold filigree drop earrings, studio still life on warm neutral silk"
          data-strk-img-ratio="3x4"
          data-strk-img-width="300"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      );
    case "royal-heirloom-set":
      return (
        <img
          data-strk-img-id="cart-img-royal-heirloom-set"
          data-strk-img="Royal Heirloom Set gift-boxed gold earring and necklace set, studio still life on warm neutral silk"
          data-strk-img-ratio="3x4"
          data-strk-img-width="300"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      );
    default:
      return (
        <img
          data-strk-img-id="cart-img-generic-gold-jewelry"
          data-strk-img="elegant gold jewelry still life on warm neutral silk, soft editorial light"
          data-strk-img-ratio="3x4"
          data-strk-img-width="300"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      );
  }
}

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    lineItems,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isCartOpen) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isCartOpen, lineItems.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!isCartOpen}
    >
      <div className="absolute inset-0 bg-noir/50" onClick={closeCart} />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-[-24px_0_60px_-30px_rgba(23,19,16,0.4)] transition-transform duration-500 ease-out",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-line px-6 h-16 md:h-20">
          <h2 className="font-serif text-xl text-noir">
            Your Bag{" "}
            <span className="text-sm text-taupe">
              ({lineItems.reduce((n, i) => n + i.quantity, 0)})
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-noir transition-colors hover:text-gold"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {lineItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag size={36} strokeWidth={1} className="text-stone" />
            <p className="font-serif text-2xl text-noir">Your bag is empty</p>
            <p className="text-sm text-taupe">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-noir px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-espresso"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {lineItems.map((item) => (
                <div
                  key={`${item.productId}-${item.variant}`}
                  className="flex gap-4 border-b border-line py-5"
                >
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    className="block h-24 w-20 shrink-0 overflow-hidden bg-cream"
                  >
                    <CartThumb product={item.product} />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-noir transition-colors hover:text-gold"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-taupe">
                          {item.variant} tone
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.variant)}
                        aria-label={`Remove ${item.product.name}`}
                        className="p-1 text-stone transition-colors hover:text-noir"
                      >
                        <X size={15} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-2.5 py-1.5 text-noir transition-colors hover:text-gold"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.variant,
                              item.quantity - 1
                            )
                          }
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-xs font-medium text-noir">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-2.5 py-1.5 text-noir transition-colors hover:text-gold"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.variant,
                              item.quantity + 1
                            )
                          }
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-noir">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.22em] text-taupe">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-noir">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-xs text-taupe">
                Complimentary worldwide shipping · 30-day returns
              </p>
              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-goldlight"
              >
                Checkout <ArrowRight size={14} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs uppercase tracking-[0.22em] text-taupe underline-offset-4 transition-colors hover:text-noir hover:underline"
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
