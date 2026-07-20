import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="serif-heading text-2xl">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-muted-foreground mb-4" />
              <p className="serif-heading text-xl mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mb-6">Discover pieces you'll love</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-secondary rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent/20" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-sm mb-1">{item.shortName}</p>
                    <p className="text-xs text-muted-foreground capitalize mb-2">{item.variant} tone</p>
                    <p className="text-sm font-medium">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:border-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:border-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-muted-foreground hover:text-destructive transition-colors underline"
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
            <div className="flex justify-between mb-4">
              <span className="text-sm">Subtotal</span>
              <span className="text-lg font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
