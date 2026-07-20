import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[70] shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-text-primary" />
            <h2 className="font-serif text-lg font-medium text-text-primary">
              Your Bag ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:opacity-70 transition-opacity text-text-primary"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-border mb-4" />
              <p className="font-serif text-lg text-text-primary mb-2">Your bag is empty</p>
              <p className="text-sm text-text-secondary">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 rounded-md overflow-hidden bg-surface-alt flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-medium text-text-primary truncate">{item.name}</h3>
                        <p className="text-xs text-text-secondary mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-text-secondary hover:text-text-primary transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-highlight transition-colors text-text-primary"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 py-1 text-xs font-medium text-text-primary min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-highlight transition-colors text-text-primary"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border bg-surface">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-text-secondary">Subtotal</span>
              <span className="text-sm font-medium text-text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-secondary mb-4">Shipping calculated at checkout</p>
            <button className="btn-primary w-full text-center text-sm">
              Checkout — ${totalPrice.toFixed(2)}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs text-text-secondary hover:text-text-primary mt-3 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
