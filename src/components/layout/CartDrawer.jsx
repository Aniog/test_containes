import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui';
import { cn, formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-brand-bg-secondary border-l border-brand-border-subtle',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-border-subtle">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-brand-gold" />
              <h2 className="text-lg font-medium">Your Cart ({totalItems})</h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-brand-text-secondary hover:text-brand-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 mb-6 rounded-full bg-brand-bg-elevated flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-brand-text-tertiary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-sm text-brand-text-secondary mb-6">
                Discover our collection of fine jewelry
              </p>
              <Link to="/collection" onClick={closeCart}>
                <Button variant="secondary">Shop the Collection</Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <div
                      key={`${item.productId}-${item.variant}`}
                      className="flex gap-4"
                    >
                      {/* Image */}
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="w-24 h-24 flex-shrink-0 bg-brand-bg-elevated rounded-sm overflow-hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </Link>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="text-sm font-medium text-brand-text-primary">
                              {item.name}
                            </h4>
                            <p className="text-xs text-brand-text-secondary mt-0.5">
                              {item.variant}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.productId, item.variant)}
                            className="p-1 -mr-1 text-brand-text-tertiary hover:text-brand-error transition-colors"
                            aria-label="Remove item"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-brand-border-subtle">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.variant,
                                  item.quantity - 1
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center text-brand-text-secondary hover:text-brand-gold transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.variant,
                                  item.quantity + 1
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center text-brand-text-secondary hover:text-brand-gold transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="text-sm font-medium text-brand-gold">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-brand-border-subtle bg-brand-bg-secondary">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-brand-text-secondary">Subtotal</span>
                  <span className="text-lg font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-brand-text-tertiary mb-4">
                  Shipping and taxes calculated at checkout
                </p>
                <Button fullWidth size="lg">
                  Checkout
                </Button>
                <button
                  onClick={closeCart}
                  className="w-full mt-3 text-sm text-brand-text-secondary hover:text-brand-gold transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
