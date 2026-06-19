import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useAppStore } from '../store';
import { useEffect, useRef } from 'react';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useAppStore();
  const drawerRef = useRef(null);

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Close drawer when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isCartOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isCartOpen, setIsCartOpen]);

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen && cart.length === 0) return null; // Small optimization, though we use CSS translations usually

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-brand-beige shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-sand">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-brand-sand rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-brand-dark" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-brand-gray">
              <ShoppingBagIcon className="w-12 h-12 opacity-50" />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition duration-300 tracking-wide uppercase text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex py-2">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm border border-brand-sand bg-white flex items-center justify-center">
                    {/* Simplified Image display for now */}
                    <div className="w-full h-full text-xs text-brand-gray p-2 text-center break-words bg-gray-100 flex items-center">
                       {item.name} Img
                    </div>
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between font-serif text-lg">
                        <h3>{item.name}</h3>
                        <p className="ml-4 font-sans text-base">${item.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-brand-gray">{item.variant}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-brand-sand rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, Math.max(0, item.quantity - 1))}
                          className="p-1 hover:text-brand-gold transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 hover:text-brand-gold transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="font-medium text-brand-gray hover:text-brand-dark transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-brand-sand p-6 bg-brand-beige">
            <div className="flex justify-between font-serif text-xl mb-4">
              <p>Subtotal</p>
              <p>${cartTotal.toFixed(2)}</p>
            </div>
            <p className="text-sm text-brand-gray mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              className="w-full bg-brand-dark text-white px-6 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors duration-300"
              onClick={() => alert('Checkout flow would start here.')}
            >
              Checkout
            </button>
            <div className="mt-4 flex justify-center text-center text-sm text-brand-gray">
              <button
                type="button"
                className="font-medium hover:text-brand-gold transition"
                onClick={() => setIsCartOpen(false)}
              >
                or Continue Shopping <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Temporary icon for empty state
function ShoppingBagIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

export default CartDrawer;