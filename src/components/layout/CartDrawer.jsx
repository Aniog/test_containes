import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--color-surface)] shadow-xl animate-slide-in-right flex flex-col"
        style={{ animation: 'slideInRight 0.3s ease forwards' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 md:p-6 border-b"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <h2
            className="font-serif text-lg tracking-wide"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Your Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X size={24} style={{ color: 'var(--color-text-primary)' }} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag
                size={48}
                style={{ color: 'var(--color-stone-light)', marginBottom: '1rem' }}
              />
              <p
                className="font-serif text-lg mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Your cart is empty
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                Add some beautiful jewelry to get started
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-3 text-sm tracking-wider transition-all hover:opacity-80"
                style={{
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'white'
                }}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  <div
                    className="w-20 h-24 flex-shrink-0 bg-[var(--color-ivory)] overflow-hidden"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="product-name text-xs"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-sm mt-1 capitalize"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.variant} Gold
                    </p>
                    <p
                      className="text-sm mt-1"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border hover:opacity-60 transition-opacity"
                        style={{
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-text-primary)'
                        }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span
                        className="text-sm w-6 text-center"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border hover:opacity-60 transition-opacity"
                        style={{
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-text-primary)'
                        }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="p-1 hover:opacity-60 transition-opacity self-start"
                    aria-label="Remove item"
                  >
                    <X size={18} style={{ color: 'var(--color-stone)' }} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div
            className="p-4 md:p-6 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-sm tracking-wide"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Subtotal
              </span>
              <span
                className="font-serif text-lg"
                style={{ color: 'var(--color-text-primary)' }}
              >
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p
              className="text-xs mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Shipping and taxes calculated at checkout
            </p>
            <button
              className="w-full py-3 text-sm tracking-wider transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-charcoal)',
                color: 'white'
              }}
            >
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="block text-center mt-3 text-sm hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}