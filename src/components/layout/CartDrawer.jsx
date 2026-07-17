import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
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

  // Prevent body scroll when open
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
          'fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-ivory',
          'transform transition-transform duration-300 ease-silk',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-champagne">
            <h2 className="font-serif text-xl text-charcoal">Your Cart ({itemCount})</h2>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-stone hover:text-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-mist" />
              </div>
              <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="text-stone text-center mb-8">
                Discover our collection of fine jewelry crafted to be treasured.
              </p>
              <Button onClick={closeCart} variant="secondary">
                <Link to="/collection">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div
                      key={`${item.id}-${item.variant}-${index}`}
                      className="flex gap-4"
                    >
                      <div className="w-24 h-28 bg-cream flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-charcoal">
                              {item.name}
                            </h3>
                            {item.variant && (
                              <p className="text-xs text-stone mt-0.5">{item.variant}</p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="p-1 -mr-1 text-mist hover:text-charcoal transition-colors"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-gold font-medium mt-1">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-champagne">
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm text-charcoal">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-champagne px-6 py-6 space-y-4 bg-ivory">
                <div className="flex items-center justify-between">
                  <span className="text-stone">Subtotal</span>
                  <span className="font-medium text-charcoal">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-mist">
                  Shipping and taxes calculated at checkout
                </p>
                <Button fullWidth size="lg">
                  Checkout
                </Button>
                <button
                  onClick={closeCart}
                  className="w-full py-3 text-sm text-stone hover:text-gold transition-colors"
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
