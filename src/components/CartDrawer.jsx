import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-brand-warm">
          <h2 className="font-serif text-2xl text-brand-charcoal">Your Cart ({totalItems})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-brand-warm rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-brand-charcoal" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
            <ShoppingBag className="w-12 h-12 text-brand-muted-light" />
            <p className="text-brand-muted font-sans text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-brand-ivory flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-warm hover:border-brand-gold transition-colors bg-transparent"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-warm hover:border-brand-gold transition-colors bg-transparent"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal underline bg-transparent border-none p-0"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-brand-warm space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-brand-muted">Subtotal</span>
                <span className="text-lg font-serif text-brand-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-brand-muted-light">Shipping calculated at checkout</p>
              <button className="w-full bg-brand-charcoal text-brand-cream py-4 text-sm tracking-wider uppercase font-sans hover:bg-brand-graphite transition-colors duration-300">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
