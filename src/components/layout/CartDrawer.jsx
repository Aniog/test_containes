import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl font-normal text-brand-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-brand-charcoal hover:text-brand-gold transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-sand mb-4" />
              <p className="font-serif text-lg text-brand-charcoal">Your cart is empty</p>
              <p className="text-sm text-brand-muted mt-2">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 px-6 py-3 bg-brand-charcoal text-brand-cream text-sm tracking-wider uppercase no-underline hover:bg-brand-graphite transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-brand-ivory flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-brand-warm-gray font-sans">IMG</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-sm uppercase tracking-product text-brand-charcoal leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-brand-muted hover:text-brand-charcoal transition-colors bg-transparent border-none"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 border border-brand-sand">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-brand-charcoal hover:text-brand-gold transition-colors bg-transparent border-none"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans text-brand-charcoal w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-brand-charcoal hover:text-brand-gold transition-colors bg-transparent border-none"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-sans font-medium text-brand-charcoal">
                        ${(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-brand-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-brand-muted">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${totalPrice.toFixed(0)}</span>
            </div>
            <p className="text-xs text-brand-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-4 bg-brand-charcoal text-brand-cream text-sm tracking-wider uppercase font-sans hover:bg-brand-graphite transition-colors border-none rounded-none">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
