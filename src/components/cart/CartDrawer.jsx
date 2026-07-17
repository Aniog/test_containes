import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { X, Plus, Minus, Trash2 } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    closeCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-serif text-lg tracking-velmora uppercase">
              Your Bag ({totalItems})
            </h2>
            <button onClick={closeCart} className="text-velmora-charcoal hover:text-accent transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">Your bag is empty</p>
                <button
                  onClick={closeCart}
                  className="btn-outline text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-muted"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium tracking-wide uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.variant}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="px-2 py-1 hover:bg-muted transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="px-2 py-1 hover:bg-muted transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-muted-foreground hover:text-destructive mt-2 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping & taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-velmora-charcoal text-white text-center py-3 text-sm tracking-velmora uppercase hover:bg-accent transition-colors duration-300"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
