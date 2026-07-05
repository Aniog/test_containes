import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-xl animate-slide-up">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
                <p className="text-velmora-taupe">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 text-velmora-gold hover:underline text-sm uppercase tracking-widest"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-velmora-sand overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                      <p className="text-velmora-taupe text-sm mt-1 capitalize">{item.variant} Tone</p>
                      <p className="text-velmora-gold font-medium mt-1">${item.price}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-sand">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:bg-velmora-sand transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:bg-velmora-sand transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-velmora-taupe text-xs hover:text-velmora-charcoal transition-colors"
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
              <p className="text-velmora-taupe text-xs mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full bg-velmora-charcoal text-white py-4 text-sm uppercase tracking-widest hover:bg-velmora-gold transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}