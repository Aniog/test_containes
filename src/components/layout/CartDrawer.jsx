import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();
  const drawerRef = useRef(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, setIsCartOpen]);

  // Prevent body scroll when open
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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-velvet/50 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory z-50 shadow-xl transform transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velvet" />
            <h2 className="font-serif text-xl text-velvet">Your Bag</h2>
            {cart.length > 0 && (
              <span className="text-sm text-taupe">
                ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-mocha hover:text-velvet transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-taupe" />
            </div>
            <h3 className="font-serif text-xl text-velvet mb-2">Your bag is empty</h3>
            <p className="text-taupe text-sm mb-8">
              Discover our collection of demi-fine gold jewelry.
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-linen last:border-0"
                >
                  {/* Image */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="w-24 h-32 bg-cream rounded overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2 mb-1">
                      <h3 className="font-serif text-product text-velvet leading-tight">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-taupe hover:text-velvet transition-colors flex-shrink-0"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-taupe mb-3 capitalize">
                      {item.variant} Gold
                    </p>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-linen rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 text-mocha hover:text-velvet transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-velvet min-w-[32px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 text-mocha hover:text-velvet transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <p className="font-medium text-velvet">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-linen px-6 py-6 bg-cream/50">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-mocha">Subtotal</span>
                <span className="font-medium text-velvet">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              
              <p className="text-xs text-taupe mb-6">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="w-full btn-primary flex items-center justify-center gap-2 mb-3">
                Proceed to Checkout
              </button>
              
              {/* Continue Shopping */}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm text-mocha hover:text-velvet transition-colors py-2"
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
