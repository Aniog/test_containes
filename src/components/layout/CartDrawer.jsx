import { useCart, useCartDispatch } from "@/hooks/useCart";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!cart.isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => dispatch({ type: "CLOSE_CART" })}
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 className="font-serif text-lg tracking-wide text-stone-900">Your Cart</h2>
          <button
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="p-2 hover:text-amber-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-10 w-10 text-stone-300 mb-4" />
              <p className="text-stone-500 text-sm tracking-wide">Your cart is empty</p>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="mt-4 text-xs tracking-[0.2em] uppercase text-amber-800 hover:text-amber-900"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-stone-100">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wide text-stone-900">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-0.5 capitalize">{item.tone}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: { id: item.id, tone: item.tone, quantity: item.quantity - 1 },
                            })
                          }
                          className="h-7 w-7 flex items-center justify-center border border-stone-200 hover:border-amber-800 hover:text-amber-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: { id: item.id, tone: item.tone, quantity: item.quantity + 1 },
                            })
                          }
                          className="h-7 w-7 flex items-center justify-center border border-stone-200 hover:border-amber-800 hover:text-amber-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-stone-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: { id: item.id, tone: item.tone } })
                    }
                    className="self-start p-1 text-stone-400 hover:text-red-600 transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="border-t border-stone-200 p-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-500 tracking-wide">Subtotal</span>
              <span className="font-medium text-stone-900">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-500">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-amber-800 text-white py-3 text-xs tracking-[0.2em] uppercase hover:bg-amber-900 transition-colors">
              Checkout
            </button>
            <button
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="w-full border border-stone-200 py-3 text-xs tracking-[0.2em] uppercase text-stone-700 hover:border-amber-800 hover:text-amber-800 transition-colors"
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
