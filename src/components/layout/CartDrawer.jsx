import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wide text-velmora-charcoal">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-velmora-muted hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-velmora-taupe mb-4" />
              <p className="font-serif text-lg text-velmora-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-muted">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-8 py-3 bg-velmora-charcoal text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-velmora-border last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-sand/50 flex-shrink-0 flex items-center justify-center">
                    <span className="text-velmora-gold text-lg">✦</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal pr-2">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-velmora-muted hover:text-velmora-charcoal transition-colors p-1 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-velmora-muted text-xs mt-0.5 capitalize">{item.color}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 py-1.5 text-sm font-medium text-velmora-charcoal min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-velmora-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-velmora-charcoal text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-dark transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 text-xs tracking-[0.15em] uppercase font-medium text-velmora-muted hover:text-velmora-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
