import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-elevated',
          'transform transition-transform duration-350 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-surface-dark">
          <h2 className="font-serif text-xl">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-surface rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] px-6 text-center">
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-text-muted" strokeWidth={1.5} />
            </div>
            <p className="font-serif text-lg text-text-secondary mb-2">Your bag is empty</p>
            <p className="text-sm text-text-muted mb-6">
              Discover our collection of fine jewelry pieces.
            </p>
            <Button onClick={closeCart} variant="secondary">
              <Link to="/collection">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-24 bg-surface rounded overflow-hidden flex-shrink-0">
                      <img
                        src={`https://picsum.photos/seed/${item.imageId}/160/192`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium mt-1">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-surface-dark rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                            className="p-1.5 hover:bg-surface transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={2} />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                            className="p-1.5 hover:bg-surface transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={2} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-text-muted hover:text-primary transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-surface-dark px-6 py-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-text-muted mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <Button variant="primary" size="full" className="mb-2">
                Checkout
              </Button>
              <Button
                variant="ghost"
                size="full"
                onClick={closeCart}
                className="text-text-secondary"
              >
                <Link to="/collection" className="block w-full">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
