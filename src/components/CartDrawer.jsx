import { useEffect } from "react";
import { Minus, Plus, X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext.jsx";
import { formatPrice } from "@/lib/utils.js";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, count } = useCart();

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        aria-hidden={!isOpen}
        className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream-light shadow-2xl transform transition-transform duration-300 ease-out"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={40} className="text-ink/20 mb-4" />
              <p className="font-serif text-xl mb-2">Your cart is empty</p>
              <p className="text-sm text-ink-muted mb-6">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gold text-ink px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-cream-dark shrink-0 overflow-hidden flex items-center justify-center text-ink/30 font-serif text-xl">
                    {item.name.charAt(0)}
                  </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-base leading-tight truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-ink-muted mt-1 capitalize">
                        Tone: {item.tone}
                      </p>
                      <p className="text-sm font-medium mt-2">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-ink/15">
                          <button
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="p-2 hover:bg-cream-dark transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="p-2 hover:bg-cream-dark transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="p-2 text-ink-muted hover:text-red-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-ink/10 px-6 py-6 bg-cream">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-ink-muted">Subtotal ({count} items)</span>
                  <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-ink-muted mb-5">
                  Shipping & taxes calculated at checkout.
                </p>
                <button className="w-full bg-gold text-ink py-4 text-sm font-semibold tracking-wide uppercase hover:bg-gold-light transition-colors">
                  Checkout
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-3 border border-ink text-ink py-3 text-sm font-medium tracking-wide uppercase hover:bg-ink hover:text-cream transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
