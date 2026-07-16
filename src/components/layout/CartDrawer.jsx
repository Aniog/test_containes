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
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl font-light text-brand-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-brand-charcoal hover:text-brand-gold transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-sand mb-4" />
              <p className="font-serif text-lg text-brand-charcoal">Your cart is empty</p>
              <p className="text-sm text-brand-muted mt-2 font-sans">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-6 border-b border-brand-sand/50">
                  <div className="w-20 h-20 bg-brand-ivory flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 font-sans capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1 font-sans">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-sand text-brand-charcoal bg-transparent hover:border-brand-gold transition-colors rounded-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-sand text-brand-charcoal bg-transparent hover:border-brand-gold transition-colors rounded-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal transition-colors bg-transparent border-none font-sans underline"
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
              <span className="font-sans text-sm text-brand-muted">Subtotal</span>
              <span className="font-sans text-lg font-medium text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-brand-gold text-white py-3.5 font-sans text-sm uppercase tracking-wide-xl hover:bg-brand-gold-dark transition-colors border-none cursor-pointer">
              Checkout
            </button>
            <p className="text-center text-xs text-brand-muted mt-3 font-sans">Free shipping on orders over $75</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
