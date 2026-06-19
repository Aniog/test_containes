import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay fixed inset-0 bg-charcoal-900/50 z-40 ${
          isCartOpen ? 'open' : ''
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`cart-drawer fixed top-0 right-0 h-full w-full sm:w-96 bg-cream-50 z-50 flex flex-col shadow-2xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-charcoal-200">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-charcoal-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 text-charcoal-300 mb-4" />
            <p className="text-charcoal-500 text-center mb-6">
              Your bag is empty
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-outline text-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 flex-shrink-0 bg-warm-100 rounded-sm overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-product-name text-xs mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-charcoal-400">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-1 text-charcoal-400 hover:text-charcoal-800 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-charcoal-200">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.variant,
                              item.quantity - 1
                            )
                          }
                          className="p-2 hover:bg-charcoal-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.variant,
                              item.quantity + 1
                            )
                          }
                          className="p-2 hover:bg-charcoal-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-serif text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-charcoal-200 px-6 py-6 space-y-4 bg-cream-50">
              <div className="flex justify-between items-center">
                <span className="text-sm text-charcoal-500">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-400">
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <Link
                to="/collections/all"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm text-charcoal-500 hover:text-charcoal-800 underline transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}