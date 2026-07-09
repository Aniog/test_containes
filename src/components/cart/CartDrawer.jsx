import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-heading">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal hover:text-accent transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="text-muted text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-accent font-medium hover:text-accent-hover transition-colors bg-transparent border-none underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div
                  key={`${item.product.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-muted text-center px-1">
                      {item.product.name}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium text-heading uppercase tracking-product truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border text-charcoal hover:border-accent transition-colors bg-transparent rounded-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border text-charcoal hover:border-accent transition-colors bg-transparent rounded-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id, item.variant)}
                    className="text-muted hover:text-charcoal transition-colors self-start bg-transparent border-none p-1"
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
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-lg font-serif font-semibold text-heading">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full py-3.5 bg-accent text-white text-sm font-medium uppercase tracking-wider hover:bg-accent-hover transition-colors border-none rounded-none">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
