import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, cartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={toggleCart} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
          <h2 className="font-serif text-lg tracking-wide text-stone-900">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="p-2 text-stone-500 hover:text-stone-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-stone-300 mb-4" />
              <p className="text-stone-500 text-sm">Your cart is empty</p>
              <button
                onClick={toggleCart}
                className="mt-4 text-xs uppercase tracking-[0.2em] text-amber-700 hover:text-amber-800"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.material}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wide text-stone-900">{item.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-stone-500">
                      {item.material === "gold" ? "Gold Tone" : "Silver Tone"}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.material, item.quantity - 1)
                          }
                          className="p-1 text-stone-500 hover:text-stone-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-sm text-stone-900 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.material, item.quantity + 1)
                          }
                          className="p-1 text-stone-500 hover:text-stone-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-stone-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.material)}
                    className="self-start p-1 text-stone-400 hover:text-stone-900 transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stone-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-500">Subtotal</span>
              <span className="font-medium text-stone-900">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-500">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-amber-700 text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-amber-800 transition-colors">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
