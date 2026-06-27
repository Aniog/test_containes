import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-sand mb-4" />
              <p className="font-serif text-lg text-ink">Your cart is empty</p>
              <p className="text-sm text-stone mt-2">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-gold text-cream px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-sand last:border-0">
                  <div className="w-20 h-20 bg-linen flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.1em] text-ink truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-stone mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-ink mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-sand flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-sand flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone hover:text-ink transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-stone">Subtotal</span>
              <span className="font-serif text-lg text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-cream py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
