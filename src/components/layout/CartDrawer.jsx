import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <h2 className="font-serif text-xl font-semibold text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-warm-gray hover:text-charcoal transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-warm-gray mt-1">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-stone last:border-0">
                  <div className="w-20 h-20 bg-stone/50 rounded flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.1em] text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-warm-gray capitalize mt-0.5">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-stone rounded bg-transparent text-charcoal hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-stone rounded bg-transparent text-charcoal hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="p-1 text-warm-gray hover:text-charcoal transition-colors self-start bg-transparent border-none"
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
          <div className="px-6 py-5 border-t border-stone">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-warm-gray uppercase tracking-wide">Subtotal</span>
              <span className="text-lg font-serif font-semibold text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gold text-white py-3.5 text-sm font-sans font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors rounded-none border-none cursor-pointer">
              Checkout
            </button>
            <p className="text-xs text-warm-gray text-center mt-3">Free shipping on orders over $75</p>
          </div>
        )}
      </div>
    </>
  );
}
