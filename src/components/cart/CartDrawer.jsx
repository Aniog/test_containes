import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart();
  const drawerRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[100] bg-velmora-espresso/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed inset-y-0 right-0 z-[110] w-full sm:max-w-md bg-velmora-cream shadow-lift transform transition-transform duration-300 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-velmora-hairline">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velmora-charcoal" />
            <h2 className="font-serif text-2xl text-velmora-charcoal">Your Cart</h2>
            <span className="text-xs text-velmora-taupe uppercase tracking-wider">
              ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-3 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-hairline mb-4" />
            <p className="font-serif text-xl text-velmora-charcoal mb-2">
              Your cart is empty
            </p>
            <p className="text-sm text-velmora-taupe mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <button type="button" onClick={closeCart} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-velmora-hairline last:border-0"
                >
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name truncate">{item.name}</h3>
                    <p className="text-xs text-velmora-taupe mt-1 capitalize">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-2">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-velmora-hairline flex items-center justify-center text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-velmora-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-velmora-hairline flex items-center justify-center text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto p-1.5 text-velmora-taupe hover:text-velmora-error transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-hairline px-6 py-6 space-y-4 bg-velmora-white">
              <div className="flex items-center justify-between text-velmora-charcoal">
                <span className="text-sm">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <button type="button" className="btn-primary w-full">Checkout</button>
              <button
                type="button"
                onClick={closeCart}
                className="btn-secondary w-full bg-transparent"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
