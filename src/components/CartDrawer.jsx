import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-2xl text-brand-charcoal">
            Your Cart
            <span className="font-sans text-sm text-brand-warm-gray ml-2">({totalItems})</span>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-brand-sand mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-brand-charcoal mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-brand-warm-gray mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-6 border-b border-brand-sand/50 last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-brand-ivory flex-shrink-0 overflow-hidden">
                    <div
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={`jewelry ${item.name} ${item.color}`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      className="w-full h-full bg-brand-ivory"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base uppercase tracking-wider text-brand-charcoal truncate">
                      {item.name}
                    </p>
                    <p className="font-sans text-xs text-brand-warm-gray mt-0.5">{item.color}</p>
                    <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 border border-brand-sand flex items-center justify-center text-brand-charcoal hover:border-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-sans text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 border border-brand-sand flex items-center justify-center text-brand-charcoal hover:border-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-sans text-xs underline text-brand-warm-gray hover:text-brand-charcoal transition-colors"
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
        {items.length > 0 && (
          <div className="border-t border-brand-sand px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-brand-warm-gray">Subtotal</span>
              <span className="font-serif text-xl text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-brand-warm-gray">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-gold py-4">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-sans text-sm underline text-brand-warm-gray hover:text-brand-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
