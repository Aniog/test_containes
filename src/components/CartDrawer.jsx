import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[70] bg-charcoal-800/40 transition-opacity duration-400 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[80] bg-cream-50 shadow-elevated flex flex-col transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-cream-200">
          <h2
            className="font-serif text-xl tracking-wide text-charcoal-800"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <ShoppingBag size={48} strokeWidth={1} className="text-charcoal-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-500 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Your cart is empty
              </p>
              <p className="text-body-sm text-charcoal-400">
                Add something beautiful to get started.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 p-3 bg-white rounded-xl shadow-soft"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="product-name text-[11px] text-charcoal-800 truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-overline text-charcoal-400 mt-0.5">{item.variant}</p>
                  <p className="text-body-sm font-medium text-charcoal-800 mt-1">
                    ${item.product.price}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.key, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-cream-200 text-charcoal-600 hover:border-gold hover:text-gold transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-body-sm font-medium w-6 text-center text-charcoal-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.key, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-cream-200 text-charcoal-600 hover:border-gold hover:text-gold transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.key)}
                  className="p-1 text-charcoal-400 hover:text-red-400 transition-colors self-start"
                  aria-label={`Remove ${item.product.name}`}
                >
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-200 p-5 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-body-sm text-charcoal-500">Subtotal</span>
              <span className="text-body-lg font-medium text-charcoal-800">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-caption text-charcoal-400 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-charcoal-800 text-cream-50 text-overline uppercase tracking-[0.14em] font-medium rounded-lg hover:bg-charcoal-700 transition-colors duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
