import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, totalPrice, totalItems, setCartOpen, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-surface shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h2 className="font-serif text-lg uppercase tracking-wider">Cart</h2>
            <p className="text-xs text-foreground-muted mt-0.5">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 text-foreground-muted hover:text-foreground transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6" style={{ height: 'calc(100% - 140px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-foreground-muted/40 mb-4" />
              <p className="text-foreground-muted text-sm">Your cart is empty</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => setCartOpen(false)}
              >
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.productId} className="flex gap-4 pb-6 border-b border-border last:border-0">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 flex-shrink-0 bg-muted flex items-center justify-center">
                    <span className="text-[10px] text-foreground-muted uppercase tracking-wider text-center leading-tight px-1">
                      {item.name}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors truncate"
                        onClick={() => setCartOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-foreground-muted hover:text-foreground transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-foreground-muted mt-0.5 capitalize">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-foreground mt-1">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-muted transition-colors"
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
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-border bg-surface">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-wider">Total</span>
              <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={() => {}}>
              Checkout
            </Button>
            <p className="text-[11px] text-foreground-muted text-center mt-3">
              Free shipping on orders over $75
            </p>
          </div>
        )}
      </div>
    </>
  );
}