import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-velmora-cream animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-light-gray">
            <h2 className="font-serif text-xl">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-light-gray mb-4" />
                <p className="text-velmora-warm-gray mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="text-velmora-gold font-medium hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-velmora-light-gray overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-product">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-warm-gray capitalize mt-1">
                        {item.variant} Gold
                      </p>
                      <p className="text-sm font-medium mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 border border-velmora-light-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 border border-velmora-light-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors"
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
            <div className="p-6 border-t border-velmora-light-gray">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-warm-gray">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-velmora-warm-gray mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full bg-velmora-gold text-white py-4 font-medium hover:bg-velmora-gold-dark transition-colors">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center mt-3 text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}