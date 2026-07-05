import { useEffect } from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

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

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-surface border-l border-[#2a2a2a] transition-transform duration-300 ease-in-out flex flex-col",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2a2a2a]">
          <h2 className="font-serif text-xl text-primary">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-secondary hover:text-primary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-secondary text-sm">Your cart is empty</p>
              <p className="text-[#666] text-xs mt-2">
                Add some pieces to get started
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.material}`}
                  className="flex gap-4 pb-6 border-b border-[#2a2a2a]"
                >
                  {/* Image */}
                  <div className="w-20 h-20 bg-surface-secondary rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-primary truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-secondary mt-1 capitalize">
                      {item.material}
                    </p>
                    <p className="text-accent font-sans text-sm font-medium mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.material, item.quantity - 1)
                        }
                        className="text-secondary hover:text-primary transition-colors"
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-primary text-sm font-sans w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.material, item.quantity + 1)
                        }
                        className="text-secondary hover:text-primary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.material)}
                    className="text-secondary hover:text-red-400 transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#2a2a2a] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-primary font-sans text-sm">Subtotal</span>
              <span className="text-primary font-serif text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-secondary">
              Shipping and taxes calculated at checkout
            </p>
            <button className="btn-primary w-full text-center">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-secondary hover:text-primary transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}