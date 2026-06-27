import React from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, setQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div
      className={cn("fixed inset-0 z-50", isOpen ? "pointer-events-auto" : "pointer-events-none")}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={cn(
          "absolute inset-0 bg-[var(--color-ink)]/55 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-[var(--color-bone)]",
          "flex flex-col shadow-2xl",
          "transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 h-16 sm:h-20 border-b border-[var(--color-line)]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-[var(--color-ink)]" />
            <h2 className="font-sans text-[0.75rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)]">
              Your Cart
            </h2>
            <span className="text-xs text-[var(--color-stone)]">({items.length})</span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-[var(--color-ink)] hover:text-[var(--color-gold-deep)] transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center px-8 text-center gap-5">
              <div className="w-16 h-16 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-stone)]">
                <ShoppingBag size={22} strokeWidth={1.2} />
              </div>
              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)] mb-2">Your cart is empty</p>
                <p className="text-sm text-[var(--color-stone)] max-w-xs">
                  Discover pieces designed to be worn — and treasured — every day.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 font-sans text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-ink)] link-underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--color-line)]">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 p-6 sm:p-8">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="block w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 bg-[var(--color-cream)] overflow-hidden"
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-sans text-[0.72rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)] hover:text-[var(--color-gold-deep)] transition-colors"
                        >
                          {item.name}
                        </Link>
                        {item.variant && (
                          <p className="text-xs text-[var(--color-stone)] mt-1">
                            {item.variant.label}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[var(--color-stone)] hover:text-[var(--color-ink)] transition-colors p-1 -mr-1"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center border border-[var(--color-line)]">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm text-[var(--color-ink)]">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / checkout */}
        {items.length > 0 && (
          <div className="border-t border-[var(--color-line)] p-6 sm:p-8 bg-[var(--color-bone)]">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-stone)]">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-[var(--color-ink)]">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-[var(--color-stone)] mb-5 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="block w-full text-center h-12 leading-[3rem] bg-[var(--color-ink)] text-[var(--color-bone)] uppercase tracking-eyebrow text-[0.72rem] font-medium hover:bg-[var(--color-ink-soft)] transition-colors"
            >
              Checkout
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full mt-3 text-center font-sans text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-stone)] hover:text-[var(--color-ink)] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}