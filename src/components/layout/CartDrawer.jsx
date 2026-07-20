import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-ivory flex flex-col transition-transform duration-400 ease-in-out shadow-[−8px_0_40px_rgba(28,26,24,0.15)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe-light/25">
          <h2 className="font-serif text-lg font-light tracking-widest2 text-obsidian uppercase">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-taupe-light" />
              <p className="font-serif text-xl font-light text-taupe">
                Your cart is empty
              </p>
              <p className="text-xs font-sans text-taupe-light">
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs uppercase tracking-widest font-sans font-semibold text-obsidian border border-obsidian px-6 py-2.5 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex gap-4 pb-5 border-b border-taupe-light/20 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blush to-ivory-dark flex items-center justify-center">
                      <span className="text-taupe-light text-xs font-sans">
                        ✦
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight mb-0.5">
                      {item.product.name}
                    </p>
                    <p className="text-xs font-sans text-taupe mb-2">
                      {item.variant}
                    </p>
                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-taupe-light/40">
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-sans font-medium text-obsidian w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-sans font-medium text-obsidian">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-taupe-light hover:text-taupe transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-taupe-light/25 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-sans uppercase tracking-widest text-taupe">
                Subtotal
              </span>
              <span className="font-serif text-xl font-light text-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs font-sans text-taupe-light mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory text-xs uppercase tracking-widest font-sans font-semibold py-4 hover:bg-obsidian-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 text-xs uppercase tracking-widest font-sans text-taupe hover:text-obsidian transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
