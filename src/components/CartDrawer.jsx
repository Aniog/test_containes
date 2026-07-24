import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

const CartDrawer = () => {
  const {
    cart,
    cartTotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div
          className="flex items-center justify-between p-6"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <h2 className="font-serif text-xl tracking-wider" style={{ letterSpacing: '0.1em' }}>
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg font-serif mb-4" style={{ color: 'var(--color-stone)' }}>
                Your cart is empty
              </p>
              <button
                onClick={closeCart}
                className="btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Image */}
                  <div
                    className="w-20 h-24 flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-ivory)' }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3
                      className="product-title text-xs"
                      style={{ marginBottom: '4px' }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-sm mb-2"
                      style={{ color: 'var(--color-stone)' }}
                    >
                      {item.variant === 'gold' ? 'Gold' : 'Silver'}
                    </p>
                    <p className="text-sm mb-3">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border" style={{ borderColor: 'var(--color-border-dark)' }}>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span
                          className="px-3 text-sm"
                          style={{ minWidth: '30px', textAlign: 'center' }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-2 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
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
          <div
            className="p-6"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg">{formatPrice(cartTotal)}</span>
            </div>
            <p
              className="text-xs mb-4"
              style={{ color: 'var(--color-stone)' }}
            >
              Shipping and taxes calculated at checkout
            </p>
            <button className="btn-primary w-full mb-3">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="btn-outline w-full"
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