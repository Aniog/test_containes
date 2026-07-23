import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    subtotal,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart();

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
          'fixed inset-0 bg-charcoal/50 z-[200] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-[201]',
          'transform transition-transform duration-300 ease-smooth',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-light-gray">
          <h2
            className="text-lg font-serif tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Your Bag ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-warm-gray" />
            </div>
            <p className="text-warm-gray mb-6">Your bag is empty</p>
            <Button onClick={closeCart} variant="secondary">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.variant || 'default'}`}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0 bg-ivory overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3
                            className="text-sm font-serif uppercase tracking-product text-charcoal"
                            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                          >
                            {item.product.name}
                          </h3>
                          {item.variant && (
                            <p className="text-xs text-warm-gray mt-0.5 capitalize">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="p-1 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-light-gray">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.variant
                              )
                            }
                            className="p-2 text-charcoal hover:text-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1,
                                item.variant
                              )
                            }
                            className="p-2 text-charcoal hover:text-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-sm font-medium">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-light-gray px-6 py-6 bg-warm-white">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-warm-gray">Subtotal</span>
                <span className="text-lg font-medium">{formatPrice(subtotal)}</span>
              </div>

              {/* Shipping note */}
              <p className="text-xs text-warm-gray mb-6">
                Shipping & taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <Button fullWidth size="lg">
                Checkout
              </Button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-warm-gray hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
