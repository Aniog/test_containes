import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-xl animate-slide-in-right overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-light-stone">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
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
              <ShoppingBag className="w-16 h-16 text-light-stone mb-4" />
              <p className="text-stone text-lg mb-2">Your cart is empty</p>
              <p className="text-stone text-sm">Add some beautiful jewelry to get started</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-8 py-3 bg-champagne text-charcoal font-medium text-sm tracking-wide hover:bg-soft-gold transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-ivory overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="product-name text-xs text-charcoal">{item.name}</h3>
                    <p className="text-stone text-sm mt-1 capitalize">{item.variant} Tone</p>
                    <p className="text-charcoal font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 border border-light-stone flex items-center justify-center hover:border-champagne transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-charcoal text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 border border-light-stone flex items-center justify-center hover:border-champagne transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto text-stone hover:text-rose-gold text-sm transition-colors"
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
          <div className="border-t border-light-stone p-6 bg-ivory">
            <div className="flex items-center justify-between mb-4">
              <span className="text-stone">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${getCartTotal().toFixed(2)}</span>
            </div>
            <p className="text-stone text-sm mb-4">Shipping and taxes calculated at checkout</p>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-4 bg-champagne text-charcoal font-medium text-center tracking-wide hover:bg-soft-gold transition-colors"
            >
              Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 mt-3 text-stone text-sm hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}