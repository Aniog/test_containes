import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { 
    cartItems, 
    cartCount, 
    cartSubtotal, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity 
  } = useCart();

  // Prevent body scroll when cart is open
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

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-100 shadow-lift flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-lg font-semibold tracking-wide text-charcoal">
            Your Cart ({cartCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-ivory flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-warm-gray" strokeWidth={1.5} />
            </div>
            <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
            <p className="text-sm text-warm-gray mb-8">
              Discover our collection of demi-fine jewelry
            </p>
            <button
              onClick={closeCart}
              className="btn-secondary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div 
                    key={`${item.product.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-30 bg-ivory flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0].url}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="product-name text-sm leading-tight mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-warm-gray capitalize">
                            {item.variant} tone
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="p-1 -mr-1 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-sand">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="p-2 text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={2} />
                          </button>
                          <span className="w-8 text-center text-sm text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="p-2 text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={2} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-sm font-medium text-charcoal">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-sand px-6 py-6 bg-cream-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-charcoal">Subtotal</span>
                <span className="font-serif text-lg font-semibold text-charcoal">
                  ${cartSubtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-warm-gray mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <Link
                to="/collection"
                onClick={closeCart}
                className="block text-center text-sm text-charcoal/60 hover:text-gold transition-colors mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
