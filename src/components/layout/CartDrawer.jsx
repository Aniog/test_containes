import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] transition-opacity"
        style={{ backgroundColor: 'rgba(26,26,26,0.4)' }}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md z-[70] shadow-xl flex flex-col" style={{ backgroundColor: '#FAF7F2' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-2xl text-charcoal">Your Cart</h2>
          <button onClick={closeCart} className="text-charcoal hover:text-accent transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted mb-4" />
              <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-muted">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted-bg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted capitalize mt-0.5">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-muted hover:text-accent underline transition-colors"
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
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-wider text-muted">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout</p>
            <button
              className="w-full py-3.5 text-sm uppercase tracking-wider font-medium transition-colors"
              style={{ backgroundColor: '#B8860B', color: '#FAF7F2' }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
