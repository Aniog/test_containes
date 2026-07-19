import { useEffect, useRef } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, removeItem, updateQuantity } =
    useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-ink/50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[420px] bg-parchment z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream">
          <h2 className="font-serif text-xl tracking-wide-heading text-ink">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-slate hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-cream mb-4" />
              <p className="font-serif text-lg text-warm-gray">Your cart is empty</p>
              <p className="text-sm text-warm-gray/70 mt-1">
                Discover our collection and find your perfect piece.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.tone}`}
                  className="flex gap-4 py-4 border-b border-cream last:border-0"
                >
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-sand rounded-sm flex-shrink-0 overflow-hidden">
                    <div
                      className="w-full h-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #C6A962 0%, #8A8279 100%)",
                        opacity: 0.15,
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-product text-ink uppercase truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-gray mt-0.5 capitalize">
                      {item.tone} tone
                    </p>
                    <p className="text-sm font-medium text-ink mt-1">
                      ${item.price}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-cream rounded-sm">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity - 1)
                          }
                          className="px-2 py-1 text-slate hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium text-ink border-x border-cream">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity + 1)
                          }
                          className="px-2 py-1 text-slate hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="text-xs text-warm-gray hover:text-ink underline transition-colors"
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
          <div className="px-6 py-5 border-t border-cream">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="text-sm font-medium text-ink">${totalPrice}</span>
            </div>
            <p className="text-xs text-warm-gray/70 mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-sm uppercase tracking-wider py-3.5 transition-colors duration-200">
              Checkout — ${totalPrice}
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-sm text-warm-gray hover:text-ink transition-colors py-2 underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
