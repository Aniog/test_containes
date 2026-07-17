import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

const CartDrawer = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    subtotal,
    itemCount 
  } = useCart();

  // Prevent body scroll when cart is open
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

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'cart-overlay',
          isOpen && 'open'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-surface)] z-50 transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <h2 className="font-serif text-xl font-medium">
            Your Cart {itemCount > 0 && `(${itemCount})`}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[var(--color-border)] flex items-center justify-center mb-6">
              <ShoppingBag size={32} className="text-[var(--color-secondary)]" />
            </div>
            <p className="font-serif text-xl text-[var(--color-dark)] mb-2">
              Your cart is empty
            </p>
            <p className="font-sans text-sm text-[var(--color-secondary)] mb-8">
              Discover our collection of fine jewelry
            </p>
            <Button onClick={closeCart} variant="primary">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item, index) => (
                <div 
                  key={`${item.product.id}-${item.variant}`} 
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <Link 
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    className="w-24 h-28 bg-[var(--color-background)] flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <div>
                        <Link 
                          to={`/product/${item.product.id}`}
                          onClick={closeCart}
                        >
                          <h3 className="product-name text-[var(--color-dark)] text-xs hover:text-[var(--color-accent)] transition-colors">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="font-sans text-xs text-[var(--color-secondary)] mt-1">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-colors p-1 -mr-1"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <X size={16} />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[var(--color-border)]">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-colors disabled:opacity-50"
                          aria-label="Decrease quantity"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center font-sans text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--color-border)] p-6 bg-[var(--color-surface)]">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-[var(--color-secondary)]">
                  Subtotal
                </span>
                <span className="font-sans text-lg font-medium">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {/* Shipping Note */}
              {subtotal < 75 && (
                <p className="font-sans text-xs text-[var(--color-secondary)] mb-4 text-center">
                  Add {formatPrice(75 - subtotal)} more for free shipping
                </p>
              )}

              {/* Checkout Button */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => {
                  alert('Checkout functionality would connect to a payment processor');
                }}
              >
                Checkout
              </Button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full mt-3 font-sans text-sm text-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-colors text-center"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
