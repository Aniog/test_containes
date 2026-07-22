import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl shadow-charcoal/20 transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-gold" />
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal font-semibold">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-gold/40" />
              <p className="font-serif text-xl text-charcoal-mid font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-stone tracking-wide">Discover pieces made to be treasured.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 border border-gold text-gold text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold hover:text-ivory transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-gold/10">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blush to-ivory-dark flex items-center justify-center">
                      <span className="font-serif text-gold/60 text-xs">✦</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-wider text-charcoal leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-stone mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-charcoal mt-1">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-gold/30 flex items-center justify-center text-charcoal-mid hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-sans text-xs text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-gold/30 flex items-center justify-center text-charcoal-mid hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone hover:text-charcoal transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gold/15 bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-wider uppercase text-stone">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ivory font-sans text-xs tracking-widest uppercase py-4 font-semibold hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-gold/30 text-charcoal-mid font-sans text-xs tracking-widest uppercase py-3 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
