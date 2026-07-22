import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

  // Prevent body scroll when drawer is open
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <h2 className="font-serif text-xl text-velmora-charcoal">Your Bag</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
              <p className="text-velmora-taupe mb-4">Your bag is empty</p>
              <Button variant="secondary" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-velmora-sand rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-velmora-charcoal">{item.name}</h3>
                    <p className="text-xs text-velmora-taupe mt-1">{item.variant}</p>
                    <p className="text-sm text-velmora-charcoal mt-1">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-sand">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-velmora-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-velmora-taupe hover:text-velmora-charcoal underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-velmora-sand px-6 py-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <Button variant="primary" size="full" className="mt-2">
              Checkout
            </Button>

            {/* Continue Shopping */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-sm text-velmora-taupe hover:text-velmora-charcoal underline transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
