import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-light">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-inter text-xs uppercase tracking-[0.15em] text-espresso">
              Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-warm-gray hover:text-espresso transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-warm-gray-light" />
              <p className="font-cormorant text-xl text-warm-gray font-light">Your bag is empty</p>
              <p className="font-inter text-xs text-warm-gray">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-inter text-xs uppercase tracking-[0.15em] text-espresso border border-espresso px-6 py-3 hover:bg-espresso hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-warm-gray-light last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[cart-item-${item.key}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={`cart-item-${item.key}-name`} className="sr-only">{item.product.name} gold jewelry</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-espresso leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    <p className="font-inter text-sm font-medium text-espresso mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="text-warm-gray hover:text-espresso transition-colors"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="font-inter text-xs text-espresso w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="text-warm-gray hover:text-espresso transition-colors"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    aria-label="Remove item"
                    className="text-warm-gray hover:text-espresso transition-colors self-start mt-0.5"
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
          <div className="px-6 py-6 border-t border-warm-gray-light bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-[0.12em] text-warm-gray">Subtotal</span>
              <span className="font-inter text-sm font-medium text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-warm-gray mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-cream font-inter text-xs uppercase tracking-[0.15em] py-4 hover:bg-charcoal transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-inter text-xs uppercase tracking-[0.12em] text-warm-gray hover:text-espresso transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
