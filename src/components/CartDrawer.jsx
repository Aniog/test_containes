import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-2xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-charcoal hover:text-gold transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-fg">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <p className="font-sans text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs tracking-product uppercase text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-fg mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border text-charcoal hover:border-gold transition-colors duration-300"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border text-charcoal hover:border-gold transition-colors duration-300"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-muted-fg hover:text-gold underline transition-colors duration-300"
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
          <div className="border-t border-border px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-muted-fg">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gold text-cream py-3.5 font-sans text-xs tracking-wide-btn uppercase hover:bg-gold-light transition-colors duration-300">
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
