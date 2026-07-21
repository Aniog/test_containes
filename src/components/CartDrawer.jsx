import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

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
          <div className="flex items-center justify-between p-6 border-b border-velmora-taupe/20">
            <h2 className="font-serif text-2xl">Your Cart</h2>
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
              <div className="text-center py-12">
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
                    <div className="w-24 h-24 bg-velmora-sand overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-taupe capitalize mb-2">
                        {item.variant} Tone
                      </p>
                      <p className="text-velmora-gold font-medium mb-3">
                        ${item.price}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-taupe/30">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:text-velmora-gold"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:text-velmora-gold"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="p-2 text-velmora-taupe hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
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
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-velmora-taupe mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full btn-primary mb-3">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-sm text-velmora-taupe hover:text-velmora-charcoal transition-colors"
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