import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    getCartTotal,
    getCartCount
  } = useCart();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    
    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const cartTotal = getCartTotal();
  const itemCount = getCartCount();

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-white z-50 
                   shadow-2xl transform transition-transform duration-300 ease-smooth
                   flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cream">
          <h2 className="font-serif text-xl text-charcoal">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-cream rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-softGray mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-softGray mb-6">
                Discover our collection of demi-fine gold jewelry
              </p>
              <Button variant="primary" onClick={closeCart}>
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((item, index) => (
                <li 
                  key={`${item.id}-${item.variant}-${index}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <Link 
                    to={`/product/${item.slug}`} 
                    onClick={closeCart}
                    className="flex-shrink-0"
                  >
                    <div className="w-24 h-32 bg-cream overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link 
                          to={`/product/${item.slug}`}
                          onClick={closeCart}
                        >
                          <h3 className="font-serif text-sm text-charcoal tracking-ultra uppercase hover:text-gold-500 transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-softGray mt-1">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-1 hover:text-gold-500 transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-cream">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-sans">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-sans text-sm text-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cart.length > 0 && (
          <div className="border-t border-cream p-6 space-y-4 bg-warm-white">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-warmGray">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            
            {/* Shipping Note */}
            <p className="text-xs text-center text-softGray">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth
              onClick={() => {
                // Future: integrate with checkout
                alert('Checkout integration coming soon!');
              }}
            >
              CHECKOUT
            </Button>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-warmGray hover:text-gold-500 transition-colors font-sans"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
