import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

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
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-taupe/20">
          <h2 className="font-serif text-2xl tracking-wider">Your Cart</h2>
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
              <p className="text-velmora-taupe">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-velmora-gold underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-30 bg-velmora-sand/50 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wider">{item.name}</h3>
                    <p className="text-xs text-velmora-taupe mt-1 capitalize">{item.variant} Tone</p>
                    <p className="text-sm mt-2">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 border border-velmora-taupe/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 border border-velmora-taupe/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto p-2 text-velmora-taupe hover:text-red-500 transition-colors"
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
            <div className="flex items-center justify-between mb-4">
              <span className="text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-charcoal text-white py-4 uppercase tracking-widest text-sm hover:bg-velmora-gold transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}