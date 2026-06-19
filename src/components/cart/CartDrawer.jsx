import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-velmora-charcoal/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-soft-lg flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-taupe/20">
          <h2 className="font-serif text-xl tracking-wider">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors duration-300"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-velmora-taupe/50 mb-4" />
              <p className="font-serif text-lg text-velmora-charcoal/60 mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-velmora-taupe">
                Discover our collection and find your new favorite piece.
              </p>
              <Link 
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div 
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-velmora-taupe/20 last:border-0"
                >
                  {/* Image */}
                  <div className="w-24 h-24 bg-velmora-sand flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-sm tracking-wider uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-taupe mt-1">
                        {item.variant}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-taupe/30">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-sans text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Remove */}
                  <button 
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="self-start p-1 text-velmora-taupe hover:text-velmora-gold transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-velmora-taupe/20 bg-velmora-sand/50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm tracking-wider uppercase">Subtotal</span>
              <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full btn-primary mb-3">
              Checkout
            </button>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-sm text-velmora-taupe hover:text-velmora-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}