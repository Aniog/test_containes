import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[70] flex flex-col shadow-[-4px_0_20px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-light">
          <h2 className="font-serif text-xl tracking-[0.05em]">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="p-1 hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-text-muted text-sm mb-2">Your cart is empty</p>
              <p className="text-text-muted text-xs">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map(item => (
                <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-cream flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-text-muted uppercase tracking-wider">
                      {item.product.category}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-sm tracking-wide">{item.product.name}</h3>
                      <p className="text-[11px] text-text-muted mt-0.5">{item.variant}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-border flex items-center justify-center hover:border-accent transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-border flex items-center justify-center hover:border-accent transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${item.product.price * item.quantity}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id, item.variant)}
                    className="self-start p-1 hover:opacity-70 transition-opacity"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <X className="w-3.5 h-3.5 text-text-muted" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border-light">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">Subtotal</span>
              <span className="text-lg font-serif">${totalPrice}</span>
            </div>
            <p className="text-[11px] text-text-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full h-12 bg-accent text-white text-[12px] uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors duration-200">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
