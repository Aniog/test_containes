import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import { toast } from "sonner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { formatPrice, getProduct } from "@/data/products";
import StrkImage from "@/components/StrkImage";
import { cn } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 75;

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, closeCart, removeItem, updateQuantity } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && closeCart();
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isCartOpen, closeCart]);

  useEffect(() => {
    if (!isCartOpen) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isCartOpen, items]);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div
      className={cn("fixed inset-0 z-[60]", !isCartOpen && "pointer-events-none")}
      aria-hidden={!isCartOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-noir/70 backdrop-blur-sm transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />

      <aside
        ref={drawerRef}
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-noir-line bg-noir-soft shadow-2xl transition-transform duration-500 ease-out",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-noir-line px-6 py-5">
          <h2 className="font-serif text-lg font-medium uppercase tracking-[0.2em] text-cream">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="inline-flex h-9 w-9 items-center justify-center text-cream/80 transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free shipping progress */}
        <div className="border-b border-noir-line px-6 py-4">
          <p className="flex items-center gap-2 text-xs text-sand">
            <Truck className="h-4 w-4 text-gold" />
            {remaining > 0 ? (
              <span>
                You're <span className="font-semibold text-gold">{formatPrice(remaining)}</span> away
                from free shipping
              </span>
            ) : (
              <span className="text-gold">Your order ships free, worldwide.</span>
            )}
          </p>
          <div className="mt-2.5 h-px w-full bg-noir-line">
            <div
              className="h-px bg-gold transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-10 w-10 text-gold/50" />
              <p className="font-serif text-xl italic text-cream/90">Your cart is empty</p>
              <p className="max-w-60 text-xs leading-relaxed text-sand">
                Discover demi-fine pieces crafted to be treasured every day.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-2 border border-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-luxe text-gold transition-colors duration-300 hover:bg-gold hover:text-noir"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-noir-line">
              {items.map((item) => {
                const product = getProduct(item.productId);
                const titleId = `cart-${item.key}-title`;
                const taglineId = `cart-${item.key}-tagline`;
                return (
                  <li key={item.key} className="flex gap-4 py-5">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="block h-24 w-20 shrink-0 overflow-hidden rounded-sm border border-noir-line bg-noir"
                    >
                      <StrkImage
                        imgId={`cart-img-${item.key}`}
                        query={`[${taglineId}] [${titleId}] warm gold jewelry product photography on dark neutral background`}
                        ratio="4x5"
                        width={300}
                        alt={item.name}
                      />
                    </Link>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${item.productId}`}
                            onClick={closeCart}
                            id={titleId}
                            className="font-serif text-sm font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:text-gold"
                          >
                            {item.name}
                          </Link>
                          <p id={taglineId} className="mt-0.5 text-[11px] text-sand">
                            {item.tagline}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-widest text-sand">
                            {item.variant} tone
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-gold">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-noir-line">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center text-cream/80 transition-colors hover:text-gold"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold text-cream">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center text-cream/80 transition-colors hover:text-gold"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          className="text-[11px] uppercase tracking-widest text-sand underline-offset-4 transition-colors hover:text-gold hover:underline"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-noir-line px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-luxe text-sand">Subtotal</span>
              <span className="font-serif text-xl font-medium text-cream">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-sand">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 text-[11px] font-bold uppercase tracking-luxe text-noir transition-colors duration-300 hover:bg-gold-deep"
              onClick={() =>
                toast.info("Checkout is coming soon", {
                  description:
                    "This preview showcases the storefront experience — connect a payment provider to go live.",
                })
              }
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-widest text-sand transition-colors hover:text-gold"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
