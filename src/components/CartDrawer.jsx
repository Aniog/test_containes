import { ShoppingBag, X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transition-transform duration-400 ease-out flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-[0.1em]">
              Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-10 h-10 mx-auto text-secondary/50 mb-4" />
              <p className="text-secondary text-sm">Your cart is empty</p>
              <p className="text-secondary/60 text-xs mt-1">
                Add some pieces to get started
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 pb-6 border-b border-border last:border-0"
              >
                <div className="w-20 h-24 bg-light-accent rounded overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="product-name text-xs truncate pr-2">
                      {item.name}
                    </h4>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-secondary/50 hover:text-red-500 transition-colors flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-secondary uppercase tracking-[0.08em] mt-0.5">
                    {item.variant}
                  </p>
                  <p className="text-sm font-medium mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.key, item.quantity - 1)
                      }
                      className="w-7 h-7 border border-border rounded flex items-center justify-center hover:bg-light-accent transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.key, item.quantity + 1)
                      }
                      className="w-7 h-7 border border-border rounded flex items-center justify-center hover:bg-light-accent transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium uppercase tracking-[0.08em]">
                Subtotal
              </span>
              <span className="text-lg font-serif font-semibold">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] text-secondary">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-primary text-white py-3.5 text-xs uppercase tracking-[0.12em] font-medium hover:bg-primary/90 transition-colors">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full text-center text-xs uppercase tracking-[0.1em] text-secondary hover:text-primary transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}