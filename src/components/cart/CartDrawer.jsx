import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartProvider';
import { useEffect, useRef } from 'react';

export function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    // Close drawer when clicking outside
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    // Prevent scrolling when cart is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="fixed inset-0 bg-brand-900/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        ref={drawerRef}
        className="relative w-full max-w-md bg-brand-50 shadow-2xl h-full flex flex-col animate-in slide-in-from-right duration-300"
      >
        <div className="flex items-center justify-between p-6 border-b border-brand-200">
          <h2 className="text-xl font-serif text-brand-900">Your Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-brand-600 hover:text-brand-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-brand-600">
              <ShoppingBag className="w-12 h-12 stroke-[1]" />
              <p className="font-serif text-lg">Your cart is empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="btn-secondary mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-24 h-24 bg-brand-100 shrink-0 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium uppercase tracking-widest text-brand-900">{item.title}</h3>
                        <p className="text-sm text-brand-600 mt-1">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.cartItemId)}
                        className="text-brand-400 hover:text-brand-900 transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-brand-200">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-2 text-brand-600 hover:bg-brand-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-2 text-brand-600 hover:bg-brand-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-serif">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-brand-200 bg-brand-50">
            <div className="flex justify-between items-center mb-6 font-serif text-lg">
              <span className="text-brand-600">Subtotal</span>
              <span className="text-brand-900">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-brand-500 mb-6 text-center">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary w-full shadow-lg shadow-brand-900/10">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}