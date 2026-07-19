import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={closeCart} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-surface)] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:bg-[var(--velmora-bg-alt)] rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <p className="velmora-serif text-xl text-[var(--velmora-text-muted)] mb-2">Your cart is empty</p>
              <p className="text-sm text-[var(--velmora-text-light)]">Discover our collection of demi-fine jewelry</p>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--velmora-bg-alt)] flex-shrink-0 rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-[var(--velmora-border-light)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-product-name text-sm text-[var(--velmora-dark)] truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mt-1">
                      {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-[var(--velmora-border)]">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="p-1.5 text-[var(--velmora-text-light)] hover:text-red-500 transition-colors"
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
          <div className="border-t border-[var(--velmora-border)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--velmora-text-muted)]">Subtotal</span>
              <span className="velmora-serif text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-light)]">Shipping and taxes calculated at checkout</p>
            <button className="velmora-btn-accent w-full">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="velmora-btn-outline w-full"
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
