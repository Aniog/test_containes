import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-fg">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
              <p className="font-serif text-xl mb-2">Your cart is empty</p>
              <p className="text-sm">Add something beautiful to get started.</p>
            </div>
          ) : (
            <ul className="space-y-6 list-none p-0 m-0">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-border last:border-0"
                >
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-muted flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm uppercase tracking-product font-medium truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-fg mt-1">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:border-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:border-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="p-1 self-start hover:text-accent transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm uppercase tracking-wider text-muted-fg">Subtotal</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted-fg mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-accent hover:bg-accent-hover text-cream py-3.5 uppercase tracking-widest text-sm font-medium transition-colors duration-300">
              Checkout
            </button>
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
