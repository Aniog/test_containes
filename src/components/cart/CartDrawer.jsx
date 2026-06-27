import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-velmora-dark/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-cream shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-velmora-border px-6 py-5">
            <h2
              id="cart-heading"
              className="font-serif text-2xl font-medium tracking-wide"
            >
              Your Bag ({itemCount})
            </h2>
            <button
              onClick={closeCart}
              className="rounded-full p-2 transition-colors hover:bg-velmora-stone"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="mb-4 h-12 w-12 text-velmora-gold" strokeWidth={1.2} />
              <p className="font-serif text-xl">Your bag is empty</p>
              <p className="mt-2 text-sm text-velmora-muted">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 bg-velmora-dark px-8 py-3 text-sm font-medium uppercase tracking-widest text-velmora-cream transition-colors hover:bg-velmora-charcoal"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="relative block h-24 w-24 shrink-0 overflow-hidden bg-velmora-stone"
                      >
                        <img
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            onClick={closeCart}
                            className="product-name block text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1 text-xs capitalize text-velmora-muted">
                            {item.variant} tone
                          </p>
                          <p className="mt-1 text-sm font-medium">
                            {formatPrice(item.price)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-velmora-border">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.variant, item.quantity - 1)
                              }
                              className="px-3 py-1 transition-colors hover:bg-velmora-stone"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="min-w-[1.5rem] text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.variant, item.quantity + 1)
                              }
                              className="px-3 py-1 transition-colors hover:bg-velmora-stone"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-xs uppercase tracking-wider text-velmora-muted underline-offset-4 transition-colors hover:text-velmora-dark hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-velmora-border px-6 py-6">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-velmora-muted">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="mb-5 text-xs text-velmora-muted">
                  Shipping & taxes calculated at checkout.
                </p>
                <button className="w-full bg-velmora-gold py-4 text-sm font-semibold uppercase tracking-widest text-velmora-dark transition-colors hover:bg-velmora-gold-hover">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
