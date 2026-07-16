import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { cn } from "../../lib/utils";

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-velmora-card z-50 shadow-xl transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-velmora-text" />
              <span className="font-sans text-sm font-medium text-velmora-text">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:text-velmora-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
                <p className="font-serif text-lg text-velmora-text-secondary">
                  Your cart is empty
                </p>
                <p className="font-sans text-sm text-velmora-text-secondary mt-1">
                  Discover our collection of fine jewelry.
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-4 border-b border-velmora-border"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-text">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-velmora-text-secondary mt-0.5 capitalize">
                        {item.variant}
                      </p>
                      <p className="font-sans text-sm font-medium text-velmora-text mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-0.5 hover:text-velmora-gold transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-sans text-sm w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-0.5 hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto font-sans text-xs text-velmora-text-secondary hover:text-velmora-text transition-colors underline"
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

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velmora-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm font-medium text-velmora-text">
                  Subtotal
                </span>
                <span className="font-serif text-lg font-medium text-velmora-text">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="font-sans text-xs text-velmora-text-secondary">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-velmora-gold text-white py-3 font-sans text-xs uppercase tracking-widest hover:bg-velmora-gold-hover transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}