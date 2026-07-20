import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    isCartLoading 
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-serif text-lg">Shopping Bag</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-parchment rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-border mb-4" />
                <p className="text-warmGray font-sans mb-4">Your bag is empty</p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-parchment rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide text-charcoal truncate">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-warmGray font-sans mt-1">
                          {item.variant}
                        </p>
                      )}
                      <p className="text-sm font-sans text-gold mt-1">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:bg-parchment transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-sans">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:bg-parchment transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-warmGray hover:text-red-500 transition-colors font-sans"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-border px-6 py-5 bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-warmGray">Subtotal</span>
                <span className="font-serif text-lg">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-warmGray font-sans mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Button 
                variant="primary" 
                size="full"
                loading={isCartLoading}
              >
                Checkout
              </Button>
              <Link 
                to="/collection"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm text-warmGray hover:text-gold font-sans mt-3 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
