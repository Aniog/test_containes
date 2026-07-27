import React from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream flex flex-col shadow-2xl transition-transform duration-350 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-espresso" />
            <h2 className="font-cormorant text-xl font-light tracking-[0.1em] text-espresso">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="font-inter text-xs text-taupe ml-1">
                ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-taupe hover:text-espresso transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-muted" />
              <p className="font-cormorant text-2xl font-light text-espresso">
                Your cart is empty
              </p>
              <p className="font-inter text-sm text-taupe">
                Discover our collection and find something you love.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-[0.15em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-cream transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-stone last:border-0">
                  {/* Product thumbnail — branded placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden flex items-center justify-center border border-stone">
                    <ShoppingBag size={20} strokeWidth={1} className="text-muted" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p
                          className="font-cormorant text-sm uppercase tracking-[0.1em] text-espresso leading-tight"
                        >
                          {item.product.name}
                        </p>
                        <p className="font-inter text-xs text-taupe mt-0.5">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-muted hover:text-espresso transition-colors flex-shrink-0"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-stone">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-inter text-xs text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <p className="font-inter text-sm font-medium text-espresso">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-inter text-xs uppercase tracking-[0.1em] text-taupe">
                Subtotal
              </span>
              <span className="font-cormorant text-xl font-light text-espresso">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-inter text-xs text-taupe text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-cream font-inter text-xs uppercase tracking-[0.15em] py-4 hover:bg-gold-light transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-stone text-taupe font-inter text-xs uppercase tracking-[0.12em] py-3 hover:border-espresso hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
