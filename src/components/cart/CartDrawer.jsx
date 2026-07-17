import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-light-gray">
            <h2 className="font-serif text-2xl text-velmora-charcoal">Your Bag</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-velmora-light-gray transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-velmora-charcoal" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-velmora-light-gray mb-4" />
                <p className="font-serif text-xl text-velmora-charcoal mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-warm-gray">Add some beautiful pieces to get started</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-velmora-light-gray flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="product-name text-xs text-velmora-charcoal mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-warm-gray mb-2">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium text-velmora-charcoal mb-3">
                        ${item.price}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-light-gray">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-velmora-light-gray transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-velmora-light-gray transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-sm text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
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
            <div className="p-6 border-t border-velmora-light-gray">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-warm-gray">Subtotal</span>
                <span className="font-medium text-velmora-charcoal">${getCartTotal().toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-warm-gray mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-velmora-charcoal text-white text-center py-4 hover:bg-velmora-gold transition-colors duration-300"
              >
                Checkout
              </Link>
              <button
                onClick={closeCart}
                className="block w-full text-center py-3 mt-2 text-sm text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;