import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, count } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
            <h2 className="font-serif text-xl tracking-wide font-semibold">
              Your Cart ({count})
            </h2>
            <button onClick={closeCart} aria-label="Close cart" className="p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <ShoppingBag className="w-10 h-10 text-muted" />
                <p className="text-warm-gray font-sans">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-block mt-2 bg-accent text-white px-6 py-3 text-xs font-sans font-medium tracking-widest uppercase hover:bg-accent-hover transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="flex flex-col gap-6">
                {items.map((item) => (
                  <li key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-surface flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-sans text-sm font-medium uppercase tracking-wider truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-warm-gray mt-0.5 capitalize">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="text-muted hover:text-ink transition-colors p-0.5"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-divider">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-divider/50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-sm font-sans">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-divider/50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-sans text-sm font-medium">
                          ${item.price * item.quantity}
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
            <div className="px-6 py-5 border-t border-divider bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-warm-gray">Subtotal</span>
                <span className="font-sans text-lg font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-warm-gray mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full bg-accent text-white py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:bg-accent-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 border border-ink text-ink py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:bg-ink hover:text-cream transition-colors"
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
