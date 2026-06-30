import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeCart]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div 
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-elevated animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-lightGray">
          <h2 className="font-serif text-xl text-charcoal">Your Bag ({items.length})</h2>
          <button 
            onClick={closeCart}
            className="p-2 text-warmGray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-warmGray" />
            </div>
            <p className="text-warmGray mb-6">Your bag is empty</p>
            <button 
              onClick={closeCart}
              className="btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-cream rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-product text-charcoal truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warmGray mt-1">{item.variant}</p>
                      <p className="font-medium mt-1">${item.price}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-lightGray rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-warmGray hover:text-charcoal transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-lightGray px-6 py-6 bg-cream/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-warmGray">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-warmGray text-sm">Shipping</span>
                <span className="text-sm text-gold">Free</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-medium">Estimated Total</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-warmGray text-center mt-4">
                Free worldwide shipping on all orders
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
