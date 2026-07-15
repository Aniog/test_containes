import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { state, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-dark/50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-velmora-bg flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-xl text-velmora-text">
            Shopping Bag ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-velmora-border/30 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-velmora-text" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <ShoppingBag className="w-12 h-12 text-velmora-muted mb-4" />
              <p className="font-serif text-xl text-velmora-text mb-2">Your bag is empty</p>
              <p className="text-velmora-secondary text-sm mb-6">
                Discover our collection of demi-fine jewelry.
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="bg-velmora-accent text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-velmora-accent-hover transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {state.items.map((item, index) => (
                <div
                  key={`${item.id}-${item.variant}-${index}`}
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="w-20 h-24 bg-velmora-border/30 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-velmora-border/30" />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} onClick={onClose}>
                      <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-text hover:text-velmora-accent transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-velmora-muted mt-1 capitalize">
                      {item.variant === 'gold' ? '18K Gold' : 'Silver Tone'}
                    </p>
                    <p className="text-velmora-text font-medium mt-1">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border-thin">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-velmora-border/30 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-velmora-secondary" />
                        </button>
                        <span className="px-3 text-sm text-velmora-text">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-velmora-border/30 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-velmora-secondary" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-velmora-muted hover:text-velmora-accent transition-colors underline"
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
        {state.items.length > 0 && (
          <div className="border-t border-velmora-border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm tracking-wider uppercase text-velmora-text">Subtotal</span>
              <span className="text-lg text-velmora-text font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-accent text-white py-4 text-sm tracking-widest uppercase hover:bg-velmora-accent-hover transition-colors flex items-center justify-center gap-2">
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/shop"
              onClick={onClose}
              className="block text-center text-sm text-velmora-secondary hover:text-velmora-accent transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
