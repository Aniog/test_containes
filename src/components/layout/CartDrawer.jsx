import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-cream)] z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="serif-heading text-xl">
            Your Bag ({totalItems})
          </h2>
          <button onClick={onClose} className="p-2 hover:text-[var(--velmora-accent)] transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="serif-heading text-xl text-[var(--velmora-text-muted)] mb-2">
                Your bag is empty
              </p>
              <p className="text-sm text-[var(--velmora-text-light)]">
                Discover our collection of demi-fine jewelry
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-24 bg-[var(--velmora-bg-alt)] flex-shrink-0 overflow-hidden rounded-sm">
                    <div className="w-full h-full bg-gradient-to-br from-[var(--velmora-gold-light)] to-[var(--velmora-border)] flex items-center justify-center">
                      <span className="text-[var(--velmora-warm-gray)] text-xs">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] capitalize mb-2">
                      {item.variant} tone
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[var(--velmora-border)]">
                        <button
                          className="p-1.5 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          className="p-1.5 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    className="text-[var(--velmora-text-light)] hover:text-[var(--velmora-accent)] transition-colors self-start"
                    onClick={() => removeItem(index)}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[var(--velmora-border)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--velmora-text-muted)]">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-light)]">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-accent w-full">
              Checkout
            </button>
            <button
              className="btn-outline w-full"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
