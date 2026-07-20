import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { items, isOpen, dispatch } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => dispatch({ type: "SET_CART_OPEN", payload: false })} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-soft">
              <p className="eyebrow">Your Cart</p>
              <button
                type="button"
                onClick={() => dispatch({ type: "SET_CART_OPEN", payload: false })}
                className="p-2 text-ink-secondary hover:text-ink"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="h-10 w-10 text-ink-muted mb-3" />
                  <p className="text-sm text-ink-secondary">Your cart is empty.</p>
                  <Link
                    to="/shop"
                    onClick={() => dispatch({ type: "SET_CART_OPEN", payload: false })}
                    className="mt-4 btn-outline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-surface-alt">
                        <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="product-name text-xs">{item.name}</p>
                            <p className="mt-1 text-xs text-ink-secondary capitalize">{item.variant}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id: item.id, variant: item.variant } })}
                            className="text-ink-muted hover:text-ink"
                            aria-label="Remove item"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                dispatch({
                                  type: "UPDATE_QUANTITY",
                                  payload: { id: item.id, variant: item.variant, quantity: Math.max(1, item.quantity - 1) },
                                })
                              }
                              className="p-1 text-ink-secondary hover:text-ink"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-xs font-medium">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() =>
                                dispatch({
                                  type: "UPDATE_QUANTITY",
                                  payload: { id: item.id, variant: item.variant, quantity: item.quantity + 1 },
                                })
                              }
                              className="p-1 text-ink-secondary hover:text-ink"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border-soft px-5 py-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-secondary">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-ink-muted">Shipping and taxes calculated at checkout.</p>
                <button type="button" className="w-full btn-primary">
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: "SET_CART_OPEN", payload: false })}
                  className="w-full btn-outline"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
