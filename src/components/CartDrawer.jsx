import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-charcoal/40 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg z-50 flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-sand/50">
          <h2 className="font-serif text-xl text-velmora-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors duration-300"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-velmora-taupe/50 mb-4" />
              <p className="text-velmora-charcoal/60">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 animate-fade-in"
                >
                  <div className="w-24 h-24 bg-velmora-ivory rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wider text-velmora-charcoal">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-taupe mt-1 capitalize">
                      {item.variant} Tone
                    </p>
                    <p className="text-sm text-velmora-gold mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-velmora-sand rounded hover:border-velmora-gold transition-colors duration-300"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-velmora-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-velmora-sand rounded hover:border-velmora-gold transition-colors duration-300"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-taupe hover:text-red-500 transition-colors duration-300"
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
          <div className="p-6 border-t border-velmora-sand/50 bg-velmora-ivory/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-velmora-charcoal/60">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-taupe mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-velmora-gold text-white font-medium tracking-wide hover:bg-velmora-gold-dark transition-colors duration-300">
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
}