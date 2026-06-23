import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

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

  const handleCheckout = () => {
    alert('Checkout functionality coming soon! This would integrate with a payment processor.');
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-gold/20">
            <h2 className="font-serif text-xl uppercase tracking-wider">
              Your Cart ({cartItems.length})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-16 h-16 text-velmora-gold/30 mx-auto mb-4" />
                <p className="text-velmora-charcoal/60 mb-6">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-velmora-gold hover:underline text-sm uppercase tracking-wider"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-20 bg-velmora-beige flex-shrink-0">
                      <div className="w-full h-full jewelry-placeholder">
                        <span className="text-velmora-gold/30 text-2xl">♢</span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-velmora-charcoal/60 mb-2">{item.variant}</p>
                      )}
                      <p className="font-serif text-lg mb-3">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-velmora-gold/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-velmora-gold/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-velmora-charcoal/40 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Total and Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-velmora-gold/20 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg uppercase tracking-wider">Total</span>
                <span className="font-serif text-2xl">${cartTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-velmora-gold text-white py-4 uppercase tracking-wider text-sm font-medium hover:bg-velmora-gold-dark transition-all duration-300 flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm text-velmora-charcoal/60 hover:text-velmora-gold transition-colors"
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
