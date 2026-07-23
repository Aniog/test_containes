import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import strkImgConfig from "@/strk-img-config.json";
import { CartItemImage } from "./CartItemImage";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalItems } = useCart();
  const itemsRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !itemsRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, itemsRef.current);
  }, [isOpen, items]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-espresso/40 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl",
          "transform transition-transform duration-500 ease-luxury flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-6 border-b border-taupe">
          <h2 className="font-serif text-2xl text-espresso">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="w-12 h-12 text-taupe mb-4" />
            <p className="font-serif text-xl text-espresso mb-2">Your cart is empty</p>
            <p className="text-sm text-stone mb-6">Discover pieces crafted to be treasured.</p>
            <button
              type="button"
              onClick={closeCart}
              className="bg-gold text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-gold-dark transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div ref={itemsRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-sand flex-shrink-0 overflow-hidden">
                    <CartItemImage productId={item.id} name={item.name} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest text-espresso truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-stone capitalize mt-0.5">{item.variant} tone</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-stone hover:text-espresso transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-espresso mt-2">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-taupe text-espresso hover:border-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-taupe text-espresso hover:border-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-taupe bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-stone">Subtotal</span>
                <span className="font-serif text-xl text-espresso">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone mb-5 text-center">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-gold text-white py-4 uppercase text-xs tracking-widest hover:bg-gold-dark transition-colors"
              >
                Checkout — ${subtotal.toFixed(2)}
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full mt-3 text-center text-xs uppercase tracking-widest text-stone hover:text-espresso transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
