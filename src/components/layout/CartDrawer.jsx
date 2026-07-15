import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-light">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-sans text-xs uppercase tracking-widest text-espresso">
              Your Bag ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warm-gray hover:text-espresso transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-warm-gray-light" />
              <p className="font-serif text-xl text-espresso font-light">Your bag is empty</p>
              <p className="font-sans text-xs text-warm-gray">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-espresso transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-warm-gray-light last:border-0">
                  {/* Product thumbnail — styled fallback (cart is runtime-only, no build-time img resolution) */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-2xl text-gold/60 font-light select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span id={`cart-item-${item.key}-name`} className="font-serif text-sm uppercase tracking-[0.1em] text-espresso block truncate">
                      {item.product.name}
                    </span>
                    <span className="font-sans text-xs text-warm-gray mt-0.5 block">{item.variant}</span>
                    <span className="font-sans text-sm text-espresso font-medium mt-1 block">
                      ${item.product.price}
                    </span>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-warm-gray hover:text-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="font-sans text-xs text-espresso w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-warm-gray hover:text-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-warm-gray hover:text-espresso transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-warm-gray-light bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest text-warm-gray">Subtotal</span>
              <span className="font-serif text-xl text-espresso font-light">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-warm-gray mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-espresso font-sans text-xs uppercase tracking-widest py-4 hover:bg-gold-dark transition-colors duration-200 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-warm-gray-light text-warm-gray font-sans text-xs uppercase tracking-widest py-3 hover:border-espresso hover:text-espresso transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
