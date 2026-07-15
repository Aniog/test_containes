import React from "react";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl transform transition-transform duration-300 ease-out">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-wide">YOUR CART</h2>
          <button
            onClick={closeCart}
            className="p-1 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-stone-600" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
            <p className="font-serif text-lg text-stone-500 mb-2">
              Your cart is empty
            </p>
            <p className="text-sm text-stone-400">
              Discover pieces crafted to be treasured.
            </p>
            <button
              onClick={closeCart}
              className="mt-6 px-8 py-3 bg-velmora-dark text-white text-sm tracking-widest uppercase hover:bg-velmora-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-stone-100 flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-lg text-stone-400 uppercase tracking-wider">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-sm uppercase tracking-wider truncate pr-2">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-stone-400 hover:text-stone-700 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {item.variantLabel && (
                      <p className="text-xs text-stone-500 mt-0.5">
                        {item.variantLabel}
                      </p>
                    )}
                    <p className="text-sm font-medium mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.cartId, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-stone-300 flex items-center justify-center hover:border-stone-500 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.cartId, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-stone-300 flex items-center justify-center hover:border-stone-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-serif text-lg">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full py-3.5 bg-velmora-gold text-white text-sm tracking-widest uppercase font-medium hover:bg-velmora-goldDark transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 border border-stone-300 text-stone-700 text-sm tracking-widest uppercase hover:border-stone-500 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
