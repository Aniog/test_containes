import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-charcoal/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream z-50 shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-taupe/20">
          <h2 className="font-serif text-2xl text-velmora-charcoal">
            Your Cart
          </h2>
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
              <ShoppingBag className="w-12 h-12 text-velmora-taupe/30 mx-auto mb-4" />
              <p className="text-velmora-taupe mb-6">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-velmora-gold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Image */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="w-24 h-30 bg-velmora-sand flex-shrink-0"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={() => setIsCartOpen(false)}
                      className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal hover:text-velmora-gold"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-velmora-taupe mt-1">
                      {item.variant === 'gold' ? 'Gold' : 'Silver'}
                    </p>
                    <p className="text-sm text-velmora-gold mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-taupe/30">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-1.5 text-velmora-taupe hover:text-red-500 transition-colors"
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
          <div className="p-6 border-t border-velmora-taupe/20 bg-velmora-sand/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-widest text-velmora-charcoal">
                Subtotal
              </span>
              <span className="text-xl text-velmora-charcoal">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-4 bg-velmora-charcoal text-white text-sm uppercase tracking-widest hover:bg-velmora-gold transition-colors"
            >
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full mt-3 text-center text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}