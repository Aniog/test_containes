import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

export function CartDrawer() {
  const { 
    cart, 
    cartTotal, 
    cartCount, 
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

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setIsCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/30 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-lightTaupe/30">
            <h2 className="font-serif text-xl tracking-wide">YOUR BAG ({cartCount})</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-charcoal/60 hover:text-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-charcoal/5 flex items-center justify-center mb-4">
                  <ShoppingBag size={28} className="text-charcoal/40" />
                </div>
                <p className="font-serif text-lg text-charcoal/60 mb-6">
                  Your bag is empty
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={`${item.product.id}-${item.variant.name}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-charcoal/5 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-extra-wide uppercase text-charcoal truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-charcoal/60 mt-1">
                        {item.variant.name}
                      </p>
                      <p className="font-sans text-sm font-medium text-charcoal mt-2">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-charcoal/20 rounded">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.name, item.quantity - 1)}
                            className="p-2 text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.name, item.quantity + 1)}
                            className="p-2 text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant.name)}
                          className="text-xs text-charcoal/50 hover:text-charcoal underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-lightTaupe/30 px-6 py-6 bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-charcoal/70">Subtotal</span>
                <span className="font-sans font-medium text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal/50 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <div className="space-y-3">
                <Button 
                  variant="gold" 
                  className="w-full" 
                  isLoading={isLoading}
                >
                  Checkout
                </Button>
                <Link 
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full text-center py-3 text-sm text-charcoal/70 hover:text-charcoal transition-colors underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
