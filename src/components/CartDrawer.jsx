import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeItem,
    subtotal,
    itemCount,
  } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-velmora-espresso/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-velmora-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <h2 className="font-serif text-2xl text-velmora-espresso">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-taupe transition-colors hover:text-velmora-espresso"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-velmora-linen" />
            <p className="mt-4 font-serif text-xl text-velmora-espresso">
              Your bag is empty
            </p>
            <p className="mt-1 text-sm text-velmora-taupe">
              Discover pieces crafted to be treasured.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-velmora-espresso px-8 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-velmora-linen overflow-y-auto px-6">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variant}`} className="flex gap-4 py-6">
                  <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center overflow-hidden bg-velmora-champagne text-velmora-taupe">
                    <span className="font-serif text-2xl uppercase">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-widest text-velmora-espresso">
                        {item.product.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-velmora-taupe">
                        Tone: {item.variant}
                      </p>
                      <p className="mt-1 text-sm text-velmora-espresso">
                        ${item.product.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variant, item.quantity - 1)
                        }
                        className="flex h-7 w-7 items-center justify-center border border-velmora-linen text-velmora-taupe transition-colors hover:border-velmora-espresso hover:text-velmora-espresso"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="min-w-[1.5rem] text-center text-sm text-velmora-espresso">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variant, item.quantity + 1)
                        }
                        className="flex h-7 w-7 items-center justify-center border border-velmora-linen text-velmora-taupe transition-colors hover:border-velmora-espresso hover:text-velmora-espresso"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="ml-auto text-velmora-taupe transition-colors hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-linen p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest text-velmora-taupe">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-velmora-espresso">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="mt-2 text-xs text-velmora-taupe">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="mt-5 w-full bg-velmora-gold py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold-dark">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full border border-velmora-espresso py-3 text-xs uppercase tracking-widest text-velmora-espresso transition-colors hover:bg-velmora-espresso hover:text-white"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
