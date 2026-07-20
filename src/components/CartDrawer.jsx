import React from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } =
    useCart();

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
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-warm-white shadow-xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/20">
            <div>
              <h2 className="font-serif text-xl tracking-wider uppercase text-velmora-ebony">
                Your Cart
              </h2>
              <p className="text-xs text-velmora-stone mt-0.5">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-velmora-ebony" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-stone/40 mb-4" />
                <p className="text-velmora-pewter font-sans text-sm">
                  Your cart is empty
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 btn-outline text-xs"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item, index) => (
                  <li
                    key={`${item.id}-${item.variant}-${index}`}
                    className="flex gap-4 pb-5 border-b border-velmora-sand/10 last:border-0"
                  >
                    <div className="w-20 h-24 bg-velmora-cream rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide uppercase text-velmora-ebony truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-stone mt-0.5">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium text-velmora-ebony mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(index, item.quantity - 1)
                          }
                          className="p-1 border border-velmora-sand/30 rounded hover:bg-velmora-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(index, item.quantity + 1)
                          }
                          className="p-1 border border-velmora-sand/30 rounded hover:bg-velmora-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(index)}
                          className="ml-auto text-xs text-velmora-stone hover:text-velmora-ebony transition-colors underline"
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
          {items.length > 0 && (
            <div className="border-t border-velmora-sand/20 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-sans text-velmora-pewter uppercase tracking-wide">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-velmora-ebony">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-stone">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full btn-accent">Checkout</button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs text-velmora-pewter hover:text-velmora-ebony transition-colors underline"
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