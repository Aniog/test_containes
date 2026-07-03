import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    cart, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    isLoading 
  } = useCart();

  // Prevent body scroll when drawer is open
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
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsCartOpen]);

  const formatPrice = (price) => {
    return `$${price.toFixed(0)}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8E4DC]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
            <h2 className="font-serif text-lg tracking-wide">Your Cart</h2>
            {cart.length > 0 && (
              <span className="text-sm text-[#9A9590]">({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 hover:bg-[#F5F2ED] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
          </button>
        </div>

        {/* Cart Content */}
        <div className="h-[calc(100%-80px)] flex flex-col">
          {cart.length === 0 ? (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-[#F5F2ED] flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8 text-[#9A9590]" />
              </div>
              <p className="font-serif text-lg text-[#2D2926] mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6B6560] mb-6">Discover our collection of demi-fine jewelry</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.map((item) => (
                  <div 
                    key={`${item.id}-${item.variant || 'default'}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <Link 
                      to={`/product/${item.slug}`}
                      onClick={() => setIsCartOpen(false)}
                      className="w-24 h-24 flex-shrink-0 bg-[#F5F2ED] overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div className="min-w-0">
                          <Link 
                            to={`/product/${item.slug}`}
                            onClick={() => setIsCartOpen(false)}
                          >
                            <h3 className="product-name text-[11px] text-[#2D2926] hover:text-[#C9A962] transition-colors truncate">
                              {item.name}
                            </h3>
                          </Link>
                          {item.variant && (
                            <p className="text-xs text-[#9A9590] mt-1">{item.variant}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="p-1 -mr-1 text-[#9A9590] hover:text-[#2D2926] transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-[#E8E4DC] rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-[#F5F2ED] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-[#F5F2ED] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium text-[#2D2926]">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#E8E4DC] p-6 bg-white">
                {/* Subtotal */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#6B6560]">Subtotal</span>
                  <span className="font-medium text-[#2D2926]">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <p className="text-xs text-[#9A9590] mb-4">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Checkout Button */}
                <button
                  className="btn btn-primary w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </button>

                {/* Continue Shopping */}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-3 text-sm text-[#6B6560] hover:text-[#C9A962] transition-colors py-2"
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
