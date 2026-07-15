import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-xl animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-lightGray">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-serif text-xl">Your Cart</span>
              <span className="text-sm text-warmGray">({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-lightGray mb-4" />
                <p className="text-lg font-serif mb-2">Your cart is empty</p>
                <p className="text-sm text-warmGray mb-6">Add some beautiful jewelry to get started</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-gold text-white text-sm uppercase tracking-widest hover:bg-gold/90 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-lightGray/30 flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-sm uppercase tracking-widest">{item.name}</h4>
                      <p className="text-xs text-warmGray mt-1 capitalize">{item.variant} Tone</p>
                      <p className="text-gold font-medium mt-1">${item.price}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-lightGray">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-warmGray hover:text-gold transition-colors underline"
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
            <div className="border-t border-lightGray p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-warmGray">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warmGray">Shipping and taxes calculated at checkout</p>
              <button className="w-full py-4 bg-gold text-white text-sm uppercase tracking-widest hover:bg-gold/90 transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 border border-charcoal text-charcoal text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}