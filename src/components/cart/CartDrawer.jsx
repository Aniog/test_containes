import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

export default function CartDrawer() {
  const { items, isOpen, totalPrice, totalItems, closeCart, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 shadow-2xl",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-serif text-xl text-text-primary">Your Cart ({totalItems})</h2>
            <button
              onClick={closeCart}
              className="p-1 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-border mb-4" />
                <p className="font-serif text-lg text-text-primary mb-2">Your cart is empty</p>
                <p className="text-sm text-text-secondary mb-6">
                  Discover our collection of fine jewelry
                </p>
                <Button variant="secondary" size="sm" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 py-4 border-b border-border-light"
                  >
                    {/* Product image */}
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-muted to-surface-alt rounded flex-shrink-0 overflow-hidden" />

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-widest-xl text-text-primary truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-text-tertiary mt-0.5">{item.variantLabel}</p>
                      <p className="text-sm font-medium text-text-primary mt-1">
                        {formatPrice(item.price)}
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm text-text-primary w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-text-tertiary hover:text-error transition-colors uppercase tracking-wider"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-border bg-surface">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-text-secondary">Subtotal</span>
                <span className="font-medium text-text-primary">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-text-tertiary mb-4">
                Shipping & taxes calculated at checkout
              </p>
              <Button variant="primary" size="full">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-xs text-text-secondary hover:text-gold transition-colors uppercase tracking-wider text-center py-2"
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
