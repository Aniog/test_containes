import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../data/storefront.js";
import { useStorefront } from "../../hooks/useStorefront.jsx";
import QuantitySelector from "./QuantitySelector.jsx";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    subtotal,
    updateQuantity,
    removeItem,
  } = useStorefront();

  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        isCartOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isCartOpen}
    >
      <div
        className={`absolute inset-0 bg-stone-950/40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-stone-50 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <div>
            <p className="eyebrow">Cart</p>
            <h2 className="editorial-heading text-3xl">Your Selection</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:text-amber-700"
            onClick={closeCart}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="product-name text-sm text-stone-500">Your cart is empty</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-stone-600">
              Start with a signature layer or a gifting set and we will keep it saved here.
            </p>
            <Link className="button-primary mt-6" to="/shop" onClick={closeCart}>
              Shop Jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {cart.map((item) => (
                <div key={item.itemKey} className="rounded-3xl border border-stone-200 bg-stone-100 p-4">
                  <div className="flex gap-4">
                    <div className="flex h-20 w-16 items-center justify-center rounded-2xl bg-stone-200 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                      V
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            className="product-name text-sm transition hover:text-amber-700"
                            to={`/product/${item.slug}`}
                            onClick={closeCart}
                          >
                            {item.name}
                          </Link>
                          <p className="mt-2 text-sm text-stone-600">{item.variant}</p>
                          <p className="mt-1 text-sm font-medium text-stone-950">
                            {formatCurrency(item.price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 transition hover:text-amber-700"
                          onClick={() => removeItem(item.itemKey)}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-4">
                        <QuantitySelector
                          compact
                          value={item.quantity}
                          onChange={(quantity) => updateQuantity(item.itemKey, quantity)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 px-6 py-5">
              <div className="flex items-center justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="text-lg font-semibold text-stone-950">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-500">
                Taxes and duties calculated at checkout. Complimentary shipping on orders over $75.
              </p>
              <button type="button" className="button-primary mt-5 w-full">
                Continue to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
