import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-cream-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h2 className="font-serif text-xl font-semibold tracking-wider text-charcoal-800">YOUR CART</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-charcoal-500 hover:text-charcoal-800 transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-charcoal-200 mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-charcoal-500 mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal-400">Discover something beautiful to add.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-outline mt-6 text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-charcoal-100 last:border-0"
                >
                  {/* Image */}
                  <div className="w-20 h-20 bg-warm-200 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-semibold tracking-ultrawide text-charcoal-800 uppercase truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-400 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal-800 mt-1">${item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-charcoal-200 text-charcoal-500 hover:border-charcoal-400 transition-colors bg-transparent"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium text-charcoal-800 w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-charcoal-200 text-charcoal-500 hover:border-charcoal-400 transition-colors bg-transparent"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 text-charcoal-300 hover:text-charcoal-600 transition-colors bg-transparent border-none"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-charcoal-100 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-label text-charcoal-500">Subtotal</span>
              <span className="font-serif text-xl font-semibold text-charcoal-800">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-charcoal-400">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs text-charcoal-500 hover:text-charcoal-800 transition-colors bg-transparent border-none underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
