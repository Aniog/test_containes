import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function CartDrawer() {
  const { 
    cart, 
    cartTotal, 
    cartCount, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart 
  } = useCart();

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

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-cream shadow-2xl animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sand">
          <h2 className="font-serif text-xl text-charcoal">Your Bag ({cartCount})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingBag className="w-12 h-12 text-warmGray mb-4" />
              <p className="text-charcoal mb-4">Your bag is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-xs tracking-widest uppercase text-gold hover:text-goldDark transition-colors underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-sand">
              {cart.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-24 bg-sand rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h3 className="font-serif text-sm text-charcoal leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-warmGray hover:text-charcoal transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <p className="text-xs text-warmGray mt-1 capitalize">{item.variant} Tone</p>
                      
                      <div className="flex justify-between items-end mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-sand rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-charcoal hover:bg-sand/50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm text-charcoal min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-charcoal hover:bg-sand/50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <p className="font-serif text-charcoal">
                          {formatPrice(item.price * item.quantity)}
                        </p>
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
          <div className="border-t border-sand p-6 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-charcoal">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-warmGray mb-4">Shipping and taxes calculated at checkout</p>
            <button className="w-full py-4 bg-charcoal text-white text-xs tracking-widest uppercase hover:bg-espresso transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 mt-2 text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
