import React, { useEffect, useRef } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-foreground/60" />
            <span className="font-sans text-sm font-medium uppercase tracking-[0.08em] text-foreground/60">
              Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={onClose}
            className="transition-colors hover:text-foreground/60"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingBag className="mb-4 h-10 w-10 text-foreground/20" />
              <p className="font-sans text-sm text-foreground/40">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 animate-slide-up"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="product-name text-xs font-medium">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-foreground/30 transition-colors hover:text-destructive"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="mt-0.5 font-sans text-xs text-foreground/50">
                        {item.variant}
                      </p>
                      <p className="mt-1 font-sans text-sm font-medium">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity - 1)
                        }
                        className="flex h-7 w-7 items-center justify-center border border-border transition-colors hover:bg-muted"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-[1.5rem] text-center font-sans text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        className="flex h-7 w-7 items-center justify-center border border-border transition-colors hover:bg-muted"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-sans text-sm uppercase tracking-[0.08em] text-foreground/60">
                Subtotal
              </span>
              <span className="font-serif text-xl font-medium">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="mb-4 text-center font-sans text-xs text-foreground/40">
              Free Worldwide Shipping on orders over $75
            </p>
            <button className="btn-primary w-full text-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}