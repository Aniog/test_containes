import React, { useEffect } from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext.jsx";
import Button from "@/components/ui/Button.jsx";
import Hairline from "@/components/ui/Hairline.jsx";
import { formatPrice } from "@/lib/utils.js";

const CartDrawer = () => {
  const { lines, isOpen, closeCart, updateQty, removeItem, summary } = useCart();

  // Lock body scroll when open
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
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-[60] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        className={`absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cream text-ink shadow-soft transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 h-16 border-b border-ink/10">
          <h2 className="font-sans uppercase tracking-wider2 text-[0.78rem]">
            Your bag ({summary.itemCount})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-2">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <p className="font-serif text-2xl text-ink">Your bag is empty</p>
              <p className="font-sans text-[0.92rem] text-mute mt-3 max-w-xs">
                Begin with a piece you'll reach for every day.
              </p>
              <Button
                variant="primary"
                size="md"
                className="mt-7"
                onClick={closeCart}
                as={Link}
                to="/shop"
              >
                Shop the collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-ink/10">
              {lines.map((line) => (
                <li key={line.key} className="py-5 flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 rounded-sm overflow-hidden">
                    {line.illustration}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="product-name text-[0.78rem] truncate">
                          {line.name}
                        </p>
                        {line.variant && (
                          <p className="font-sans text-[0.75rem] text-mute mt-1">
                            {line.variant}
                          </p>
                        )}
                      </div>
                      <p className="font-sans text-[0.92rem] text-ink whitespace-nowrap">
                        {formatPrice(line.price * line.qty)}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-ink/15 rounded-sm">
                        <button
                          type="button"
                          onClick={() => updateQty(line.key, line.qty - 1)}
                          className="w-8 h-8 inline-flex items-center justify-center hover:text-bronze"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-[0.85rem] font-sans">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(line.key, line.qty + 1)}
                          className="w-8 h-8 inline-flex items-center justify-center hover:text-bronze"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="text-mute hover:text-ink p-1"
                        aria-label={`Remove ${line.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="px-6 sm:px-8 py-6 border-t border-ink/10 bg-pearl">
            <div className="space-y-2 text-[0.92rem] font-sans">
              <div className="flex justify-between text-mute">
                <span>Subtotal</span>
                <span className="text-ink">{formatPrice(summary.subtotal)}</span>
              </div>
              <div className="flex justify-between text-mute">
                <span>Shipping</span>
                <span className="text-ink">
                  {summary.shipping === 0 ? "Free" : formatPrice(summary.shipping)}
                </span>
              </div>
            </div>
            <Hairline tone="ink" className="my-4" />
            <div className="flex justify-between items-baseline">
              <span className="font-sans uppercase tracking-wider2 text-[0.78rem] text-ink">
                Total
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(summary.total)}
              </span>
            </div>
            <Button variant="primary" size="full" className="mt-5">
              Checkout
            </Button>
            <p className="text-center mt-3 font-sans text-[0.75rem] text-mute">
              Free worldwide shipping on orders over $75
            </p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
