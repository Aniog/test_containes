import { useEffect } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } =
    useCart();

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
      <div
        className={`fixed inset-0 bg-dark/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-warm">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-inter text-xs uppercase tracking-widest text-dark font-medium">
              Your Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-dark" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 scrollbar-hide">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-border-warm" />
              <p className="font-cormorant text-2xl text-dark font-light">
                Your cart is empty
              </p>
              <p className="font-inter text-xs text-stone-warm">
                Discover our collection and find something you love.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5 hover:text-dark hover:border-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-gold-pale flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-cormorant text-xs text-stone-warm italic">
                        {item.product.name.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-widest text-dark font-medium leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-inter text-xs text-stone-warm mt-0.5">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="p-0.5 hover:opacity-50 transition-opacity flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5 text-stone-warm" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 border border-border-warm px-3 py-1.5">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="hover:opacity-50 transition-opacity"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-dark" />
                        </button>
                        <span className="font-inter text-xs text-dark w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="hover:opacity-50 transition-opacity"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-dark" />
                        </button>
                      </div>
                      <span className="font-inter text-sm font-medium text-dark">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-border-warm space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-widest text-stone-warm">
                Subtotal
              </span>
              <span className="font-cormorant text-xl text-dark font-medium">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-inter text-xs text-stone-warm text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-dark text-white font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-border-warm text-dark font-inter text-xs uppercase tracking-widest py-3 hover:border-dark transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
