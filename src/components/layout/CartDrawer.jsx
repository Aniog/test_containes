import { Fragment } from "react";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { isOpen, closeDrawer, items, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeDrawer} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--color-border-soft)] px-5 py-4">
          <p className="eyebrow">Your Cart</p>
          <button type="button" onClick={closeDrawer} className="p-2" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="text-sm text-[var(--color-ink-secondary)]">Your cart is empty.</p>
              <button type="button" onClick={closeDrawer} className="btn-outline">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.material}`} className="flex gap-4">
                  <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-sm bg-[var(--color-surface-alt)]">
                    <img
                      src={item.images?.[item.material]?.[0] || item.images?.gold?.[0]}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="product-name text-[0.85rem]">{item.name}</p>
                        <p className="mt-1 text-xs text-[var(--color-ink-secondary)] capitalize">{item.material}</p>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id, item.material)} className="p-1" aria-label="Remove">
                        <X className="h-4 w-4 text-[var(--color-ink-muted)]" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-[1.5rem] text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--color-border-soft)] px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--color-ink-secondary)]">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-[var(--color-ink-muted)]">Shipping and taxes calculated at checkout.</p>
            <button type="button" className="btn-primary mt-4 w-full">
              Checkout
            </button>
            <button type="button" onClick={closeDrawer} className="btn-outline mt-2 w-full">
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
