import { X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-full max-w-md bg-brand-cream z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl tracking-wide text-brand-charcoal">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="text-brand-muted hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-muted mb-4">
                Your bag is empty
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs font-sans font-medium tracking-ultra-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-brand-warm rounded flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-lg text-brand-gold/60">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5 capitalize">
                      {item.tone} tone
                    </p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-brand-sand rounded flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-brand-sand rounded flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted hover:text-red-500 transition-colors font-sans underline"
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
          <div className="border-t border-brand-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-brand-muted">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-brand-muted font-sans mb-4">
              Shipping calculated at checkout
            </p>
            <button className="w-full bg-brand-gold text-white py-3.5 text-xs font-sans font-semibold tracking-ultra-wide uppercase hover:bg-brand-gold-dark transition-colors duration-200">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-xs font-sans font-medium tracking-ultra-wide uppercase text-brand-muted hover:text-brand-charcoal transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
