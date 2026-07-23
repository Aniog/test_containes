import { useCart } from "@/context/CartContext";
import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalPrice, removeItem, updateQuantity } =
    useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-surface border-l border-velmora-border transform transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-wide text-velmora-text-primary">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-velmora-text-secondary font-sans text-sm mb-6">
                  Your cart is empty
                </p>
                <Button variant="outline" onClick={closeCart}>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-velmora-border/50"
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-velmora-surface-elevated flex-shrink-0" />

                    <div className="flex-1 min-w-0">
                      <h3 className="product-name truncate">{item.name}</h3>
                      <p className="text-velmora-text-secondary text-xs font-sans mt-1">
                        ${item.price}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-velmora-text-primary text-sm font-sans w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <span className="text-velmora-text-primary text-sm font-sans">
                        ${(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-6 border-t border-velmora-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-text-primary font-sans text-sm">
                  Total
                </span>
                <span className="text-velmora-text-primary font-serif text-xl">
                  ${totalPrice.toFixed(0)}
                </span>
              </div>
              <Button className="w-full">Checkout</Button>
              <p className="text-velmora-text-secondary text-xs text-center mt-3 font-sans">
                Free shipping on orders over $75
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}