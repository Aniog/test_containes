import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, itemCount, totalPrice, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-surface shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-serif text-xl text-text-primary">
            Your Bag ({itemCount})
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-background rounded-full transition-colors" aria-label="Close cart">
            <X className="w-5 h-5 text-text-primary" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-text-secondary mb-2">Your bag is empty</p>
              <p className="text-sm text-text-muted">Discover our collection of demi-fine jewelry</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-stone-100 flex-shrink-0 overflow-hidden rounded-sm">
                    <img
                      src={`https://images.unsplash.com/photo-1611583027838-515a1087afdb?w=200&h=200&fit=crop`}
                      alt={item.shortName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm tracking-wider uppercase text-text-primary truncate">
                      {item.shortName}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 hover:bg-background transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-text-secondary" />
                        </button>
                        <span className="px-3 text-sm text-text-primary">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-background transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-text-secondary" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(index)}
                          className="p-1.5 text-text-muted hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Subtotal</span>
              <span className="font-serif text-lg text-text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-accent hover:bg-accent-hover text-white py-3.5 text-sm tracking-widest uppercase transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full border border-border text-text-primary py-3 text-sm tracking-widest uppercase hover:bg-background transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
