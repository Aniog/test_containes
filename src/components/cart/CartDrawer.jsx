import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    items,
    drawerOpen,
    closeDrawer,
    removeFromCart,
    updateQty,
    subtotal,
    itemCount,
  } = useCart();

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={closeDrawer}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-vel-surface shadow-2xl animate-[slideInRight_0.3s_ease-out] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-vel-border">
          <h2 className="font-serif text-lg tracking-wide">
            Your Bag ({itemCount})
          </h2>
          <button
            className="w-10 h-10 flex items-center justify-center text-vel-taupe hover:text-vel-deep transition-colors"
            onClick={closeDrawer}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <p className="text-vel-muted text-sm">Your bag is empty.</p>
            <Link
              to="/shop"
              className="mt-4 text-sm tracking-wide text-vel-gold hover:text-vel-gold-hover transition-colors underline underline-offset-4"
              onClick={closeDrawer}
            >
              Browse the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-4 border-b border-vel-border"
                >
                  {/* Image placeholder */}
                  <div className="w-20 h-20 rounded-sm bg-vel-light flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-vel-gold/15" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-vel-deep truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-vel-muted mt-0.5">
                          {item.variant} Tone
                        </p>
                      </div>
                      <button
                        className="text-vel-muted hover:text-red-400 transition-colors flex-shrink-0"
                        onClick={() => removeFromCart(item.id, item.variant)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-vel-border rounded-sm">
                        <button
                          className="w-7 h-7 flex items-center justify-center text-vel-taupe hover:text-vel-deep transition-colors"
                          onClick={() =>
                            updateQty(item.id, item.variant, item.qty - 1)
                          }
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-medium">
                          {item.qty}
                        </span>
                        <button
                          className="w-7 h-7 flex items-center justify-center text-vel-taupe hover:text-vel-deep transition-colors"
                          onClick={() =>
                            updateQty(item.id, item.variant, item.qty + 1)
                          }
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-vel-deep">
                        ${(item.price * item.qty).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-vel-border p-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-vel-muted">Subtotal</span>
                <span className="font-medium text-vel-deep">
                  ${subtotal.toFixed(0)}
                </span>
              </div>
              <p className="text-xs text-vel-muted">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-vel-gold hover:bg-vel-gold-hover text-white py-3 text-sm font-medium tracking-wide rounded-sm transition-colors">
                Checkout
              </button>
              <button
                className="w-full text-center text-xs text-vel-muted hover:text-vel-deep transition-colors"
                onClick={closeDrawer}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
