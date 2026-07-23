import { useEffect } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-serif text-lg text-espresso tracking-wide">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs font-sans text-stone ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-divider" />
              <p className="font-serif text-xl text-charcoal font-light">Your cart is empty</p>
              <p className="text-xs font-sans text-stone uppercase tracking-widest">
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-espresso text-cream text-xs uppercase tracking-widest font-sans px-8 py-3 hover:bg-charcoal transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-divider">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-parchment to-gold-light/30 flex items-center justify-center">
                      <span className="text-gold text-xs font-serif italic">V</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest text-espresso leading-tight">
                          {item.product.name}
                        </p>
                        <p className="text-xs font-sans text-stone mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone hover:text-espresso transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-divider">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-parchment transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-parchment transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-sans text-sm text-espresso font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
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
          <div className="border-t border-divider px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-sans uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-serif text-xl text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs font-sans text-stone text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-espresso text-cream text-xs uppercase tracking-widest font-sans py-4 hover:bg-charcoal transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-espresso text-espresso text-xs uppercase tracking-widest font-sans py-3 hover:bg-espresso hover:text-cream transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
