import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

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
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-xl animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-charcoal/10">
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
                <ShoppingBag className="w-16 h-16 text-velmora-muted mb-4" />
                <p className="text-velmora-muted">Your cart is empty</p>
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
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-velmora-charcoal/10"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-24 bg-velmora-sand flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-muted mt-1 capitalize">
                        {item.variant} / Qty: {item.quantity}
                      </p>
                      <p className="text-sm text-velmora-gold mt-2">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 border border-velmora-charcoal/20 flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm text-velmora-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 border border-velmora-charcoal/20 flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-xs text-velmora-muted hover:text-red-500 transition-colors uppercase tracking-wider"
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
            <div className="p-6 border-t border-velmora-charcoal/10 bg-velmora-sand/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-velmora-muted uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-lg text-velmora-charcoal">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button
                className={cn(
                  'w-full py-4 bg-velmora-gold text-white text-sm uppercase tracking-widest',
                  'hover:bg-velmora-gold-light transition-all duration-300'
                )}
              >
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 py-3 text-sm text-velmora-muted hover:text-velmora-charcoal transition-colors"
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