import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-0 bg-transparent border-none text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-warm mb-4" />
              <p className="text-sm text-warm-gray">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-gold text-gold px-6 py-2 text-xs uppercase tracking-[0.15em] font-sans bg-transparent hover:bg-gold hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Thumbnail placeholder */}
                  <div className="w-20 h-24 bg-muted flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-[11px] uppercase tracking-[0.12em] text-charcoal font-sans font-medium">
                          {item.name}
                        </h3>
                        <p className="text-xs text-warm-gray mt-1 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-0 bg-transparent border-none text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-warm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 bg-transparent border-none text-charcoal hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-sans">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 bg-transparent border-none text-charcoal hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm text-charcoal font-sans">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-warm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-[0.1em] text-warm-gray">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-warm-gray mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-cream py-3.5 text-xs uppercase tracking-[0.15em] font-sans font-medium border-none hover:bg-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
