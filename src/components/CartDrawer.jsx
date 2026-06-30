import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-base/40 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl text-base">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-1 text-base hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-muted">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
              <p className="font-sans text-sm">Your bag is empty</p>
              <p className="font-sans text-xs mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-hairline flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-sans text-xs uppercase tracking-widest font-medium text-base truncate">
                          {item.name}
                        </p>
                        {item.variant && (
                          <p className="font-sans text-xs text-text-muted mt-0.5 capitalize">
                            {item.variant}
                          </p>
                        )}
                        <p className="font-sans text-sm text-base mt-1">
                          ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-text-muted hover:text-base transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.variant,
                            item.quantity - 1
                          )
                        }
                        className="w-7 h-7 border border-hairline flex items-center justify-center text-base hover:border-base transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-base w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.variant,
                            item.quantity + 1
                          )
                        }
                        className="w-7 h-7 border border-hairline flex items-center justify-center text-base hover:border-base transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
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
          <div className="px-6 py-5 border-t border-hairline bg-surface">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-text-secondary">
                Subtotal
              </span>
              <span className="font-sans text-base font-medium text-base">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-text-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-base font-sans text-xs uppercase tracking-widest font-medium py-4 hover:bg-gold-dark transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 border border-base text-base font-sans text-xs uppercase tracking-widest font-medium py-3 hover:bg-base hover:text-surface transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
