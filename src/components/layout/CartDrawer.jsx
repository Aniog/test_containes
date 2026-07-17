import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-clay-900/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-cream-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
            <h2 className="font-serif text-lg tracking-wide text-clay-900">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="p-1 text-clay-600 hover:text-clay-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-cream-300 mb-4" />
                <p className="font-serif text-lg text-clay-600 mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-clay-400 mb-6">
                  Discover pieces you'll love.
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-primary text-xs"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-5 border-b border-cream-200 last:border-0"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-cream-100 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name mb-0.5 truncate">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-clay-400 font-sans mb-1">
                        {item.variant}
                      </p>
                      <p className="font-sans text-sm font-medium text-clay-800">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-cream-300 rounded">
                          <button
                            className="p-1 text-clay-500 hover:text-clay-800 transition-colors"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-sans text-clay-800">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1 text-clay-500 hover:text-clay-800 transition-colors"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-[11px] font-sans text-clay-400 hover:text-clay-700 transition-colors uppercase tracking-wider"
                          onClick={() => removeItem(item.id, item.variant)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-cream-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-clay-700">Subtotal</span>
                <span className="font-sans text-base font-medium text-clay-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-clay-400 font-sans">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full text-xs">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs font-sans text-clay-500 hover:text-clay-800 transition-colors uppercase tracking-wider"
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