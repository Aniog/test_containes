import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(28, 25, 23, 0.4)' }}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl font-light text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal hover:text-stone transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-hairline mb-4" />
              <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-stone">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-cream flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-hairline text-charcoal hover:border-charcoal transition-colors bg-transparent"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-hairline text-charcoal hover:border-charcoal transition-colors bg-transparent"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-stone hover:text-charcoal transition-colors self-start bg-transparent border-none p-1"
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
          <div className="px-6 py-5 border-t border-hairline">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn-gold w-full py-4 text-sm uppercase tracking-widest font-medium transition-colors duration-300 border-none">
              Checkout
            </button>
            <p className="text-xs text-stone text-center mt-3">Free shipping on all orders</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
