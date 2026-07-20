import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-espresso/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-ivory flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-espresso" />
            <span className="font-inter text-xs uppercase tracking-[0.15em] text-espresso">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-stone-light" />
              <p className="font-cormorant text-xl text-stone">Your cart is empty</p>
              <p className="font-inter text-xs text-stone/70">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-[0.15em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-espresso transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-stone-light/30">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-cormorant text-xs text-stone uppercase tracking-widest text-center px-1 leading-tight">
                      {item.name.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-cormorant text-sm uppercase tracking-[0.1em] text-espresso leading-tight"
                    >
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="font-inter text-xs text-stone mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-inter text-sm font-medium text-espresso mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-stone hover:text-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-inter text-xs text-espresso w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-stone hover:text-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone-light hover:text-espresso transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-stone-light/50 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-[0.12em] text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-stone/60 mb-5">Shipping calculated at checkout</p>
            <button className="w-full bg-espresso text-ivory font-inter text-xs uppercase tracking-[0.15em] py-4 hover:bg-espresso-light transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-stone-light text-stone font-inter text-xs uppercase tracking-[0.12em] py-3 hover:border-espresso hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
