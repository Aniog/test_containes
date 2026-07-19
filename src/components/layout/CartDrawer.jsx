import React, { useEffect, useState } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import ProductImage from "@/components/product/ProductImage";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal } =
    useCart();
  const [renderOpen, setRenderOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // mount, then trigger transition
      requestAnimationFrame(() => setRenderOpen(true));
      document.body.style.overflow = "hidden";
    } else {
      setRenderOpen(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const shipping = subtotal > 0 ? 0 : 0; // free worldwide shipping
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-espresso/50 transition-opacity duration-500",
          renderOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-ivory text-espresso shadow-elevated flex flex-col transition-transform duration-500 ease-out",
          renderOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline shrink-0">
          <h2 className="font-serif text-xl">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center px-8 text-center">
              <ShoppingBag
                className="w-12 h-12 text-taupe mb-6"
                strokeWidth={1}
              />
              <p className="font-serif text-2xl mb-2">Your bag is empty</p>
              <p className="text-sm text-taupe mb-8 max-w-xs">
                Discover our bestsellers — each piece arrives in signature
                velvet packaging.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.tone}`}
                  className="flex gap-4 p-6"
                >
                  <div className="w-20 h-24 bg-sand shrink-0 overflow-hidden">
                    <ProductImage
                      imgId={item.imgId}
                      query={item.name}
                      ratio="3x4"
                      width={160}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-serif text-base tracking-widest2 truncate">
                          {item.name}
                        </p>
                        <p className="text-[11px] uppercase tracking-widest2 text-taupe mt-1">
                          {item.tone === "gold" ? "Gold" : "Silver"}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.tone)}
                        className="text-taupe hover:text-espresso text-xs uppercase tracking-widest2 shrink-0"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.tone,
                              item.quantity - 1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.tone,
                              item.quantity + 1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="font-serif text-base tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / summary */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-6 shrink-0 bg-ivoryLight">
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-taupe uppercase tracking-widest2 text-[11px]">
                Subtotal
              </span>
              <span className="font-serif text-lg tabular-nums">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-taupe mb-5">
              Free worldwide shipping · Taxes calculated at checkout
            </p>
            <button type="button" className="btn-primary w-full">
              Checkout · {formatPrice(total)}
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="btn-ghost w-full mt-3"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
