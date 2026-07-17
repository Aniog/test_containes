import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-surface z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
            <h2 className="font-serif text-xl text-warm-white">Your Bag</h2>
            <button
              onClick={closeCart}
              className="p-1 text-warm-white/60 hover:text-warm-white transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-taupe mb-4" />
                <p className="font-serif text-lg text-warm-white">Your bag is empty</p>
                <p className="text-sm text-taupe mt-1">Add something beautiful.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-divider rounded-md flex-shrink-0 overflow-hidden">
                      <img
                        src={`https://placehold.co/160x160/1A1918/C8A97E?text=${encodeURIComponent(item.name.charAt(0))}`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm uppercase tracking-wider text-warm-white truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-taupe capitalize mt-0.5">{item.variant}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-divider rounded">
                          <button
                            className="px-2 py-1 text-warm-white/60 hover:text-warm-white"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2 text-sm text-warm-white">{item.quantity}</span>
                          <button
                            className="px-2 py-1 text-warm-white/60 hover:text-warm-white"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-sans text-warm-white">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-warm-white/40 hover:text-warm-white self-start transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-divider">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-lg text-warm-white">${totalPrice.toFixed(0)}</span>
              </div>
              <p className="text-xs text-taupe mb-4">Shipping and taxes calculated at checkout.</p>
              <button className="w-full py-3.5 bg-accent text-base font-sans font-semibold text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors rounded">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 mt-2 border border-warm-white/20 text-warm-white text-sm uppercase tracking-wider hover:border-warm-white/40 transition-colors rounded"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
