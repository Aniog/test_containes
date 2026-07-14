import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-charcoal/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-xl flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
          <h2 className="font-serif text-xl">Your Cart</h2>
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
              <ShoppingBag className="w-16 h-16 text-velmora-taupe mb-4" />
              <p className="text-velmora-taupe mb-6">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="px-8 py-3 bg-velmora-charcoal text-velmora-cream text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors"
              >
                Continue Shopping
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
                    <h3 className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                    <p className="text-xs text-velmora-taupe mt-1 capitalize">{item.variant} · {item.material}</p>
                    <p className="text-sm font-medium mt-2">${item.price}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-sand">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-velmora-sand/50 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-velmora-sand/50 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-velmora-taupe hover:text-velmora-charcoal underline"
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
              <span className="text-sm text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe mb-4">Shipping & taxes calculated at checkout</p>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-4 bg-velmora-charcoal text-velmora-cream text-center text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors"
            >
              Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 mt-3 text-sm text-velmora-taupe hover:text-velmora-charcoal text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}