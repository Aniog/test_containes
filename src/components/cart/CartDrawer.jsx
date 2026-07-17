import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, count } = useCart();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-velmora-text/30 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-bg shadow-2xl transition-transform duration-500 ease-out-editorial flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-hairline px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest-plus text-velmora-text">
            Your Cart ({count})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-muted hover:text-velmora-text transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="mb-4 text-velmora-sand" strokeWidth={1} />
            <p className="font-serif text-lg uppercase tracking-widest text-velmora-text">
              Your cart is empty
            </p>
            <p className="mt-2 text-sm text-velmora-muted">
              Discover pieces crafted to be treasured.
            </p>
            <Button onClick={closeCart} className="mt-8">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden border border-velmora-hairline bg-velmora-surface">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-text">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-xs capitalize text-velmora-muted">
                        {item.variant} tone
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-velmora-hairline">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-1 text-velmora-muted hover:text-velmora-text"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 text-sm tabular-nums text-velmora-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-1 text-velmora-muted hover:text-velmora-text"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-velmora-text">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-velmora-sand hover:text-velmora-accent transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-hairline px-6 py-6 bg-velmora-surface">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm uppercase tracking-widest text-velmora-muted">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-velmora-text">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-velmora-muted mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full">Checkout</Button>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-sm text-velmora-muted hover:text-velmora-text transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
