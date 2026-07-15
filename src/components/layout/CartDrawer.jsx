import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } =
    useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-espresso/30 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-ivory flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <h2 className="font-cormorant text-xl font-light tracking-widest uppercase text-espresso">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-espresso hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-xl font-light text-stone-warm">
                Your cart is empty
              </p>
              <p className="font-inter text-xs text-stone-warm uppercase tracking-widest">
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-espresso text-ivory font-inter text-xs uppercase tracking-widest px-8 py-3 hover:bg-umber transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex gap-4 pb-5 border-b border-linen last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gold-light to-parchment flex items-center justify-center">
                      <span className="font-cormorant text-xs text-umber italic">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-widest text-espresso leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-stone-warm mt-0.5">
                      {item.variant}
                    </p>
                    <p className="font-inter text-sm font-medium text-espresso mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.key, item.quantity - 1)
                        }
                        className="text-espresso hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="font-inter text-xs text-espresso w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.key, item.quantity + 1)
                        }
                        className="text-espresso hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone-warm hover:text-espresso transition-colors self-start mt-0.5"
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
          <div className="px-6 py-5 border-t border-linen">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-stone-warm">
                Subtotal
              </span>
              <span className="font-cormorant text-xl font-light text-espresso">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-inter text-xs text-stone-warm mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-espresso text-ivory font-inter text-xs uppercase tracking-widest py-4 hover:bg-umber transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-linen text-espresso font-inter text-xs uppercase tracking-widest py-3 hover:border-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
