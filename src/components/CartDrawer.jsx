import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    getCartTotal,
    getCartCount
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl animate-slide-up">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <h2 className="font-serif text-2xl tracking-wide">Your Cart</h2>
            <button 
              onClick={closeCart}
              className="p-2 hover:bg-velmora-sand/50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-velmora-sand mb-4" />
                <p className="text-velmora-taupe mb-6">Your cart is empty</p>
                <button 
                  onClick={closeCart}
                  className="btn-secondary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div 
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-velmora-sand"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-sand/30 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-serif text-lg tracking-wide">{item.shortName}</h3>
                      <p className="text-sm text-velmora-taupe mt-1">{item.variant}</p>
                      <p className="text-velmora-gold font-medium mt-2">${item.price}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-sand">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-velmora-sand/50 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-velmora-sand/50 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-sm text-velmora-taupe hover:text-velmora-charcoal transition-colors"
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
            <div className="p-6 border-t border-velmora-sand bg-velmora-sand/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="text-xl font-serif">${getCartTotal().toFixed(2)}</span>
              </div>
              <p className="text-sm text-velmora-taupe mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-accent w-full">
                Checkout
              </button>
              <button 
                onClick={closeCart}
                className="w-full mt-3 text-sm text-velmora-taupe hover:text-velmora-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;