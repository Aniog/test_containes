import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const {
    cart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    isLoading,
    removeFromCart,
    updateQuantity,
  } = useCart();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-xl animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">
            Your Bag
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-16 h-16 text-sand mb-4" />
            <p className="font-serif text-lg text-charcoal mb-2">
              Your bag is empty
            </p>
            <p className="text-sm text-warmgray mb-6">
              Discover our collection of demi-fine jewelry
            </p>
            <Button
              variant="primary"
              onClick={() => setIsCartOpen(false)}
            >
              <Link to="/collection" className="text-ivory">
                Shop Now
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 flex-shrink-0 bg-sand overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-product-name text-xs text-charcoal">
                            {item.name}
                          </h3>
                          <p className="text-xs text-warmgray mt-1">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="p-1 text-warmgray hover:text-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-sand">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.variant,
                                item.quantity - 1
                              )
                            }
                            className="p-2 text-charcoal hover:text-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.variant,
                                item.quantity + 1
                              )
                            }
                            className="p-2 text-charcoal hover:text-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-sans text-sm font-medium text-charcoal">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-sand px-6 py-6 bg-cream">
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-sm text-warmgray">Subtotal</span>
                <span className="font-serif text-lg text-charcoal">
                  {formatPrice(cartTotal)}
                </span>
              </div>
              <p className="text-xs text-warmgray mb-4 text-center">
                Shipping and taxes calculated at checkout
              </p>
              <Button
                variant="primary"
                size="full"
                loading={isLoading}
              >
                <Link to="/checkout" className="text-ivory">
                  Checkout
                </Link>
              </Button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-sm text-charcoal hover:text-gold transition-colors text-center"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
