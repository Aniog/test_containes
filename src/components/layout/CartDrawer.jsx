import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const overlayRef = useRef(null);

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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-ivory shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Your Cart
              </h2>
              <p className="text-sm text-muted mt-0.5">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-border mb-4" />
                <p className="text-muted font-serif text-xl">Your cart is empty</p>
                <p className="text-muted text-sm mt-2">Add some pieces to get started</p>
                <Link
                  to="/collections/all"
                  onClick={onClose}
                  className="mt-6 inline-block bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase rounded-sm hover:bg-gold-hover transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.material}`}
                    className="flex gap-4 pb-5 border-b border-border/30"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base font-medium text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted uppercase tracking-widest mt-0.5">
                        {item.material}
                      </p>
                      <p className="text-foreground font-medium mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-border/60 rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.material, item.quantity - 1)
                            }
                            className="p-1 text-muted hover:text-foreground transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.material, item.quantity + 1)
                            }
                            className="p-1 text-muted hover:text-foreground transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.material)}
                          className="text-xs text-muted hover:text-foreground uppercase tracking-wider transition-colors"
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
            <div className="border-t border-border/60 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="font-serif text-xl font-semibold text-foreground">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-muted">Free worldwide shipping on all orders</p>
              <button className="w-full bg-foreground text-ivory py-3.5 text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-muted hover:text-foreground transition-colors"
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