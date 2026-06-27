import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button
            className="btn-icon"
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-border mb-4" />
            <p className="font-serif text-lg text-warm-gray mb-4">Your bag is empty</p>
            <button
              className="btn-secondary"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-24 h-24 bg-ivory flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide text-charcoal truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warm-gray capitalize mt-1">
                        {item.variant} Tone
                      </p>
                      <p className="font-medium mt-2 text-charcoal">
                        ${item.price}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border">
                          <button
                            className="p-2 hover:bg-ivory transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            className="p-2 hover:bg-ivory transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          className="text-xs text-warm-gray hover:text-charcoal underline transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border p-6 bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-warm-gray">Subtotal</span>
                <span className="font-medium text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warm-gray mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                className="block w-full btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Checkout
              </Link>
              <button
                className="w-full mt-3 text-sm text-warm-gray hover:text-charcoal underline transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
