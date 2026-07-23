import { useCart } from "../context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, dispatch } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={() => dispatch({ type: "CLOSE_CART" })}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#F5F2ED] z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DED5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1C1917]" />
              <span className="font-['Cormorant_Garamond'] text-lg">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="p-1 hover:opacity-60 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#6B6358] mb-4" />
                <p className="font-['Cormorant_Garamond'] text-xl text-[#6B6358] mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-[#6B6358] mb-6">
                  Discover pieces that speak to you.
                </p>
                <Link
                  to="/shop"
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                  className="btn-primary"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-4 pb-4 border-b border-[#E5DED5] last:border-0"
                  >
                    <div className="w-20 h-20 bg-[#E5DED5] rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-['Cormorant_Garamond'] text-sm uppercase tracking-[0.1em] truncate">
                        {item.name}
                      </h3>
                      <p className="text-[#B8943C] font-medium text-sm mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: { id: item.id, quantity: item.quantity - 1 },
                            })
                          }
                          className="p-1 border border-[#E5DED5] rounded hover:bg-[#E5DED5] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: { id: item.id, quantity: item.quantity + 1 },
                            })
                          }
                          className="p-1 border border-[#E5DED5] rounded hover:bg-[#E5DED5] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() =>
                            dispatch({ type: "REMOVE_ITEM", payload: item.id })
                          }
                          className="ml-auto text-xs text-[#6B6358] hover:text-[#1C1917] transition-colors"
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
            <div className="border-t border-[#E5DED5] px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-['Cormorant_Garamond'] text-lg">
                  Subtotal
                </span>
                <span className="font-['Cormorant_Garamond'] text-lg font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-[#6B6358]">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="w-full text-center text-sm text-[#6B6358] hover:text-[#1C1917] transition-colors py-2"
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