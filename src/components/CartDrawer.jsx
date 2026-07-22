import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-velmora-charcoal/30 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg z-50 flex flex-col animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-taupe/20">
          <div className="flex items-center space-x-3">
            <ShoppingBag size={20} strokeWidth={1.5} className="text-velmora-gold" />
            <h2 className="font-serif text-xl text-velmora-charcoal">Your Cart</h2>
            <span className="font-sans text-sm text-velmora-taupe">({cart.length} items)</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-velmora-taupe mb-4" />
              <p className="font-serif text-lg text-velmora-charcoal mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-taupe mb-6">Add some beautiful jewelry to get started</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 bg-velmora-charcoal text-velmora-cream font-sans text-sm tracking-wide hover:bg-velmora-gold transition-colors"
              >
                Continue Shopping
              </button>
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
                    <h3 className="font-serif text-sm text-velmora-charcoal tracking-wide">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-velmora-taupe mt-1 capitalize">
                      {item.variant} Tone
                    </p>
                    <p className="font-sans text-sm text-velmora-gold mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-taupe/30">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 font-sans text-sm text-velmora-charcoal">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="font-sans text-xs text-velmora-taupe hover:text-red-500 transition-colors"
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
          <div className="px-6 py-6 border-t border-velmora-taupe/20 bg-velmora-sand/50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-taupe mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link 
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 bg-velmora-charcoal text-velmora-cream font-sans text-sm text-center tracking-wide hover:bg-velmora-gold transition-colors"
            >
              Checkout
            </Link>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 mt-3 font-sans text-sm text-velmora-taupe hover:text-velmora-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}