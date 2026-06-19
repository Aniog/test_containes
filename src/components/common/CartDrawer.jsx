import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-cream)] z-50 shadow-2xl flex flex-col animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <h2 className="font-serif text-xl tracking-wide" style={{ color: 'var(--color-warm-black)' }}>
            Your Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 mb-4" style={{ color: 'var(--color-border)' }} />
              <p className="font-serif text-lg mb-2" style={{ color: 'var(--color-warm-black)' }}>
                Your cart is empty
              </p>
              <p className="font-sans text-sm mb-6" style={{ color: 'var(--color-muted)' }}>
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {/* Product Image */}
                  <div className="w-24 h-30 bg-[var(--color-ivory)] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="product-name text-xs mb-1" style={{ color: 'var(--color-warm-black)' }}>
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs capitalize" style={{ color: 'var(--color-muted)' }}>
                        {item.variant} / Qty: {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="font-sans text-sm font-medium" style={{ color: 'var(--color-warm-black)' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 border hover:border-[var(--color-gold)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" style={{ color: 'var(--color-warm-black)' }} />
                        </button>
                        <span className="font-sans text-sm w-6 text-center" style={{ color: 'var(--color-warm-black)' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 border hover:border-[var(--color-gold)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" style={{ color: 'var(--color-warm-black)' }} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="self-start p-1 hover:opacity-70 transition-opacity"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" style={{ color: 'var(--color-muted)' }} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex items-center justify-between mb-6">
              <span className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>
                Subtotal
              </span>
              <span className="font-serif text-xl" style={{ color: 'var(--color-warm-black)' }}>
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-center mb-4" style={{ color: 'var(--color-muted)' }}>
              Shipping and taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 font-sans text-sm hover:opacity-70 transition-opacity text-center"
              style={{ color: 'var(--color-warm-black)' }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}