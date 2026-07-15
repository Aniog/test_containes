import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StrkImage from "@/components/ui/StrkImage";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeItem, subtotal } = useCart();

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-cocoa/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-ivory shadow-lift flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-line/60">
          <h3 className="font-serif text-xl text-ink">Your Cart</h3>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 text-ink hover:opacity-70 transition-opacity"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
            <p className="font-serif text-2xl text-ink">Your cart is empty</p>
            <p className="text-sm text-muted max-w-xs">
              Begin with a best-loved piece, or browse the full edit.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary mt-2"
            >
              Shop the Edit
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-line/60">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-5">
                  <div className="w-20 h-24 bg-cocoa-soft overflow-hidden flex-shrink-0">
                    <StrkImage
                      imgId={`cart-${item.id}`}
                      query={item.query}
                      ratio="3x4"
                      width={200}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="product-name">{item.name}</p>
                        <p className="text-xs text-muted mt-1">{item.tone}</p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id)}
                        className="text-muted hover:text-ink p-1 -mt-1 -mr-1"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-ivory"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-ivory"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-serif text-base text-ink">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line/60 px-6 py-6 bg-parchment/40">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted uppercase tracking-[0.2em]">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-muted mt-2">
                Shipping and taxes calculated at checkout.
              </p>
              <button type="button" className="btn-primary w-full mt-5">
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-[12px] uppercase tracking-[0.22em] text-muted hover:text-ink py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
