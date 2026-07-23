import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--color-cream)] shadow-xl animate-slide-down">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-light-gray)' }}>
            <h2 className="font-serif text-xl" style={{ color: 'var(--color-charcoal)' }}>
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" style={{ color: 'var(--color-charcoal)' }} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 mb-4" style={{ color: 'var(--color-light-gray)' }} />
                <p className="font-serif text-lg mb-2" style={{ color: 'var(--color-charcoal)' }}>
                  Your cart is empty
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-outline mt-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 flex-shrink-0 overflow-hidden bg-[var(--color-ivory)]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-product-name text-xs" style={{ color: 'var(--color-charcoal)' }}>
                        {item.name}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium mt-1" style={{ color: 'var(--color-charcoal)' }}>
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border hover:opacity-70 transition-opacity"
                            style={{ borderColor: 'var(--color-light-gray)', color: 'var(--color-charcoal)' }}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm" style={{ color: 'var(--color-charcoal)' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border hover:opacity-70 transition-opacity"
                            style={{ borderColor: 'var(--color-light-gray)', color: 'var(--color-charcoal)' }}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs underline hover:opacity-70 transition-opacity"
                          style={{ color: 'var(--color-muted)' }}
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
            <div className="p-6 border-t" style={{ borderColor: 'var(--color-light-gray)' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>Subtotal</span>
                <span className="font-serif text-lg" style={{ color: 'var(--color-charcoal)' }}>
                  {formatPrice(cartTotal)}
                </span>
              </div>
              <p className="text-xs mb-4" style={{ color: 'var(--color-muted)' }}>
                Shipping and taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary w-full"
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center mt-3 text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-muted)' }}
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