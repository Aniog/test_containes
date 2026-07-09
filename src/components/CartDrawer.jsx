import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[70] bg-velmora-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-velmora-cream shadow-2xl transition-transform duration-400 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-xl font-semibold tracking-wider text-velmora-charcoal">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-taupe mb-4" />
              <p className="font-serif text-lg text-velmora-gray mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-gray mb-6">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="w-20 h-20 bg-velmora-sand rounded-sm flex-shrink-0 overflow-hidden"
                  >
                    <div className="w-full h-full bg-velmora-warm flex items-center justify-center">
                      <span className="text-velmora-taupe text-xs font-serif uppercase tracking-wider">
                        Img
                      </span>
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="font-serif text-sm font-semibold uppercase tracking-widest-xl text-velmora-charcoal hover:text-velmora-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-velmora-gray mt-0.5 capitalize">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-velmora-gray hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-velmora-warm transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-velmora-warm transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-medium text-velmora-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
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
          <div className="p-6 border-t border-velmora-border bg-velmora-cream">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-velmora-gray">Subtotal</span>
              <span className="font-sans text-lg font-semibold text-velmora-charcoal">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-gray mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full mb-3">Checkout</button>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-secondary w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}