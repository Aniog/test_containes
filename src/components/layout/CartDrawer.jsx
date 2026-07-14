import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import ProductImage from "@/components/ui/ProductImage";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } =
    useCart();
  const containerRef = useRef(null);

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
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping bag"
    >
      <div className="absolute inset-0 bg-espresso/40" onClick={closeCart} />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-ivory shadow-drawer flex flex-col transition-transform duration-500 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-2xl">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:opacity-70"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </header>

        <div ref={containerRef} className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <p className="font-serif text-2xl text-espresso">
                Your bag is empty
              </p>
              <p className="mt-3 text-sm text-ash max-w-[260px]">
                A good piece of jewelry is rarely an impulse. Take your time.
              </p>
              <Link to="/shop" onClick={closeCart} className="btn-primary mt-8">
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => {
                const productLike = {
                  imgId: item.imgId,
                  nameId: item.nameId,
                  descId: item.nameId,
                  name: item.name,
                };
                return (
                  <li
                    key={item.lineKey}
                    className="flex gap-4 pb-6 border-b border-line last:border-b-0"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="block w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0"
                    >
                      <ProductImage
                        product={productLike}
                        ratio="4x5"
                        width={240}
                        imgIdSuffix="cart"
                        className="w-full h-full"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            onClick={closeCart}
                            className="product-name text-[12px] sm:text-[13px] block"
                          >
                            {item.name}
                          </Link>
                          {item.variant && (
                            <p className="mt-1 text-[11px] tracking-wide text-ash">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.lineKey)}
                          aria-label={`Remove ${item.name}`}
                          className="text-ash hover:text-espresso p-1 -mt-1"
                        >
                          <Trash2 size={15} strokeWidth={1.4} />
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-ash">
                        {formatPrice(item.price)}
                      </p>
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.lineKey, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                            className="h-8 w-8 flex items-center justify-center hover:bg-sand"
                          >
                            <Minus size={13} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.lineKey, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                            className="h-8 w-8 flex items-center justify-center hover:bg-sand"
                          >
                            <Plus size={13} strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="text-sm text-espresso tabular-nums">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-line px-6 py-6 bg-cream">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-ash tracking-wide">Subtotal</span>
              <span className="font-serif text-xl text-espresso tabular-nums">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-ash mb-5">
              Shipping & taxes calculated at checkout.
            </p>
            <button type="button" className="btn-primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full text-center mt-3 text-[11px] tracking-widest2 uppercase text-ash hover:text-espresso transition"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
