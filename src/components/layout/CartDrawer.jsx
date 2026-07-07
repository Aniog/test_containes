import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-obsidian/40 z-50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-mink" />
            <span className="font-serif text-lg text-velmora-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs font-sans text-velmora-mink">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-mink hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-stone" />
              <p className="font-serif text-xl text-velmora-obsidian">Your cart is empty</p>
              <p className="text-xs font-sans text-velmora-mink uppercase tracking-widest">
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-8 py-3 bg-velmora-gold text-velmora-obsidian text-xs font-sans uppercase tracking-widest hover:bg-velmora-gold-dark transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-velmora-stone">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-stone flex items-center justify-center">
                      <span className="text-velmora-mink text-xs font-sans">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-product text-velmora-obsidian leading-tight">
                          {item.name}
                        </p>
                        {item.variant && (
                          <p className="text-xs font-sans text-velmora-mink mt-0.5">{item.variant}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-velmora-stone hover:text-velmora-charcoal transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-stone">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-mink hover:text-velmora-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-sans text-velmora-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-mink hover:text-velmora-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-sm text-velmora-obsidian">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-stone px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-sans uppercase tracking-widest text-velmora-mink">
                Subtotal
              </span>
              <span className="font-serif text-xl text-velmora-obsidian">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs font-sans text-velmora-mink text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-obsidian text-velmora-ivory py-4 text-xs font-sans uppercase tracking-widest hover:bg-velmora-charcoal transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-stone text-velmora-charcoal py-3 text-xs font-sans uppercase tracking-widest hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
