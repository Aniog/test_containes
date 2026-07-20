import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory flex flex-col shadow-2xl transition-transform duration-350 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-champagne" />
            <h2 className="font-serif text-lg tracking-widest uppercase text-obsidian">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="font-sans text-xs text-stone ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone-light" />
              <p className="font-serif text-xl text-obsidian">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">
                Discover our collection of demi-fine gold jewelry.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-accent mt-2"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-5 border-b border-ivory-dark last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-champagne-pale flex-shrink-0 rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-champagne-pale to-blush flex items-center justify-center">
                      <span className="font-serif text-champagne text-xs tracking-wider">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="product-name text-xs text-obsidian leading-tight mb-1 truncate">
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="font-sans text-xs text-stone mb-2">{item.variant}</p>
                    )}
                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center border border-ivory-dark">
                        <button
                          onClick={() => updateQty(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center font-sans text-xs text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-semibold text-obsidian">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-stone-light hover:text-obsidian transition-colors self-start mt-1"
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
          <div className="px-6 py-5 border-t border-ivory-dark space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs text-stone tracking-widest uppercase">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-accent w-full text-center">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-outline w-full text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
