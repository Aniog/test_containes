import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

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

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal-900/50 z-40 transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
          <h2 className="font-serif text-xl text-charcoal-800">YOUR BAG</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-cream-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal-600" />
          </button>
        </div>

        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 text-charcoal-300 mb-4" />
            <p className="font-serif text-lg text-charcoal-600 mb-2">Your bag is empty</p>
            <p className="text-sm text-charcoal-400 mb-6 text-center">
              Discover our collection of demi-fine jewelry
            </p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="btn-outline text-xs"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-cream-200 flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-product-name text-xs mb-1">{item.name}</h3>
                      {item.variant && (
                        <p className="text-xs text-charcoal-500 mb-2">{item.variant}</p>
                      )}
                      <p className="font-sans text-sm text-charcoal-800 mb-3">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-charcoal-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-cream-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-cream-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-charcoal-400 hover:text-charcoal-800 underline transition-colors"
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
            <div className="border-t border-charcoal-200 px-6 py-6 bg-cream-50">
              <div className="flex justify-between items-center mb-4">
                <span className="font-sans text-sm text-charcoal-600">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-800">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-400 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button 
                className="btn-primary w-full text-center"
                disabled={isLoading}
              >
                {isLoading ? 'ADDING...' : 'CHECKOUT'}
              </button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-center text-sm text-charcoal-500 hover:text-charcoal-800 underline transition-colors"
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
