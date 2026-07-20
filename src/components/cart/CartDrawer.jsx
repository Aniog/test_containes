import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-brand-cream shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-warm">
          <h2 className="font-serif text-xl text-brand-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-brand-muted hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-muted-light mb-4" />
              <p className="font-serif text-lg text-brand-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-brand-muted">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-brand-ivory rounded flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-sans font-medium tracking-product uppercase text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-brand-warm rounded flex items-center justify-center text-brand-muted hover:border-brand-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-brand-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-brand-warm rounded flex items-center justify-center text-brand-muted hover:border-brand-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-brand-muted-light hover:text-brand-charcoal transition-colors self-start"
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
          <div className="px-6 py-5 border-t border-brand-warm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${subtotal}</span>
            </div>
            <p className="text-xs text-brand-muted-light mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-brand-charcoal text-brand-cream py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:bg-brand-graphite transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
