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
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe/20">
          <h2 className="font-serif text-xl font-medium">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-charcoal/60 hover:text-charcoal transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-taupe/50 mb-4" />
              <p className="text-taupe font-medium">Your cart is empty</p>
              <p className="text-sm text-taupe/70 mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-taupe/10">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-taupe/60 text-center px-1">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium tracking-product uppercase truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-taupe/30 text-charcoal/70 hover:border-gold transition-colors bg-transparent rounded-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-taupe/30 text-charcoal/70 hover:border-gold transition-colors bg-transparent rounded-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-taupe/60 hover:text-charcoal transition-colors self-start bg-transparent border-none p-0"
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
          <div className="px-6 py-5 border-t border-taupe/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="text-lg font-serif font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full py-3.5 bg-gold hover:bg-gold-dark text-cream font-sans text-sm font-semibold uppercase tracking-product transition-colors border-none cursor-pointer">
              Checkout
            </button>
            <p className="text-xs text-taupe text-center mt-3">Free shipping on orders over $75</p>
          </div>
        )}
      </div>
    </>
  );
}
