import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal } =
    useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-charcoal/40" onClick={closeCart} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone">
          <h2 className="font-serif text-xl tracking-widest">YOUR CART</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-taupe">
              <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
              <p className="font-serif text-lg">Your cart is empty</p>
              <p className="text-sm mt-1">Discover something beautiful.</p>
              <button
                onClick={closeCart}
                className="mt-6 border border-charcoal text-charcoal px-6 py-2 text-xs uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-stone/50 flex-shrink-0" />
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <p className="font-serif text-xs tracking-widest uppercase">
                        {item.name}
                      </p>
                      <p className="text-xs text-taupe mt-0.5">
                        {item.variant}
                      </p>
                      <p className="text-sm mt-1">${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-stone">
                        <button
                          className="px-2 py-1 hover:bg-stone/50 transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-sm min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-1 hover:bg-stone/50 transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        className="text-xs text-taupe underline hover:text-charcoal transition-colors"
                        onClick={() => removeFromCart(item.id, item.variant)}
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
          <div className="p-5 border-t border-stone">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="font-serif text-lg">${subtotal}</span>
            </div>
            <p className="text-xs text-taupe mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-champagne text-charcoal py-3 text-xs uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 border border-charcoal text-charcoal py-3 text-xs uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
