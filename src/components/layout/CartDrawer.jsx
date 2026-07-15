import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-warm">
          <h2 className="font-serif text-xl font-light text-brand-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-brand-charcoal hover:text-brand-muted transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-light-muted mb-4" />
              <p className="font-serif text-lg text-brand-muted">Your cart is empty</p>
              <p className="text-sm text-brand-light-muted mt-2">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-brand-warm">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-brand-ivory rounded-sm flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-product uppercase text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-warm text-brand-charcoal bg-transparent hover:bg-brand-ivory transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-warm text-brand-charcoal bg-transparent hover:bg-brand-ivory transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-light-muted hover:text-brand-charcoal transition-colors bg-transparent border-none underline"
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
          <div className="px-6 py-5 border-t border-brand-warm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-light-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-charcoal text-brand-cream font-sans text-xs tracking-widest uppercase py-4 hover:bg-brand-dark transition-colors border-none cursor-pointer">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
