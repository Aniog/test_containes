import React from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount
  } = useCart();

  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  return (
    <>
      {/* Overlay */}
      <div
        className={`velmora-overlay ${isCartOpen ? 'active' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[var(--velmora-warm-white)] z-50 transform transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b" style={{ borderColor: 'var(--velmora-sand)' }}>
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} strokeWidth={1.5} style={{ color: 'var(--velmora-charcoal)' }} />
            <h2 className="font-serif text-xl">Your Bag</h2>
            {cartCount > 0 && (
              <span className="text-sm" style={{ color: 'var(--velmora-taupe)' }}>
                ({cartCount} {cartCount === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 transition-colors hover:opacity-70"
            aria-label="Close cart"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 text-center">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: 'var(--velmora-sand)' }}
            >
              <ShoppingBag size={32} strokeWidth={1} style={{ color: 'var(--velmora-taupe)' }} />
            </div>
            <h3 className="font-serif text-2xl mb-2">Your bag is empty</h3>
            <p className="text-sm mb-8" style={{ color: 'var(--velmora-taupe)' }}>
              Discover our collection of demi-fine jewelry
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b"
                    style={{ borderColor: 'var(--velmora-sand)' }}
                  >
                    {/* Image */}
                    <div 
                      className="w-24 h-32 flex-shrink-0 bg-[var(--velmora-sand)]"
                      style={{ aspectRatio: '3/4' }}
                    >
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
                          <h4 className="uppercase-tracking text-sm mb-1">{item.name}</h4>
                          <p className="text-xs" style={{ color: 'var(--velmora-taupe)' }}>
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="p-1 -mr-1 transition-opacity hover:opacity-50"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X size={16} strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="mt-auto pt-4">
                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center border" style={{ borderColor: 'var(--velmora-sand)' }}>
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="p-2 transition-colors hover:bg-[var(--velmora-sand)]"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} strokeWidth={1.5} />
                            </button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="p-2 transition-colors hover:bg-[var(--velmora-sand)]"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} strokeWidth={1.5} />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div 
              className="border-t px-6 py-6 space-y-4"
              style={{ borderColor: 'var(--velmora-sand)', backgroundColor: 'var(--velmora-warm-white)' }}
            >
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-sm" style={{ color: 'var(--velmora-taupe)' }}>
                  Subtotal
                </span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>

              {/* Shipping note */}
              <p className="text-xs text-center" style={{ color: 'var(--velmora-taupe)' }}>
                Shipping & taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="btn-gold w-full flex items-center justify-center gap-2">
                Checkout
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full text-center text-sm py-2 transition-colors hover:text-[var(--velmora-gold)]"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
