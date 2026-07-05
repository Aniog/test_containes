import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
  } = useCart();

  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-espresso/40 z-50 transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-premium flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <h2 className="font-serif text-xl text-espresso">YOUR BAG ({cartCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-16 h-16 text-linen mb-4" />
              <p className="text-stone mb-6">Your bag is empty</p>
              <button
                onClick={closeCart}
                className="px-8 py-3 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-linen">
              {cart.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="p-6">
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="w-24 h-24 bg-ivory flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm">{item.name}</h3>
                      {item.variant && (
                        <p className="text-xs text-stone mt-1">{item.variant}</p>
                      )}
                      <p className="text-sm text-charcoal mt-1">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-linen">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 text-charcoal hover:text-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 text-charcoal hover:text-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-stone hover:text-error transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-linen px-6 py-6 bg-cream">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-charcoal">Subtotal</span>
              <span className="font-medium text-espresso">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone mb-4">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <button className="w-full py-4 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-colors">
              CHECKOUT
            </button>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full py-3 mt-3 text-sm text-charcoal hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
