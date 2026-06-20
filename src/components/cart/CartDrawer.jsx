import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-base-light z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold/10">
          <h2 className="font-serif text-2xl text-cream">Shopping Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 text-ink-muted hover:text-cream transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-ink-muted mb-4" />
              <p className="text-cream font-serif text-xl mb-2">Your bag is empty</p>
              <p className="text-ink-muted text-sm mb-6">
                Discover our collection and find something you love.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-6 py-3 bg-gold text-base font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 bg-base-muted rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-cream text-lg">{item.name}</h3>
                        <p className="text-ink-muted text-sm capitalize mt-1">
                          {item.variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                        </p>
                        <p className="text-gold font-medium mt-2">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-ink-muted hover:text-cream transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center mt-4">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity - 1)
                        }
                        className="p-1 text-ink-muted hover:text-cream transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-3 text-cream text-sm w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        className="p-1 text-ink-muted hover:text-cream transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/10 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-ink-muted text-sm uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-2xl text-cream">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-ink-muted text-xs text-center">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-gold text-base font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-3 border border-gold/30 text-cream font-medium tracking-widest uppercase text-sm hover:bg-gold/10 transition-colors"
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
