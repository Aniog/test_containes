import { useCart } from "@/context/CartContext";
import { X, Plus, Minus } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[400px] bg-velmora-surface shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-velmora-hairline px-6 py-4">
            <h2 className="font-serif text-xl">Your Cart</h2>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="p-1 hover:opacity-70 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                <p className="text-velmora-muted text-sm">
                  Your cart is empty.
                </p>
                <p className="text-velmora-muted text-sm">
                  Explore our collection and find something you love.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 bg-velmora-beige rounded overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}`}
                      data-strk-img={`[product-name-${item.id}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest font-medium">
                        {item.name}
                      </p>
                      <p className="text-xs text-velmora-muted mt-0.5">
                        {item.variant}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-1 border border-velmora-hairline hover:bg-velmora-beige transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-1 border border-velmora-hairline hover:bg-velmora-beige transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-velmora-muted underline hover:text-velmora-text"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-velmora-hairline px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-velmora-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full bg-velmora-accent text-white py-3 text-sm uppercase tracking-widest font-medium hover:bg-velmora-accent-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-velmora-text text-velmora-text py-3 text-sm uppercase tracking-widest font-medium hover:bg-velmora-text hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
