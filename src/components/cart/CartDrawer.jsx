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

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-velmora-charcoal/50 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Drawer */}
      <div 
        className={`cart-drawer fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-2xl flex flex-col ${
          isCartOpen ? 'open' : ''
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
          <h2 className="font-serif text-xl tracking-wider">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-velmora-taupe mb-4" />
              <p className="text-velmora-taupe mb-4">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn-outline text-sm"
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
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wider uppercase">
                      {item.name}
                    </h3>
                    <p className="text-velmora-taupe text-sm mt-1 capitalize">
                      {item.variant} Tone
                    </p>
                    <p className="text-velmora-gold font-medium mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-sand">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:text-velmora-gold transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:text-velmora-gold transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-velmora-taupe hover:text-red-500 transition-colors uppercase tracking-wider"
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
          <div className="p-6 border-t border-velmora-sand bg-velmora-sand/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-velmora-taupe uppercase tracking-wider text-sm">Subtotal</span>
              <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link 
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-velmora-charcoal text-white text-center py-4 uppercase tracking-widest text-sm hover:bg-velmora-gold transition-colors"
            >
              Checkout
            </Link>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center mt-3 text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}