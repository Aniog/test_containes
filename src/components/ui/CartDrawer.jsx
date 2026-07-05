import React from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { cart, cartTotal, removeItem, updateQuantity } = useCart();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[hsl(var(--border))]/40">
            <h2 className="font-serif text-xl tracking-wider uppercase">
              Your Cart
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[hsl(var(--muted-foreground))] mb-4" />
                <p className="font-sans text-sm text-[hsl(var(--muted-foreground))]">
                  Your cart is empty
                </p>
              </div>
            ) : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li
                    key={`${item.id}-${item.material}`}
                    className="flex gap-4 pb-6 border-b border-[hsl(var(--border))]/20"
                  >
                    <div className="w-20 h-24 bg-[hsl(var(--muted))] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-[hsl(var(--muted-foreground))] mb-2 capitalize">
                        {item.material}
                      </p>
                      <p className="font-sans text-sm font-medium">
                        ${item.price}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.material, item.quantity - 1)
                          }
                          className="p-1 border border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))] transition-colors"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.material, item.quantity + 1)
                          }
                          className="p-1 border border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.material)}
                      className="p-1 hover:opacity-60 transition-opacity self-start"
                      aria-label={`Remove ${item.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-[hsl(var(--border))]/40 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between font-sans text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-[hsl(var(--muted-foreground))]">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">Checkout</button>
              <button
                onClick={onClose}
                className="w-full text-center font-sans text-xs text-[hsl(var(--muted-foreground))] underline underline-offset-2 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}