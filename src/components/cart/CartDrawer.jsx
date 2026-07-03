import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-charcoal/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-2xl text-velmora-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-velmora-border mb-4" strokeWidth={1} />
              <p className="text-velmora-warm-gray mb-4">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-velmora-gold hover:text-velmora-gold-light transition-colors underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-velmora-border"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-velmora-light-gray flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-velmora-warm-gray mb-2">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-velmora-charcoal mb-3">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                        <span className="px-3 text-sm text-velmora-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-sm text-velmora-warm-gray hover:text-velmora-error transition-colors"
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
          <div className="p-6 border-t border-velmora-border bg-velmora-light-gray">
            <div className="flex justify-between items-center mb-4">
              <span className="text-velmora-warm-gray">Subtotal</span>
              <span className="text-lg font-medium text-velmora-charcoal">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-warm-gray mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-velmora-gold text-velmora-charcoal text-center py-4 font-medium hover:bg-velmora-gold-light transition-colors"
            >
              Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center mt-3 text-sm text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;