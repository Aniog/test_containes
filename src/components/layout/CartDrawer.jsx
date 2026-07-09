import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-mid-gray/30">
          <h2 className="font-serif text-xl text-brand-charcoal tracking-wide">Your Bag</h2>
          <button
            onClick={closeCart}
            className="text-brand-warm-gray hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-brand-mid-gray mb-4" />
              <p className="font-serif text-lg text-brand-charcoal mb-2">Your bag is empty</p>
              <p className="font-sans text-sm text-brand-warm-gray">Discover our collection and add your favorites.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.color}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-brand-cream flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-brand-warm-gray mt-1">{item.color}</p>
                    <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                        className="w-7 h-7 border border-brand-mid-gray flex items-center justify-center text-brand-warm-gray hover:border-brand-charcoal hover:text-brand-charcoal transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm text-brand-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                        className="w-7 h-7 border border-brand-mid-gray flex items-center justify-center text-brand-warm-gray hover:border-brand-charcoal hover:text-brand-charcoal transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.color)}
                        className="ml-auto font-sans text-[10px] uppercase tracking-ultra-wide text-brand-warm-gray hover:text-red-500 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-mid-gray/30 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-brand-warm-gray">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">{formatPrice(subtotal)}</span>
            </div>
            <p className="font-sans text-[11px] text-brand-warm-gray">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
