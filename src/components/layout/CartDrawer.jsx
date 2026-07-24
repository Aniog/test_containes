import React, { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    shipping,
    total,
    setQuantity,
    removeFromCart,
    justAdded,
  } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer — kept mounted for smooth animation, but inert when closed */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] bg-cream-paper shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        aria-hidden={!isOpen}
        inert={!isOpen ? "" : undefined}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h3 className="font-serif text-2xl">Your Cart</h3>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {justAdded && items.length > 0 && (
          <div className="px-6 py-3 bg-cream-warm border-b border-hairline text-xs text-muted">
            <span className="text-ink">{justAdded}</span> added to your cart.
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-10 py-20">
              <ShoppingBag size={36} strokeWidth={1.2} className="text-muted" />
              <h4 className="font-serif text-2xl mt-6">Your cart is quiet</h4>
              <p className="text-sm text-muted mt-2">
                Discover something to treasure.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-primary mt-8"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 p-6">
                  <div className="w-20 h-24 bg-cream-warm overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="label-product text-ink">{item.name}</p>
                        {item.variant && (
                          <p className="text-xs text-muted mt-1">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-ink whitespace-nowrap">
                        ${(item.price * item.quantity).toFixed(0)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.key)}
                        className="text-xs text-muted hover:text-ink underline underline-offset-4"
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

        {items.length > 0 && (
          <div className="border-t border-hairline p-6 space-y-4 bg-cream">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span>${subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(0)}`}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-hairline font-medium text-base">
                <span>Total</span>
                <span>${total.toFixed(0)}</span>
              </div>
              {subtotal < 80 && (
                <p className="text-xs text-muted pt-1">
                  Add ${(80 - subtotal).toFixed(0)} more for free worldwide shipping.
                </p>
              )}
            </div>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="btn btn-primary w-full"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-muted hover:text-ink"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
