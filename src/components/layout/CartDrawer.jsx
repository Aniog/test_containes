import { useEffect } from "react";
import { X, Minus, Plus, ShoppingBag, Gem } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-espresso/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-espresso" />
            <span className="font-inter text-xs uppercase tracking-widest text-espresso">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-stone-light" />
              <p className="font-cormorant text-2xl text-espresso font-light">Your cart is empty</p>
              <p className="font-inter text-sm text-stone">Discover our collection and find something you love.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest text-espresso border border-espresso px-6 py-3 hover:bg-espresso hover:text-ivory transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-stone-light/50">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product thumbnail — static placeholder (cart items are runtime-dynamic) */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 flex items-center justify-center border border-stone-light/40">
                    <Gem className="w-6 h-6 text-gold/60" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="font-cormorant text-sm uppercase tracking-widest text-espresso hover:text-gold transition-colors leading-tight"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone hover:text-espresso transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="font-inter text-xs text-stone mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-stone-light">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-inter text-xs text-espresso">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-inter text-sm font-medium text-espresso">
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
          <div className="px-6 py-5 border-t border-stone-light bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-stone mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-ivory font-inter text-xs uppercase tracking-widest py-4 hover:bg-espresso-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 text-center font-inter text-xs uppercase tracking-widest text-stone hover:text-espresso transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
