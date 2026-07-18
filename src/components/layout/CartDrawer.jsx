import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-ink/40 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col transition-transform duration-350 ease-out shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-ink" />
            <span className="font-sans text-xs tracking-widest uppercase text-ink">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-ink transition-colors duration-200"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-champagne" />
              <p className="font-serif text-xl text-taupe">Your cart is empty</p>
              <p className="font-sans text-xs text-stone-warm">Add something beautiful to get started.</p>
              <Button variant="primary" onClick={() => setIsOpen(false)} className="mt-2">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-hairline last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-champagne/50 to-parchment flex items-center justify-center">
                      <span className="font-serif text-xs text-taupe text-center px-1 leading-tight">
                        {item.product.name.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-wider uppercase text-ink leading-tight mb-0.5">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-sans text-xs text-stone-warm mb-2">{item.variant}</p>
                    )}
                    <p className="font-sans text-sm font-medium text-ink mb-3">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-sans text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-sans text-xs text-stone-warm hover:text-ink underline underline-offset-2 transition-colors"
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
          <div className="px-6 py-5 border-t border-hairline bg-cream">
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-taupe">Subtotal</span>
              <span className="font-serif text-lg text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone-warm mb-4">Shipping & taxes calculated at checkout</p>
            <Button variant="gold" className="w-full justify-center">
              Checkout
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 font-sans text-xs tracking-widest uppercase text-taupe hover:text-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
