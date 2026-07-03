import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-50 transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
          <h2 className="font-serif text-2xl text-velmora-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
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
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                {/* Image */}
                <div className="w-24 h-32 bg-velmora-sand flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-taupe mt-1 capitalize">
                      {item.variant} Tone
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center border border-velmora-sand">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 hover:text-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 hover:text-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="font-serif text-velmora-charcoal">
                      ${item.price * item.quantity}
                    </p>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="text-xs text-velmora-taupe hover:text-velmora-gold transition-colors self-start"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-velmora-sand space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-taupe uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl text-velmora-charcoal">${cartTotal}</span>
            </div>
            <p className="text-xs text-velmora-taupe">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full btn-primary">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}