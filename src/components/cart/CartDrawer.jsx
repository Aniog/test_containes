import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-black/50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-taupe">
            <h2 className="font-serif text-2xl text-velmora-charcoal">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-velmora-gray hover:text-velmora-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-velmora-taupe mb-4" />
                <p className="text-velmora-gray text-lg">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 text-velmora-gold hover:text-velmora-bronze transition-colors underline underline-offset-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-velmora-taupe/30 flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider text-velmora-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-velmora-gray text-sm mt-1">{item.variant}</p>
                      <p className="text-velmora-gold font-semibold mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 border border-velmora-taupe flex items-center justify-center text-velmora-gray hover:border-velmora-gold transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-velmora-charcoal w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 border border-velmora-taupe flex items-center justify-center text-velmora-gray hover:border-velmora-gold transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-velmora-gray hover:text-red-500 transition-colors text-sm"
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
            <div className="p-6 border-t border-velmora-taupe bg-velmora-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-gray">Subtotal</span>
                <span className="text-xl font-serif text-velmora-charcoal">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-velmora-gray text-sm mb-4">Shipping calculated at checkout</p>
              <button className="w-full py-4 bg-velmora-gold text-velmora-charcoal font-semibold tracking-wide hover:bg-velmora-gold/90 transition-colors">
                CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}