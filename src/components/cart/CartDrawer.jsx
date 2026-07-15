import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-warm">
          <h2 className="font-serif text-2xl text-brand-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-brand-ivory rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-brand-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-warm mb-4" />
              <p className="font-serif text-xl text-brand-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-brand-muted">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-brand-warm last:border-0">
                  <div className="w-20 h-20 bg-brand-ivory rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted capitalize mt-0.5">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-warm rounded-sm hover:bg-brand-ivory transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-brand-charcoal" />
                      </button>
                      <span className="text-sm text-brand-charcoal w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-warm rounded-sm hover:bg-brand-ivory transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-brand-charcoal" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="self-start p-1 hover:bg-brand-ivory rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4 text-brand-muted" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-brand-warm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-brand-muted uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-brand-gold text-white py-3.5 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors">
              Checkout
            </button>
            <p className="text-xs text-brand-light-muted text-center mt-3">
              Free shipping on orders over $75
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
