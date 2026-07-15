import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-velmora-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-velmora-cream shadow-2xl transition-transform duration-400 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="section-padding pt-6 pb-4 flex items-center justify-between border-b border-velmora-stone/50">
          <h2 className="font-heading text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 text-velmora-muted">
              <ShoppingBag className="w-10 h-10 opacity-40" />
              <p className="text-sm">Your cart is empty</p>
              <button onClick={closeCart} className="btn-primary text-xs mt-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-sand flex-shrink-0 overflow-hidden">
                    <img
                      src={`https://placehold.co/200x200/2D2D2D/BFA06B?text=${encodeURIComponent(item.name.charAt(0))}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-heading text-sm tracking-wide truncate block"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-velmora-muted mt-0.5 capitalize">
                      {item.variant} tone
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-stone">
                        <button
                          className="px-2 py-1 text-xs hover:bg-velmora-sand transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-1 text-xs hover:bg-velmora-sand transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-velmora-muted hover:text-velmora-ink self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="section-padding py-6 border-t border-velmora-stone/50 bg-velmora-cream">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="font-heading text-lg">${subtotal}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-5">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full">Checkout</button>
            <button
              onClick={closeCart}
              className="btn-outline w-full mt-3"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
