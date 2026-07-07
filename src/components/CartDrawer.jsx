import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { StrkImage } from '@/components/Image';

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, count, updateQuantity, removeFromCart } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-foreground/40" onClick={closeCart} />
      <div
        ref={drawerRef}
        className={cn(
          'absolute top-0 right-0 h-full w-full max-w-md bg-background shadow-lifted flex flex-col',
          'transition-transform duration-500 ease-out-expo',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-border">
          <h2 className="font-serif text-lg uppercase tracking-[0.16em]">
            Your Cart ({count})
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <ShoppingBag className="w-12 h-12 text-border-strong mb-4" />
            <p className="font-serif text-lg uppercase tracking-wide mb-2">Your cart is empty</p>
            <p className="text-sm text-muted-foreground mb-6">Discover something beautiful today.</p>
            <button
              type="button"
              onClick={closeCart}
              className="px-8 py-3 bg-accent text-accent-foreground text-xs uppercase tracking-[0.16em] font-medium hover:bg-accent-hover transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-muted flex-shrink-0 overflow-hidden">
                    <StrkImage
                      id={`cart-${item.id}`}
                      query={`[cart-${item.id}-name] ${item.imgQuery}`}
                      ratio="3x4"
                      width={200}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p id={`cart-${item.id}-name`} className="font-serif text-sm uppercase tracking-wide truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-muted transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-muted transition-colors"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-5 md:p-6 bg-background">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-5">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full py-4 bg-accent text-accent-foreground text-xs uppercase tracking-[0.16em] font-medium hover:bg-accent-hover transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full mt-3 py-3 border border-border text-xs uppercase tracking-[0.16em] font-medium hover:bg-muted transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
