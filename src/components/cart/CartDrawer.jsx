import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-charcoal/50 z-50 cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-cream shadow-2xl z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gold/20">
            <h2 className="font-serif text-2xl font-light">
              Your Cart ({cartItems.length})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <ShoppingBag size={64} className="text-gold/30 mb-4" />
              <p className="text-charcoal/60 font-light mb-8">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-gold text-cream px-8 py-3 text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-warm flex-shrink-0"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-sans text-sm tracking-widest uppercase mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-charcoal/60 mb-2">{item.material}</p>
                      <p className="font-serif text-lg mb-3">${(item.price * item.quantity).toFixed(2)}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 border border-gold/30 hover:border-gold transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 border border-gold/30 hover:border-gold transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-charcoal/40 hover:text-charcoal transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-gold/20 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm tracking-wider uppercase">Total</span>
                  <span className="font-serif text-2xl">${cartTotal.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={() => {
                    alert('Checkout functionality would be implemented here!');
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-gold text-cream py-4 text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>
                
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full border-2 border-charcoal text-charcoal py-3 text-sm tracking-wider uppercase hover:bg-charcoal hover:text-cream transition-colors duration-300"
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
