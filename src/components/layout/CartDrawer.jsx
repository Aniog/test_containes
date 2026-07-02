import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-velmora-cream flex flex-col transition-transform duration-350 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-cormorant text-xl font-medium text-velmora-obsidian tracking-wide">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-velmora-text-muted">
                ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-sand" />
              <p className="font-cormorant text-2xl text-velmora-text-mid font-light">
                Your cart is empty
              </p>
              <p className="font-manrope text-xs text-velmora-text-muted">
                Discover our collection and find something you love.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-widest-md uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-velmora-sand">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-widest-sm text-velmora-obsidian font-medium leading-tight">
                          {item.name}
                        </p>
                        <p className="font-manrope text-xs text-velmora-text-muted mt-0.5 capitalize">
                          {item.tone} tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-velmora-text-muted hover:text-velmora-obsidian transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-velmora-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className="font-cormorant text-base text-velmora-obsidian font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
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
          <div className="border-t border-velmora-sand px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs uppercase tracking-widest-md text-velmora-text-mid">
                Subtotal
              </span>
              <span className="font-cormorant text-2xl text-velmora-obsidian font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-manrope text-xs text-velmora-text-muted">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-obsidian text-velmora-text-light font-manrope text-xs tracking-widest-md uppercase py-4 hover:bg-velmora-stone transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-sand text-velmora-text-mid font-manrope text-xs tracking-widest-md uppercase py-3 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
