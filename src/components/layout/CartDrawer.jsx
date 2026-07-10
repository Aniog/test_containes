import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-charcoal/50 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg z-50 flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-charcoal/10">
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
            <div className="text-center py-12">
              <p className="text-velmora-charcoal/60 mb-4">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-300 underline underline-offset-4"
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
                  {/* Image */}
                  <div className="w-20 h-24 bg-velmora-creamDark rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal">
                      {item.name}
                    </h3>
                    <p className="text-sm text-velmora-charcoal/60 mt-1 capitalize">
                      {item.variant} Gold
                    </p>
                    <p className="text-sm text-velmora-gold mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-charcoal/20">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:text-velmora-gold transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:text-velmora-gold transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-2 text-velmora-charcoal/40 hover:text-red-500 transition-colors duration-300"
                        aria-label="Remove item"
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
          <div className="p-6 border-t border-velmora-charcoal/10 bg-velmora-creamDark">
            <div className="flex justify-between items-center mb-4">
              <span className="text-velmora-charcoal/80">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-charcoal/60 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-velmora-gold text-white font-sans text-sm tracking-wider hover:bg-velmora-gold-dark transition-colors duration-300">
              CHECKOUT
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 mt-2 border border-velmora-charcoal/30 text-velmora-charcoal font-sans text-sm tracking-wider hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
}