import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-2xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-charcoal hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-fg">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
              <p className="font-sans text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs uppercase tracking-product text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-fg mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border text-charcoal hover:border-accent transition-colors bg-transparent p-0"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border text-charcoal hover:border-accent transition-colors bg-transparent p-0"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-muted-fg hover:text-charcoal transition-colors self-start bg-transparent border-none p-0"
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
          <div className="border-t border-border px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-muted-fg uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-accent text-cream py-3.5 font-sans text-sm uppercase tracking-wider hover:bg-accent-light transition-colors">
              Checkout
            </button>
            <p className="text-center text-xs text-muted-fg mt-3">Free shipping on all orders</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
