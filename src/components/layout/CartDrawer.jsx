import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const { 
    items, 
    isOpen, 
    itemCount, 
    subtotal, 
    closeCart, 
    removeItem, 
    updateQuantity 
  } = useCart();
  
  // Prevent body scroll when drawer is open
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
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[var(--z-overlay)] bg-[var(--color-rich-black)]/60',
          'transition-opacity duration-300 backdrop-blur-sm',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md z-[var(--z-modal)]',
          'bg-[var(--color-cream)]',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-sand)]">
            <h2 className="font-serif text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Your Cart ({itemCount})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[var(--color-sand)] mb-4" />
                <p className="text-[var(--color-warm-gray)] mb-2">Your cart is empty</p>
                <p className="text-sm text-[var(--color-taupe)] mb-6">
                  Discover our collection of fine jewelry
                </p>
                <Button variant="secondary" size="sm" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    {/* Product Image */}
                    <Link 
                      to={`/product/${item.slug}`} 
                      onClick={closeCart}
                      className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[var(--color-ivory)] rounded overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="block"
                      >
                        <h3 
                          className="text-sm font-medium text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors truncate"
                          style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}
                        >
                          {item.name}
                        </h3>
                      </Link>
                      
                      {item.variant && (
                        <p className="text-xs text-[var(--color-taupe)] mt-1 capitalize">
                          {item.variant}
                        </p>
                      )}
                      
                      <p className="text-sm font-medium text-[var(--color-charcoal)] mt-2">
                        {formatPrice(item.price)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[var(--color-sand)] rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-1.5 text-[var(--color-charcoal)] hover:text-[var(--color-gold)] disabled:opacity-50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-[var(--color-taupe)] hover:text-[var(--color-error)] transition-colors"
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
          {items.length > 0 && (
            <div className="border-t border-[var(--color-sand)] p-6 bg-[var(--color-ivory)]">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--color-warm-gray)]">Subtotal</span>
                <span className="font-medium text-[var(--color-charcoal)]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              
              <p className="text-xs text-[var(--color-taupe)] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              
              {/* Checkout Button */}
              <Button variant="gold" size="lg" fullWidth>
                Proceed to Checkout
              </Button>
              
              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
