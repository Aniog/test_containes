import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-charcoal/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-mist">
            <h2 className="font-serif text-xl text-velmora-charcoal">Your Cart</h2>
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
                <ShoppingBag className="w-12 h-12 text-velmora-stone mb-4" />
                <p className="font-serif text-lg text-velmora-charcoal mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-velmora-stone">
                  Add some beautiful jewelry to get started
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 btn-primary"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-24 h-24 bg-velmora-ivory flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="product-name text-xs text-velmora-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-stone mt-1 capitalize">
                        {item.variant} Tone
                      </p>
                      <p className="text-sm font-medium text-velmora-charcoal mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="w-8 h-8 border border-velmora-mist flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="w-8 h-8 border border-velmora-mist flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
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
            <div className="p-6 border-t border-velmora-mist">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-velmora-stone">Subtotal</span>
                <span className="font-serif text-lg text-velmora-charcoal">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-stone mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full btn-primary">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 btn-outline"
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