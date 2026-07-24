import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-brand-espresso/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl text-brand-espresso">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-brand-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-taupe mb-4" />
              <p className="font-serif text-lg text-brand-charcoal">Your cart is empty</p>
              <p className="text-sm text-brand-muted mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-5 border-b border-brand-sand/50">
                  <div className="w-20 h-20 bg-brand-ivory rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-product text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand bg-transparent rounded-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-brand-charcoal" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand bg-transparent rounded-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-brand-charcoal" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal bg-transparent border-none underline"
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
          <div className="px-6 py-5 border-t border-brand-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-brand-muted">Subtotal</span>
              <span className="text-lg font-serif text-brand-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full py-3.5 bg-brand-charcoal text-brand-cream text-sm font-sans font-medium uppercase tracking-wide-xl rounded-sm hover:bg-brand-espresso transition-colors duration-300 border-none cursor-pointer">
              Checkout
            </button>
            <p className="text-xs text-brand-muted text-center mt-3">
              Free shipping on orders over $75
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
