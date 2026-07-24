import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-surface z-50 shadow-xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border-light">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-brand-text" />
              <span className="font-sans text-sm font-medium text-brand-text">
                Cart ({totalItems})
              </span>
            </div>
            <button onClick={closeCart} className="p-1 hover:opacity-60 transition-opacity">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-brand-text-muted mb-4" />
                <p className="font-serif text-lg text-brand-text-secondary mb-2">Your cart is empty</p>
                <p className="font-sans text-sm text-brand-text-muted">Add some treasures to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4 pb-4 border-b border-brand-border-light">
                    <div className="w-20 h-20 bg-brand-surface-alt rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-brand-accent" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="product-name text-xs mb-0.5 truncate">{item.name}</h4>
                      <p className="font-sans text-xs text-brand-text-muted capitalize mb-2">
                        {item.variant}
                      </p>
                      <p className="font-sans text-sm font-medium text-brand-text">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-brand-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1 hover:bg-brand-surface-alt transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1 hover:bg-brand-surface-alt transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="text-xs text-brand-text-muted hover:text-brand-text underline transition-colors"
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
            <div className="border-t border-brand-border-light px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-brand-text-secondary">Subtotal</span>
                <span className="font-sans text-base font-medium text-brand-text">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="font-sans text-xs text-brand-text-muted">Shipping calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout — ${totalPrice.toFixed(2)}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}