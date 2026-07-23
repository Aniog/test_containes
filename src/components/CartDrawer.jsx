import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-espresso/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md z-[80] bg-ivory shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-taupe/20">
            <h2 className="font-serif text-xl tracking-widest text-espresso">
              YOUR BAG
            </h2>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="p-1 text-espresso hover:text-bronze transition-colors"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-taupe mb-4" />
                <p className="font-serif text-lg text-bronze mb-2">Your bag is empty</p>
                <p className="text-sm text-taupe">
                  Discover our collection and find something you love.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-cream flex-shrink-0 rounded-sm overflow-hidden">
                      <img
                        src={`https://placehold.co/160x192/C5B9A8/2C2416?text=${encodeURIComponent(
                          item.name.slice(0, 12)
                        )}`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-widest text-espresso truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-bronze mt-0.5 capitalize">
                            {item.variant} tone
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-taupe hover:text-espresso transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <X size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-taupe/30">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.variant,
                                item.quantity - 1
                              )
                            }
                            className="p-1.5 hover:bg-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.variant,
                                item.quantity + 1
                              )
                            }
                            className="p-1.5 hover:bg-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="font-medium text-sm text-espresso">
                          ${(item.price * item.quantity).toFixed(0)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-taupe/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-bronze">Subtotal</span>
                <span className="font-serif text-lg text-espresso">
                  ${subtotal.toFixed(0)}
                </span>
              </div>
              <p className="text-xs text-taupe mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-gold text-espresso py-3.5 text-sm font-medium uppercase tracking-widest hover:bg-gold-light transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
