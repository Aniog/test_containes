import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatPrice, cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  
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
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);
  
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-charcoal-900/50 transition-opacity duration-300 md:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-cream-50 shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
          <h2 className="font-serif text-xl text-charcoal-800">Your Bag ({itemCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-charcoal-400" />
            </div>
            <p className="text-charcoal-600 mb-6">Your bag is empty</p>
            <Button onClick={closeCart} variant="secondary">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item, index) => (
                <div
                  key={`${item.id}-${item.variant}-${index}`}
                  className="flex gap-4 py-4 border-b border-charcoal-100"
                >
                  {/* Image */}
                  <div className="w-24 h-24 bg-cream-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm text-charcoal-800 uppercase tracking-wide">
                      {item.name}
                    </h3>
                    {item.variant && (
                      <p className="text-xs text-charcoal-500 mt-1">{item.variant}</p>
                    )}
                    <p className="text-sm text-charcoal-700 mt-1">{formatPrice(item.price)}</p>
                    
                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-charcoal-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-charcoal-400 hover:text-charcoal-600 transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="border-t border-charcoal-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-600">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-800">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-charcoal-500">Shipping and taxes calculated at checkout</p>
              
              <Button className="w-full" size="large">
                Checkout
              </Button>
              
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-charcoal-500 hover:text-gold-600 transition-colors"
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
