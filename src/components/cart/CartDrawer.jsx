import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-velmora-charcoal/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg animate-slide-up">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-serif text-xl tracking-wide">Your Cart</span>
              <span className="text-velmora-taupe">({cart.length})</span>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
                <p className="font-serif text-lg mb-2">Your cart is empty</p>
                <p className="text-sm text-velmora-taupe mb-6">Discover our collection</p>
                <Link 
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-velmora-charcoal text-velmora-cream text-sm tracking-wide hover:bg-velmora-gold transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-velmora-sand flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-sm tracking-wide">{item.name}</h4>
                      <p className="text-sm text-velmora-taupe capitalize">{item.variant} Tone</p>
                      <p className="text-sm mt-1">${item.price}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-sand">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:text-velmora-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:text-velmora-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-velmora-taupe hover:text-velmora-charcoal transition-colors"
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
            <div className="p-6 border-t border-velmora-sand">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-taupe mb-4">Shipping and taxes calculated at checkout</p>
              <button className="w-full py-4 bg-velmora-charcoal text-velmora-cream text-sm tracking-widest hover:bg-velmora-gold transition-colors">
                CHECKOUT
              </button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 mt-2 border border-velmora-charcoal text-sm tracking-widest hover:bg-velmora-sand transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
