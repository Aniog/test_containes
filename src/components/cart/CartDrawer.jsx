import React from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import ProductImage from "@/components/product/ProductImage";

export default function CartDrawer() {
  const { items, isOpen, closeCart, summary, setQuantity, removeItem } = useCart();

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-cocoa-900/50 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "absolute top-0 right-0 bottom-0 w-full sm:w-[440px] bg-cream-50 shadow-soft flex flex-col transition-transform duration-500 ease-luxury",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-cream-200">
          <p className="eyebrow">Your Bag · {summary.count}</p>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-ink-900 hover:text-gold-600 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center px-8 py-20">
              <div className="w-14 h-14 rounded-full bg-cream-100 flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-ink-700" strokeWidth={1.4} />
              </div>
              <h3 className="font-serif text-[28px] text-ink-900 mb-2">
                Your bag is empty
              </h3>
              <p className="text-sm text-ink-700 mb-8 max-w-xs">
                Begin a collection — or gift someone you love.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline"
              >
                Shop the collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-cream-200">
              {items.map((line) => (
                <li key={line.key} className="flex gap-4 px-6 py-5">
                  <Link
                    to={`/product/${line.productId}`}
                    onClick={closeCart}
                    className="relative w-20 h-24 bg-cream-100 shrink-0 overflow-hidden"
                  >
                    <ProductImage
                      artwork={line.artwork}
                      tone={line.tone}
                      variant={line.variant === "silver" ? 1 : 0}
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          to={`/product/${line.productId}`}
                          onClick={closeCart}
                          className="product-name hover:text-gold-600 transition-colors"
                        >
                          {line.name}
                        </Link>
                        <p className="mt-1 text-xs text-ink-700">
                          {line.subtitle}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-btn text-ink-700/70">
                          {line.variant === "silver" ? "Sterling Silver" : "18K Gold"}
                        </p>
                      </div>
                      <p className="text-sm text-ink-900 font-medium whitespace-nowrap">
                        {formatPrice(line.price * line.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-cream-200">
                        <button
                          type="button"
                          onClick={() => setQuantity(line.key, line.quantity - 1)}
                          className="w-8 h-8 inline-flex items-center justify-center text-ink-700 hover:text-ink-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink-900" aria-live="polite">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(line.key, line.quantity + 1)}
                          className="w-8 h-8 inline-flex items-center justify-center text-ink-700 hover:text-ink-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="text-[11px] uppercase tracking-btn text-ink-700 hover:text-ink-900 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Summary */}
        {items.length > 0 ? (
          <div className="border-t border-cream-200 px-6 py-6 bg-cream-50">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-ink-700">
                <span>Subtotal</span>
                <span className="text-ink-900">{formatPrice(summary.subtotal)}</span>
              </div>
              <div className="flex justify-between text-ink-700">
                <span>Shipping</span>
                <span className="text-ink-900">
                  {summary.shipping === 0 ? "Free" : formatPrice(summary.shipping)}
                </span>
              </div>
              {summary.subtotal < 75 ? (
                <p className="text-[11px] text-ink-700/80 pt-1">
                  Add {formatPrice(75 - summary.subtotal)} for free worldwide shipping.
                </p>
              ) : null}
            </div>
            <div className="mt-4 pt-4 border-t border-cream-200 flex justify-between items-baseline">
              <span className="eyebrow">Total</span>
              <span className="font-serif text-[24px] text-ink-900">
                {formatPrice(summary.total)}
              </span>
            </div>
            <button
              type="button"
              className="btn-primary w-full mt-5"
              onClick={() => {
                // Placeholder for real checkout integration.
                alert("Checkout coming soon — this is a preview build.");
              }}
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-3 text-[11px] uppercase tracking-btn text-ink-700 hover:text-ink-900 transition-colors py-2"
            >
              Continue shopping
            </button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
