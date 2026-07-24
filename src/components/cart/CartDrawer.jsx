import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeDrawer} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-gray-200/70 px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900">
            <ShoppingBag className="h-4 w-4" />
            <span>Your Cart</span>
            <span className="text-gray-500">({items.length})</span>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            className="p-2 text-gray-700 hover:text-gold-700 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-gray-300" />
              <p className="text-sm text-gray-600">Your cart is empty.</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="inline-flex items-center rounded-full bg-gold-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-gold-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-24 w-20 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&q=80';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5 capitalize">{item.tone}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item)}
                        className="text-xs text-gray-500 hover:text-red-600 transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-gray-200">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                          className="p-1.5 text-gray-700 hover:text-gold-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, item.quantity + 1)}
                          className="p-1.5 text-gray-700 hover:text-gold-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200/70 px-5 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
            <button
              type="button"
              className="mt-4 w-full rounded-full bg-gold-700 py-3 text-sm font-medium text-white hover:bg-gold-800 transition-colors"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeDrawer}
              className="mt-2 w-full rounded-full border border-gray-200 py-3 text-sm font-medium text-gray-700 hover:border-gold-700 hover:text-gold-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
