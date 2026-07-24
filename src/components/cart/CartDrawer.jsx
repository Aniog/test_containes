import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
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
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-velmora-charcoal/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-taupe/20">
          <h2 className="font-serif text-xl tracking-wider">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
              <p className="text-velmora-taupe mb-4">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn-outline text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                    <p className="text-xs text-velmora-taupe mt-1">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-taupe/30">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-velmora-taupe hover:text-red-500 transition-colors"
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
          <div className="p-6 border-t border-velmora-taupe/20">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link 
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full btn-primary text-center"
            >
              Checkout
            </Link>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center mt-3 text-xs text-velmora-taupe hover:text-velmora-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;