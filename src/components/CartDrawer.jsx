import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-2xl tracking-wider">
              Your Cart ({cartCount})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 text-velmora-gold hover:text-velmora-gold-dark font-semibold"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    {/* Product Image */}
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-velmora-warm flex-shrink-0"
                    />

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <h3 className="font-serif text-sm tracking-wider uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">{item.variant}</p>
                      <p className="font-semibold text-sm">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-velmora-charcoal text-white text-center py-3 text-sm tracking-widest uppercase font-semibold hover:bg-velmora-gold hover:text-velmora-charcoal transition-all duration-300"
              >
                Proceed to Checkout
              </Link>

              <button
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center text-sm text-gray-500 hover:text-velmora-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}